import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { ReactionTarget_toProtobuf } from '../ReactionTarget/toProtobuf.js'
import { ReactionType_toProtobuf } from '../ReactionType/toProtobuf.js'
import type { Reaction } from './types.js'

export function Reaction_toProtobuf(
  reaction: Reaction_toProtobuf.ParametersType,
): Reaction_toProtobuf.ReturnType {
  return create(MessageProtobuf.ReactionBodySchema, {
    type: ReactionType_toProtobuf(reaction.type),
    target: ReactionTarget_toProtobuf(reaction.target),
  })
}

export declare namespace Reaction_toProtobuf {
  type ParametersType = Omit<Reaction, 'meta'>
  type ReturnType = MessageProtobuf.ReactionBody

  type ErrorType = GlobalErrorType
}

Reaction_toProtobuf.parseError = (error: unknown) =>
  error as Reaction_toProtobuf.ErrorType
