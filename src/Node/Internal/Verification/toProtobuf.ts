import { create } from '@bufbuild/protobuf'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Verification } from './types.js'

export function Verification_toProtobuf(
  verification: Verification_toProtobuf.ParametersType,
): Verification_toProtobuf.ReturnType {
  return create(MessageProtobuf.VerificationAddAddressBodySchema, {
    verificationType: verification.type === 'eoa' ? 0 : 1,
    address: Hex.toBytes(Hex.fromString(verification.address)),
    claimSignature: Hex.toBytes(verification.claimSignature),
    blockHash: Hex.toBytes(verification.blockHash),
    chainId: verification.chainId,
    protocol:
      verification.protocol === 'ethereum'
        ? MessageProtobuf.Protocol.ETHEREUM
        : MessageProtobuf.Protocol.SOLANA,
  })
}

export declare namespace Verification_toProtobuf {
  type ParametersType = Omit<Verification, 'meta'>
  type ReturnType = MessageProtobuf.VerificationAddAddressBody

  type ErrorType = GlobalErrorType
}

Verification_toProtobuf.parseError = (error: unknown) =>
  error as Verification_toProtobuf.ErrorType
