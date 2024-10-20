import type { Types } from 'ox'
import type { Meta } from '../Meta/types.js'

export type CastId = {
  fid: bigint
  hash: Types.Hex
}

export type Embed =
  | {
      type: 'url'
      url: string
    }
  | ({ type: 'cast' } & CastId)

export type Parent =
  | ({
      type: 'cast'
    } & CastId)
  | {
      type: 'url'
      url: string
    }

export type Cast = {
  meta: Meta
  authorFid: bigint
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
