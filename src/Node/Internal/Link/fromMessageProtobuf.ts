import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Link_fromProtobuf } from '../Link/fromProtobuf.js'
import type { Link } from '../Link/types.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Link_InvalidMessageTypeError } from './errors.js'

export function Link_fromMessageProtobuf(
  message: Link_fromMessageProtobuf.ParametersType,
): Link_fromMessageProtobuf.ReturnType {
  const meta = Meta_fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data) throw new Error('`data` must be defined in Link message.')
  if (message.data.body.case !== 'linkBody')
    throw new Link_InvalidMessageTypeError({ hash: meta.hash })
  return Link_fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace Link_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Link
  type ErrorType =
    | Link_InvalidMessageTypeError
    | Meta_fromProtobuf.ErrorType
    | GlobalErrorType
}

Link_fromMessageProtobuf.parseError = (error: unknown) =>
  error as Link_fromMessageProtobuf.ErrorType
