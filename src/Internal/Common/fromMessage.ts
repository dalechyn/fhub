import { Hex } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import type { Message } from '../Protobufs/message_pb.js'
import type { Common } from './types.js'

export function Common_fromMessage(
  message: Message,
): Common_fromMessage.ReturnType {
  const hash = Hex.fromBytes(message.hash)
  const signer = Hex.fromBytes(message.signer)
  const signature = Hex.fromBytes(message.signature)
  const hashScheme = message.hashScheme
  const signatureScheme = message.signatureScheme
  const dataBytes = message.dataBytes
    ? Hex.fromBytes(message.dataBytes)
    : undefined

  return {
    hash,
    signer,
    signature,
    hashScheme,
    signatureScheme,
    dataBytes,
  } as const
}

export declare namespace Common_fromMessage {
  type ReturnType = Common

  type ErrorType = GlobalErrorType
}

Common_fromMessage.parseError = (error: unknown) =>
  error as Common_fromMessage.ErrorType
