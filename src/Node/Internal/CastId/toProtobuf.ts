import { create } from '@bufbuild/protobuf'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { CastId } from './types.js'

export function CastId_toProtobuf(
  castId: CastId_toProtobuf.ParametersType,
): CastId_toProtobuf.ReturnType {
  return create(MessageProtobuf.CastIdSchema, {
    fid: castId.fid,
    hash: Hex.toBytes(castId.hash),
  })
}

export declare namespace CastId_toProtobuf {
  type ParametersType = CastId
  type ReturnType = MessageProtobuf.CastId
  type ErrorType = GlobalErrorType
}

CastId_toProtobuf.parseError = (error: unknown) =>
  error as CastId_toProtobuf.ErrorType
