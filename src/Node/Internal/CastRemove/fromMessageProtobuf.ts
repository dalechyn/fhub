import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { CastRemove } from './types.js'

export function CastRemove_fromMessageProtobuf(
  message: CastRemove_fromMessageProtobuf.ParametersType,
): CastRemove_fromMessageProtobuf.ReturnType {
  const meta = Meta_fromProtobuf(message)

  // @TODO: separate error here
  if (!message.data) throw new Error('`data` must be defined in Cast message.')
  if (message.data.body.case !== 'castRemoveBody')
    throw new Error('no cast remove body')

  return {
    meta,
    hash: Hex.fromBytes(message.data.body.value.targetHash),
    fid: message.data.fid,
    timestamp: FARCASTER_EPOCH_TIMESTAMP + message.data.timestamp,
  }
}

export declare namespace CastRemove_fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = CastRemove
  type ErrorType = Meta_fromProtobuf.ErrorType | GlobalErrorType
}

CastRemove_fromMessageProtobuf.parseError = (error: unknown) =>
  error as CastRemove_fromMessageProtobuf.ErrorType
