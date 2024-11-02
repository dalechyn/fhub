import type { Embed } from '../Embed/types.js'
import type { Meta } from '../Meta/types.js'
import type { Parent } from '../Parent/types.js'

export type Cast = {
  meta: Meta
  fid: bigint
  timestamp: number
  parent: Parent | undefined
  text: {
    value: string
    embeds: Embed[] | undefined
    mentions:
      | {
          fid: bigint
          position: number
        }[]
      | undefined
  }
  isLong: boolean
}
