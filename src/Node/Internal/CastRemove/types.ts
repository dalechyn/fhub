import type { Types } from 'ox'
import type { Meta } from '../Meta/types.js'

export type CastRemove = {
  meta: Meta
  hash: Types.Hex
  fid: bigint
  timestamp: number
}
