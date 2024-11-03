import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { VerificationRemove } from './types.js'

export function VerificationRemove_fromMessageProtobuf(
  message: VerificationRemove_fromMessageProtobuf.ParametersType,
): VerificationRemove_fromMessageProtobuf.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'verificationRemoveBody')
    throw new Error('bad case')

  return {
    fid: message.data.fid,
    timestamp: message.data.timestamp,
    meta: Meta_fromProtobuf(message),
    address: message.data.body.value.address.toString(),
    protocol:
      message.data.body.value.protocol === MessageProtobuf.Protocol.SOLANA
        ? 'solana'
        : 'ethereum',
  } as const
}

export declare namespace VerificationRemove_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = VerificationRemove
  type ErrorType = GlobalErrorType
}

VerificationRemove_fromMessageProtobuf.parseError = (error: unknown) =>
  error as VerificationRemove_fromMessageProtobuf.ErrorType
