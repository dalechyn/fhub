import type { Types } from 'ox'

export type Meta = {
  hash: Types.Hex
  signer: Types.Hex
  signature: Types.Hex
  hashScheme: 'blake3'
  signatureScheme: 'ed25519' | 'eip712'
  dataBytes: Types.Hex | undefined
}
