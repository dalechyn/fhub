import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Cast_fromProtobuf } from '../Cast/fromProtobuf.js'
import type { Cast } from '../Cast/types.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { CastAdd_InvalidMessageTypeError } from './errors.js'

export function CastAdd_fromMessageProtobuf(
  message: CastAdd_fromMessageProtobuf.ParametersType,
): CastAdd_fromMessageProtobuf.ReturnType {
  const meta = Meta_fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in CastAdd message.')
  if (message.data.body.case !== 'castAddBody')
    throw new CastAdd_InvalidMessageTypeError({ hash: meta.hash })
  return Cast_fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace CastAdd_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Cast
  type ErrorType =
    | CastAdd_InvalidMessageTypeError
    | Meta_fromProtobuf.ErrorType
    | GlobalErrorType
}

CastAdd_fromMessageProtobuf.parseError = (error: unknown) =>
  error as CastAdd_fromMessageProtobuf.ErrorType
