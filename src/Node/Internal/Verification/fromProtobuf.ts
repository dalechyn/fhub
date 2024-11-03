import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Meta } from '../Meta/types.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Verification } from './types.js'

export function Verification_fromProtobuf(
  parameters: Verification_fromProtobuf.ParametersType,
): Verification_fromProtobuf.ReturnType {
  return {
    meta: parameters.meta,
    fid: parameters.fid,
    timestamp: parameters.timestamp,
    type: parameters.body.verificationType === 0 ? 'eoa' : 'contract',
    address: parameters.body.address.toString(),
    claimSignature: Hex.fromBytes(parameters.body.claimSignature),
    blockHash: Hex.fromBytes(parameters.body.blockHash),
    chainId: parameters.body.chainId,
    protocol:
      parameters.body.protocol === MessageProtobuf.Protocol.SOLANA
        ? 'solana'
        : 'ethereum',
  } as const
}

export declare namespace Verification_fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.VerificationAddAddressBody
    meta: Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Verification

  type ErrorType = GlobalErrorType
}

Verification_fromProtobuf.parseError = (error: unknown) =>
  error as Verification_fromProtobuf.ErrorType
