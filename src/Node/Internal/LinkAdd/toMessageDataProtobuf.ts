import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import { Link_toProtobuf } from '../Link/toProtobuf.js'
import type { Link } from '../Link/types.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'

export function LinkAdd_toMessageDataProtobuf(
  link: LinkAdd_toMessageDataProtobuf.ParametersType,
): LinkAdd_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: link.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.LINK_ADD,
    fid: link.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'linkBody',
      value: Link_toProtobuf(link),
    },
  })
}

export declare namespace LinkAdd_toMessageDataProtobuf {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

LinkAdd_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as LinkAdd_toMessageDataProtobuf.ErrorType
