import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { LinkCompactState } from './types.js'

//@TODO: errors
export function LinkCompactState_fromMessageProtobuf(
  message: LinkCompactState_fromMessageProtobuf.ParametersType,
): LinkCompactState_fromMessageProtobuf.ReturnType {
  if (!message.data) throw new Error('Link must have data')

  if (message.data.body.case !== 'linkCompactStateBody')
    throw new Error('Not linkCompactStateBody message')

  return {
    meta: Meta_fromProtobuf(message),
    type: message.data.body.value.type,
    fids: message.data.body.value.targetFids,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  }
}

export declare namespace LinkCompactState_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = LinkCompactState
  type ErrorType = GlobalErrorType
}
LinkCompactState_fromMessageProtobuf.parseError = (error: unknown) =>
  error as LinkCompactState_fromMessageProtobuf.ErrorType
