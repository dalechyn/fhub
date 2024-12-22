import { create } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from './Error.js'
import type * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type Verification = {
  meta: Meta.Meta
  address: string
  claimSignature: Types.Hex
  blockHash: Types.Hex
  type: 'eoa' | 'contract'
  chainId: number
  protocol: 'ethereum' | 'solana'
  fid: bigint
  timestamp: number
}

export function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
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

export declare namespace fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.VerificationAddAddressBody
    meta: Meta.Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Verification

  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  verification: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
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

export declare namespace toProtobuf {
  type ParametersType = Omit<Verification, 'meta'>
  type ReturnType = MessageProtobuf.VerificationAddAddressBody

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
