import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import { Link_toProtobuf } from '../Link/toProtobuf.js'
import type { Link } from '../Link/types.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'

export function LinkRemove_toMessageDataProtobuf(
  link: LinkRemove_toMessageDataProtobuf.ParametersType,
): LinkRemove_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: link.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.LINK_REMOVE,
    fid: link.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'linkBody',
      value: Link_toProtobuf(link),
    },
  })
}

export declare namespace LinkRemove_toMessageDataProtobuf {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

LinkRemove_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as LinkRemove_toMessageDataProtobuf.ErrorType
