import type { Types } from 'ox'

export type Meta = {
  hash: Types.Hex
  signer: Types.Hex
  signature: Types.Hex
  hashScheme: 'blake3' | null
  signatureScheme: 'ed25519' | 'eip712' | null
  dataBytes: Types.Hex | undefined
}
