import type { Meta } from '../Meta/types.js'

export type LinkCompactState = {
  meta: Meta
  type: string
  fids: bigint[]
  fid: bigint
  timestamp: number
}
