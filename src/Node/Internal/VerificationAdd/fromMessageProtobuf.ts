import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Verification_fromProtobuf } from '../Verification/fromProtobuf.js'
import type { Verification } from '../Verification/types.js'
import { VerificationAdd_InvalidMessageTypeError } from './errors.js'

export function VerificationAdd_fromMessageProtobuf(
  message: VerificationAdd_fromMessageProtobuf.ParametersType,
): VerificationAdd_fromMessageProtobuf.ReturnType {
  const meta = Meta_fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in VerificationAdd message.')
  if (message.data.body.case !== 'verificationAddAddressBody')
    throw new VerificationAdd_InvalidMessageTypeError({ hash: meta.hash })
  return Verification_fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace VerificationAdd_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Verification
  type ErrorType =
    | VerificationAdd_InvalidMessageTypeError
    | Meta_fromProtobuf.ErrorType
    | GlobalErrorType
}

VerificationAdd_fromMessageProtobuf.parseError = (error: unknown) =>
  error as VerificationAdd_fromMessageProtobuf.ErrorType
