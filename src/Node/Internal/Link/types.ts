import type { Meta } from '../Meta/types.js'

export type Link = {
  meta: Meta
  type: string
  displayTimestamp: number | undefined
  fid: bigint
}
