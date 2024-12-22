import { create } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from './Error.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type CastId = {
  fid: bigint
  hash: Types.Hex
}

export function fromProtobuf(
  castId: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  return {
    fid: castId.fid,
    hash: Hex.fromBytes(castId.hash),
  } as const
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.CastId
  type ReturnType = CastId
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  castId: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return create(MessageProtobuf.CastIdSchema, {
    fid: castId.fid,
    hash: Hex.toBytes(castId.hash),
  })
}

export declare namespace toProtobuf {
  type ParametersType = CastId
  type ReturnType = MessageProtobuf.CastId
  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
