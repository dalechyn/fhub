import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import {
  type Message as Protobufs_Message,
  Protocol,
} from '../Protobufs/message_pb.js'
import type { VerificationRemoval } from './types.js'

export function VerificationRemoval_fromMessage(
  message: Protobufs_Message,
): VerificationRemoval_fromMessage.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'verificationRemoveBody')
    throw new Error('bad case')

  return {
    address: message.data.body.value.address.toString(),
    protocol:
      message.data.body.value.protocol === Protocol.SOLANA
        ? 'solana'
        : 'ethereum',
  } as const
}

export declare namespace VerificationRemoval_fromMessage {
  type ReturnType = VerificationRemoval

  type ErrorType = GlobalErrorType
}

VerificationRemoval_fromMessage.parseError = (error: unknown) =>
  error as VerificationRemoval_fromMessage.ErrorType
