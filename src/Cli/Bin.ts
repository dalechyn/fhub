#!/usr/bin/env node
import { cac } from 'cac'

import { version } from '../version.js'
import { type Generate, generate } from './Commands/Generate.js'
import { type Init, init } from './Commands/Init.js'
import * as Logger from './Logger.js'

const cli = cac('fhub')

cli
  .command('generate', 'generate code based on configuration')
  .option('-c, --config <path>', '[string] path to config file')
  .option('-r, --root <path>', '[string] root path to resolve config from')
  // .option('-w, --watch', '[boolean] watch for changes')
  .example((name) => `${name} generate`)
  .action(async (options: Generate) => await generate(options))

cli
  .command('init', 'create configuration file')
  .option('-c, --config <path>', '[string] path to config file')
  .option('-r, --root <path>', '[string] root path to resolve config from')
  .example((name) => `${name} init`)
  .action(async (options: Init) => await init(options))

cli.help()
cli.version(version)

void (async () => {
  try {
    process.title = 'node (fhub)'
  } catch {}

  try {
    // Parse CLI args without running command
    cli.parse(process.argv, { run: false })
    if (!cli.matchedCommand) {
      if (cli.args.length === 0) {
        if (!cli.options.help && !cli.options.version) cli.outputHelp()
      } else throw new Error(`Unknown command: ${cli.args.join(' ')}`)
    }
    await cli.runMatchedCommand()
    process.exit(0)
  } catch (error) {
    Logger.error(`\n${(error as Error).message}`)
    process.exit(1)
  }
})()
