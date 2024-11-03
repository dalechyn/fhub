import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_toProtobuf } from '../CastId/toProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { ReactionTarget } from './types.js'

export function ReactionTarget_toProtobuf(
  target: ReactionTarget_toProtobuf.ParametersType,
): ReactionTarget_toProtobuf.ReturnType {
  return target.type === 'cast'
    ? { value: CastId_toProtobuf(target), case: 'targetCastId' }
    : { value: target.url, case: 'targetUrl' }
}

export declare namespace ReactionTarget_toProtobuf {
  type ParametersType = ReactionTarget
  type ReturnType = MessageProtobuf.ReactionBody['target']

  type ErrorTarget = GlobalErrorType
}

ReactionTarget_toProtobuf.parseError = (error: unknown) =>
  error as ReactionTarget_toProtobuf.ErrorTarget
