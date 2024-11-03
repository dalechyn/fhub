import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Verification_toProtobuf } from '../Verification/toProtobuf.js'
import type { Verification } from '../Verification/types.js'

export function VerificationAdd_toMessageDataProtobuf(
  verification: VerificationAdd_toMessageDataProtobuf.ParametersType,
): VerificationAdd_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: verification.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.VERIFICATION_ADD_ETH_ADDRESS,
    fid: verification.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'verificationAddAddressBody',
      value: Verification_toProtobuf(verification),
    },
  })
}

export declare namespace VerificationAdd_toMessageDataProtobuf {
  type ParametersType = Omit<Verification, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

VerificationAdd_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as VerificationAdd_toMessageDataProtobuf.ErrorType
