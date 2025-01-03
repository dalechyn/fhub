import type { MaybeArray, MaybePromise } from '../fhub/internal/types.js'

export type Config = {
  /** Hub RPC url */
  rpcUrl: string
  /** Output folder path */
  out: string
}

export function defineConfig(
  config: MaybeArray<Config> | (() => MaybePromise<MaybeArray<Config>>),
) {
  return config
}

export const defaultConfig = {
  out: 'src/hooks/fhub',
  rpcUrl: 'https://hub-grpc.pinata.cloud',
} satisfies Config
