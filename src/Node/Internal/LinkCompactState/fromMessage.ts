import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import type { Message as Protobufs_Message } from '../Protobufs/message_pb.js'
import type { LinkCompactState } from './types.js'

//@TODO: errors
export function LinkCompactState_fromMessage(
  message: Protobufs_Message,
): LinkCompactState_fromMessage.ReturnType {
  if (!message.data) throw new Error('Link must have data')

  if (message.data.body.case !== 'linkCompactStateBody')
    throw new Error('Not linkCompactStateBody message')

  return {
    meta: Meta_fromMessage(message),
    type: message.data.body.value.type,
    fids: message.data.body.value.targetFids,
  }
}

export declare namespace LinkCompactState_fromMessage {
  type ReturnType = LinkCompactState

  type ErrorType = GlobalErrorType
}
LinkCompactState_fromMessage.parseError = (error: unknown) =>
  error as LinkCompactState_fromMessage.ErrorType
