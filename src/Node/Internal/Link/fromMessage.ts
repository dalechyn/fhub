import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import type { Message as Protobufs_Message } from '../Protobufs/message_pb.js'
import type { Link } from './types.js'

//@TODO: errors
export function Link_fromMessage(
  message: Protobufs_Message,
): Link_fromMessage.ReturnType {
  if (!message.data) throw new Error('Link must have data')

  if (message.data.body.case !== 'linkBody') throw new Error('Not link message')
  if (message.data.body.value.target.case !== 'targetFid')
    throw new Error('Invalid target')

  return {
    meta: Meta_fromMessage(message),
    type: message.data.body.value.type,
    displayTimestamp: message.data.body.value.displayTimestamp,
    fid: message.data.body.value.target.value,
  }
}

export declare namespace Link_fromMessage {
  type ReturnType = Link

  type ErrorType = GlobalErrorType
}
Link_fromMessage.parseError = (error: unknown) =>
  error as Link_fromMessage.ErrorType
