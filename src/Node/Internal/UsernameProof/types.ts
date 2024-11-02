import type { Types } from 'ox'
import type { Meta } from '../Meta/types.js'

export type UsernameProof = {
  meta: Meta
  timestamp: bigint
  name: string
  owner: string
  signature: Types.Hex
  fid: bigint
  type: 'fname' | 'ensL1'
}
