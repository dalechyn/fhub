import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Reaction_toProtobuf } from '../Reaction/toProtobuf.js'
import type { Reaction } from '../Reaction/types.js'

export function ReactionRemove_toMessageDataProtobuf(
  cast: ReactionRemove_toMessageDataProtobuf.ParametersType,
): ReactionRemove_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: cast.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.REACTION_REMOVE,
    fid: cast.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'reactionBody',
      value: Reaction_toProtobuf(cast),
    },
  })
}

export declare namespace ReactionRemove_toMessageDataProtobuf {
  type ParametersType = Omit<Reaction, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

ReactionRemove_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as ReactionRemove_toMessageDataProtobuf.ErrorType
