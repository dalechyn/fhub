import type { Types } from 'ox'
import type { HashScheme, SignatureScheme } from '../Protobufs/message_pb.js'

export type Common = {
  hash: Types.Hex
  signer: Types.Hex
  signature: Types.Hex
  hashScheme: HashScheme
  signatureScheme: SignatureScheme
  dataBytes: Types.Hex | undefined
}
