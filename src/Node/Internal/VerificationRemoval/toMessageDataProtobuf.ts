import { create } from '@bufbuild/protobuf'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { VerificationRemove } from './types.js'

export function VerificationRemove_toMessageDataProtobuf(
  verificationRemove: VerificationRemove_toMessageDataProtobuf.ParametersType,
): VerificationRemove_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: verificationRemove.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.VERIFICATION_REMOVE,
    fid: verificationRemove.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'verificationRemoveBody',
      value: create(MessageProtobuf.VerificationRemoveBodySchema, {
        address: Hex.toBytes(Hex.fromString(verificationRemove.address)),
        protocol:
          verificationRemove.protocol === 'solana'
            ? MessageProtobuf.Protocol.SOLANA
            : MessageProtobuf.Protocol.ETHEREUM,
      }),
    },
  })
}

export declare namespace VerificationRemove_toMessageDataProtobuf {
  type ParametersType = Omit<VerificationRemove, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

VerificationRemove_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as VerificationRemove_toMessageDataProtobuf.ErrorType
