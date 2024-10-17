import { Hex } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import type { CastId as Protobufs_CastId } from '../Protobufs/message_pb.js'
import type { CastId } from './types.js'

export function CastId_fromMessage(
  castId: Protobufs_CastId,
): CastId_fromMessage.ReturnType {
  return {
    fid: castId.fid,
    hash: Hex.fromBytes(castId.hash),
  } as const
}

export declare namespace CastId_fromMessage {
  type ReturnType = CastId

  type ErrorType = GlobalErrorType
}

CastId_fromMessage.parseError = (error: unknown) =>
  error as CastId_fromMessage.ErrorType
