import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { ReactionType } from './types.js'

export function ReactionType_fromProtobuf(
  reactionType: ReactionType_fromProtobuf.ParametersType,
): ReactionType_fromProtobuf.ReturnType {
  return reactionType === MessageProtobuf.ReactionType.RECAST
    ? ('recast' as const)
    : ('like' as const)
}

export declare namespace ReactionType_fromProtobuf {
  type ParametersType = MessageProtobuf.ReactionType
  type ReturnType = ReactionType
  type ErrorType = GlobalErrorType
}

ReactionType_fromProtobuf.parseError = (error: unknown) =>
  error as ReactionType_fromProtobuf.ErrorType
