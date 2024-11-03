import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { CastId } from './types.js'

export function CastId_fromProtobuf(
  castId: CastId_fromProtobuf.ParametersType,
): CastId_fromProtobuf.ReturnType {
  return {
    fid: castId.fid,
    hash: Hex.fromBytes(castId.hash),
  } as const
}

export declare namespace CastId_fromProtobuf {
  type ParametersType = MessageProtobuf.CastId
  type ReturnType = CastId
  type ErrorType = GlobalErrorType
}

CastId_fromProtobuf.parseError = (error: unknown) =>
  error as CastId_fromProtobuf.ErrorType
