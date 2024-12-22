export type ReactionType = 'like' | 'recast'
import type { GlobalErrorType } from './Error.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export function fromProtobuf(
  reactionType: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  return reactionType === MessageProtobuf.ReactionType.RECAST
    ? ('recast' as const)
    : ('like' as const)
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.ReactionType
  type ReturnType = ReactionType
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  type: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  if (type === 'like') return MessageProtobuf.ReactionType.LIKE
  if (type === 'recast') return MessageProtobuf.ReactionType.RECAST
  // @TODO: error
  throw new Error('unknwo tyep')
}

export declare namespace toProtobuf {
  type ParametersType = ReactionType
  type ReturnType = MessageProtobuf.ReactionType

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
