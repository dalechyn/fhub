import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Meta } from '../Meta/types.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { ReactionTarget_fromProtobuf } from '../ReactionTarget/fromProtobuf.js'
import { ReactionType_fromProtobuf } from '../ReactionType/fromProtobuf.js'
import type { Reaction } from './types.js'

export function Reaction_fromProtobuf(
  parameters: Reaction_fromProtobuf.ParametersType,
): Reaction_fromProtobuf.ReturnType {
  return {
    meta: parameters.meta,
    fid: parameters.fid,
    timestamp: parameters.timestamp,
    type: ReactionType_fromProtobuf(parameters.body.type),
    target: ReactionTarget_fromProtobuf(parameters.body.target),
  } as const
}

export declare namespace Reaction_fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.ReactionBody
    meta: Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Reaction
  type ErrorType = GlobalErrorType
}

Reaction_fromProtobuf.parseError = (error: unknown) =>
  error as Reaction_fromProtobuf.ErrorType
