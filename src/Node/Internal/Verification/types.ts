import type { Types } from 'ox'
import type { Meta } from '../Meta/types.js'

export type Verification = {
  meta: Meta
  address: string
  claimSignature: Types.Hex
  blockHash: Types.Hex
  type: 'eoa' | 'contract'
  chainId: number
  protocol: 'ethereum' | 'solana'
  fid: bigint
  timestamp: number
}
