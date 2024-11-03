import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Reaction_InvalidMessageTypeError } from '../Reaction/errors.js'
import { Reaction_fromProtobuf } from './fromProtobuf.js'
import type { Reaction } from './types.js'

export function Reaction_fromMessageProtobuf(
  message: Reaction_fromMessageProtobuf.ParametersType,
): Reaction_fromMessageProtobuf.ReturnType {
  const meta = Meta_fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Reaction message.')
  if (message.data.body.case !== 'reactionBody')
    throw new Reaction_InvalidMessageTypeError({ hash: meta.hash })
  return Reaction_fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace Reaction_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Reaction
  type ErrorType =
    | Reaction_InvalidMessageTypeError
    | Meta_fromProtobuf.ErrorType
    | GlobalErrorType
}

Reaction_fromMessageProtobuf.parseError = (error: unknown) =>
  error as Reaction_fromMessageProtobuf.ErrorType
