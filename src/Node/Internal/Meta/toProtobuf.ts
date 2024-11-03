import * as ed from '@noble/ed25519'
import * as sha from '@noble/hashes/sha512'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Meta } from './types.js'

ed.etc.sha512Sync = (...m) => sha.sha512(ed.etc.concatBytes(...m))

export function Meta_toProtobuf(
  meta: Meta_toProtobuf.ParametersType,
): Meta_toProtobuf.ReturnType {
  return {
    hash: Hex.toBytes(meta.hash),
    signer: Hex.toBytes(meta.signer),
    signature: Hex.toBytes(meta.signature),
    hashScheme: MessageProtobuf.HashScheme.BLAKE3,
    signatureScheme: MessageProtobuf.SignatureScheme.ED25519,
    ...(meta.dataBytes ? { dataBytes: Hex.toBytes(meta.dataBytes) } : {}),
  } as const
}

export declare namespace Meta_toProtobuf {
  type ParametersType = Meta
  type ReturnType = Pick<
    MessageProtobuf.Message,
    | 'hash'
    | 'hashScheme'
    | 'dataBytes'
    | 'signatureScheme'
    | 'signature'
    | 'signer'
  >

  type ErrorType = GlobalErrorType
}

Meta_toProtobuf.parseError = (error: unknown) =>
  error as Meta_toProtobuf.ErrorType
