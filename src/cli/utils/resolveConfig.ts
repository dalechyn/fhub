import { bundleRequire } from 'bundle-require'

import type { MaybeArray } from '../../fhub/internal/types.js'
import type { Config } from '../Config.js'

type ResolveConfigParameters = {
  /** Path to config file */
  configPath: string
}

/** Bundles and returns fhub config object from path. */
export async function resolveConfig(
  parameters: ResolveConfigParameters,
): Promise<MaybeArray<Config>> {
  const { configPath } = parameters
  const res = await bundleRequire({ filepath: configPath })
  let config = res.mod.default
  if (config.default) config = config.default
  if (typeof config !== 'function') return config
  return await config()
}
