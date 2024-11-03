import type { Meta } from '../Meta/types.js'

export type VerificationRemove = {
  meta: Meta
  address: string
  protocol: 'ethereum' | 'solana'
  fid: bigint
  timestamp: number
}
