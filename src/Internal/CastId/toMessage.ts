import { Hex } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import type { CastId as Protobufs_CastId } from '../Protobufs/message_pb.js'
import type { CastId } from './types.js'

export function CastId_toMessage(castId: CastId): CastId_toMessage.ReturnType {
  return {
    $typeName: 'CastId',
    fid: castId.fid,
    hash: Hex.toBytes(castId.hash),
  } as const
}

export declare namespace CastId_toMessage {
  type ReturnType = Protobufs_CastId

  type ErrorType = GlobalErrorType
}

CastId_toMessage.parseError = (error: unknown) =>
  error as CastId_toMessage.ErrorType
