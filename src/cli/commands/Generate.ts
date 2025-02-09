import { default as dedent } from 'dedent'
import { default as fs } from 'fs-extra'
import { basename, dirname, resolve } from 'pathe'
import pc from 'picocolors'
import { z } from 'zod'

import { fileURLToPath } from 'node:url'
import { fromZodError } from '../Errors.js'
import * as logger from '../Logger.js'
import { findConfig } from '../utils/findConfig.js'
import { format } from '../utils/format.js'
import { getIsUsingTypeScript } from '../utils/getIsUsingTypeScript.js'
import { resolveConfig } from '../utils/resolveConfig.js'

const Generate = z.object({
  /** Path to config file */
  config: z.string().optional(),
  /** Directory to search for config file */
  root: z.string().optional(),
})
export type Generate = z.infer<typeof Generate>

export async function generate(options: Generate = {}) {
  // Validate command line options
  try {
    await Generate.parseAsync(options)
  } catch (error) {
    if (error instanceof z.ZodError)
      throw fromZodError(error, { prefix: 'Invalid option' })
    throw error
  }

  // Get cli config file
  const configPath = await findConfig(options)
  if (!configPath) {
    if (options.config)
      throw new Error(`Config not found at ${pc.gray(options.config)}`)
    throw new Error('Config not found')
  }

  const resolvedConfigs = await resolveConfig({ configPath })
  const isTypeScript = await getIsUsingTypeScript()

  const outNames = new Set<string>()
  const isArrayConfig = Array.isArray(resolvedConfigs)
  const configs = isArrayConfig ? resolvedConfigs : [resolvedConfigs]
  for (const config of configs) {
    if (isArrayConfig)
      logger.log(`Using config ${pc.gray(basename(configPath))}`)
    if (!config.out) throw new Error('out is required.')
    if (outNames.has(config.out))
      throw new Error(`out "${config.out}" must be unique.`)
    outNames.add(config.out)

    const spinner = logger.spinner()

    // Generate client file
    spinner.start('Generating client file')
    await writeClientFile({
      isTypeScript,
      rpcUrl: config.rpcUrl,
      out: config.out,
    })
    spinner.succeed()

    // Get the filenames of available top level actions
    spinner.start('Generating fhub Action Hooks')
    const actionsPath = resolve(
      dirname(fileURLToPath(import.meta.url)),
      '..',
      '..',
      'fhub',
      'actions',
    )
    const files = await fs.readdir(actionsPath)

    await Promise.all(
      files.map(async (file) => {
        // Reading function names
        const fileContents = await fs.readFile(
          resolve(actionsPath, file),
          'utf8',
        )

        // cutting of .ts or .js
        const namespaceName = file.slice(0, -3)

        // Idk how to generate server actions that return an async iterator – not sure this is possible
        if (namespaceName === 'Watch') return

        const functionNames = (() => {
          const matches = [
            ...fileContents.matchAll(
              /export async function (?<functionName>.*)\(/gm,
            ),
          ]
          return matches.map((match) => {
            const functionName = match.groups?.functionName
            if (!functionName)
              throw new Error('Unexpected – cant retrieve function name')
            return functionName
          })
        })().filter((name) => name.includes('Preconstruct'))

        // Creating sub directories with server actions

        await Promise.all(
          functionNames.map(async (functionName) => {
            const hookType = ['create', 'update'].some(
              (triggerFnName) => triggerFnName === functionName,
            )
              ? 'Mutation'
              : 'Query'
            const outputHook = `use${namespaceName}${functionName.slice(0, 1).toUpperCase()}${functionName.slice(1)}${hookType}`
            await fs.ensureDir(resolve(config.out, outputHook))

            // Creating action.ts file
            const actionFileContent = await format(dedent`
              'use server'
              import { fhubClient } from '../client'
              import { Actions } from 'fhub'

              export async function action(parameters${isTypeScript ? `: Actions.${namespaceName}.${functionName}.ParametersType` : ''}): ${isTypeScript ? `Promise<Actions.${namespaceName}.${functionName}.ReturnType>` : ''} {
                return Actions.${namespaceName}.${functionName}(fhubClient, parameters)
              }
            `)
            await fs.writeFile(
              resolve(
                config.out,
                outputHook,
                `action.${isTypeScript ? 'ts' : 'js'}`,
              ),
              actionFileContent,
            )

            // Creating hook file
            const hookContents = await (async () => {
              if (hookType === 'Mutation') {
                return await format(dedent`
                  import { action } from './action'
                  ${
                    isTypeScript
                      ? dedent`
                          import { Actions } from 'fhub'
                          import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
                        `
                      : dedent`
                          import { useMutation } from '@tanstack/react-query'
                        `
                  }

                  export function ${outputHook}({mutation = {}}${
                    isTypeScript
                      ? `: {
                    mutation?: UseMutationOptions<Actions.${namespaceName}.${functionName}.ReturnType, Actions.${namespaceName}.${functionName}.ErrorType, Exclude<Actions.${namespaceName}.${functionName}.ParametersType, { message: unknown }>> | undefined
                  } = {}`
                      : ''
                  }) {
                    return useMutation({
                      ...mutation,
                      mutationKey: ['${namespaceName}.${functionName}'],
                      mutationFn: async (args)=> {
                        const message = await Actions.${namespaceName}.${functionName}Preconstruct(args)
                        return action({ message })
                      } 
                    })
                  }
                `)
              }

              return format(dedent`
                import { action } from './action'
                ${
                  isTypeScript
                    ? dedent`
                  import type { Actions } from 'fhub'
                  import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
                `
                    : "import { useQuery } from '@tanstack/react-query'"
                }

                ${isTypeScript ? `type QueryKey = ['${namespaceName}.${functionName}', Actions.${namespaceName}.${functionName}.ParametersType | undefined]` : ''}

                function queryKey(parameters${isTypeScript ? `: Actions.${namespaceName}.${functionName}.ParametersType | undefined` : ''})${isTypeScript ? ': QueryKey' : ''} {
                  return ['${namespaceName}.${functionName}', parameters] as const
                }
                
                export function ${outputHook}({query = {}, args}${
                  isTypeScript
                    ? `: {
                  query?: Omit<UseQueryOptions<Actions.${namespaceName}.${functionName}.ReturnType, Actions.${namespaceName}.${functionName}.ErrorType, Actions.${namespaceName}.${functionName}.ReturnType, QueryKey>, 'queryKey'> | undefined
                  args?: Actions.${namespaceName}.${functionName}.ParametersType | undefined
                }`
                    : ''
                }) {
                  const enabled = Boolean(args && (query.enabled ?? true))
                  return useQuery({
                    ...query,
                    queryKey: queryKey(args),
                    queryFn: ({queryKey:[_, args]}) => {
                      if (args === undefined) throw new Error('Missing args')
                      return action(args)
                    },
                    enabled 
                  })
                }
              `)
            })()

            await fs.writeFile(
              resolve(
                config.out,
                outputHook,
                `index.${isTypeScript ? 'ts' : 'js'}`,
              ),
              hookContents,
            )
          }),
        )
      }),
    )

    spinner.succeed()
    spinner.stop()
  }
}

async function writeClientFile({
  isTypeScript,
  rpcUrl,
  out,
}: {
  isTypeScript: boolean
  rpcUrl: string
  out: string
}) {
  // Format and write output
  const cwd = process.cwd()
  const outPath = resolve(cwd, out, `client.${isTypeScript ? 'ts' : 'js'}`)
  await fs.ensureDir(dirname(outPath))
  const formatted = await format(dedent`
    import { Client, Transport } from "fhub";

    export const fhubClient = Client.create(Transport.grpcNode({ baseUrl: '${rpcUrl}' }))
  `)
  await fs.writeFile(outPath, formatted)
}
