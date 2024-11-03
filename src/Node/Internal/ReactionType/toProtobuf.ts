import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { ReactionType } from './types.js'

export function ReactionType_toProtobuf(
  type: ReactionType_toProtobuf.ParametersType,
): ReactionType_toProtobuf.ReturnType {
  if (type === 'like') return MessageProtobuf.ReactionType.LIKE
  if (type === 'recast') return MessageProtobuf.ReactionType.RECAST
  // @TODO: error
  throw new Error('unknwo tyep')
}

export declare namespace ReactionType_toProtobuf {
  type ParametersType = ReactionType
  type ReturnType = MessageProtobuf.ReactionType

  type ErrorType = GlobalErrorType
}

ReactionType_toProtobuf.parseError = (error: unknown) =>
  error as ReactionType_toProtobuf.ErrorType
