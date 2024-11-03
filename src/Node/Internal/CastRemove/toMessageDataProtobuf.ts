import { create } from '@bufbuild/protobuf'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { CastRemove } from './types.js'

export function CastRemove_toMessageDataProtobuf(
  castRemoval: CastRemove_toMessageDataProtobuf.ParametersType,
): CastRemove_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: castRemoval.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.CAST_REMOVE,
    fid: castRemoval.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'castRemoveBody',
      value: create(MessageProtobuf.CastRemoveBodySchema, {
        targetHash: Hex.toBytes(castRemoval.hash),
      }),
    },
  })
}

export declare namespace CastRemove_toMessageDataProtobuf {
  type ParametersType = Omit<CastRemove, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

CastRemove_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as CastRemove_toMessageDataProtobuf.ErrorType
