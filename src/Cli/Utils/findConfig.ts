import { findUp } from 'find-up'
import * as fs from 'fs-extra'
import { resolve } from 'pathe'

// Do not reorder
// In order of preference files are checked
const configFiles = [
  'fhub.config.ts',
  'fhub.config.js',
  'fhub.config.mjs',
  'fhub.config.mts',
]

type FindConfigParameters = {
  /** Config file name */
  config?: string | undefined
  /** Config file directory */
  root?: string | undefined
}

/**
 * Resolves path to fhub CLI config file.
 */
export async function findConfig(parameters: FindConfigParameters = {}) {
  const { config, root } = parameters
  const rootDir = resolve(root || process.cwd())
  if (config) {
    const path = resolve(rootDir, config)
    if (fs.pathExistsSync(path)) return path
    return
  }
  return findUp(configFiles, { cwd: rootDir })
}
