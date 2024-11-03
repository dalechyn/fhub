import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { UsernameProof_fromProtobuf } from './fromProtobuf.js'
import type { UsernameProof } from './types.js'

export function UsernameProof_fromMessageProtobuf(
  message: UsernameProof_fromMessageProtobuf.ParametersType,
): UsernameProof_fromMessageProtobuf.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'usernameProofBody')
    throw new Error('invalid type')
  return {
    meta: Meta_fromProtobuf(message),
    ...UsernameProof_fromProtobuf(message.data.body.value),
  }
}

export declare namespace UsernameProof_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = UsernameProof
  type ErrorType = GlobalErrorType
}

UsernameProof_fromMessageProtobuf.parseError = (error: unknown) =>
  error as UsernameProof_fromMessageProtobuf.ErrorType
