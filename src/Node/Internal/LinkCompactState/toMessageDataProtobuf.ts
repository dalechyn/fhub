import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import type { LinkCompactState } from '../LinkCompactState/types.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'

export function LinkCompactStateAdd_toMessageDataProtobuf(
  link: LinkCompactStateAdd_toMessageDataProtobuf.ParametersType,
): LinkCompactStateAdd_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: link.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.LINK_COMPACT_STATE,
    fid: link.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'linkCompactStateBody',
      value: create(MessageProtobuf.LinkCompactStateBodySchema, {
        type: link.type,
        targetFids: link.fids,
      }),
    },
  })
}

export declare namespace LinkCompactStateAdd_toMessageDataProtobuf {
  type ParametersType = Omit<LinkCompactState, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

LinkCompactStateAdd_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as LinkCompactStateAdd_toMessageDataProtobuf.ErrorType
