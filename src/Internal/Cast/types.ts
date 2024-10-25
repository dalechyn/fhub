import type { Embed } from '../Embed/types.js'
import type { Meta } from '../Meta/types.js'
import type { Parent } from '../Parent/types.js'

export type Cast = {
  meta: Meta
  fid: bigint
  timestamp: number
  /** @deprecated Depcrecated by Farcaster. Use `embeds`. */
  embedsDeprecated: string[] | undefined
  embeds: Embed[] | undefined
  mentions:
    | {
        fid: bigint
        position: number
      }[]
    | undefined
  parent: Parent | undefined
  text: string
  isLong: boolean
}
