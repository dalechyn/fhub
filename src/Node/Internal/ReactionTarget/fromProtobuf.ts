import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_fromProtobuf } from '../CastId/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { ReactionTarget } from './types.js'

export function ReactionTarget_fromProtobuf(
  target: MessageProtobuf.ReactionBody['target'],
): ReactionTarget_fromProtobuf.ReturnType {
  return target.case === 'targetUrl'
    ? {
        type: 'url',
        url: target.value,
      }
    : {
        type: 'cast',
        ...CastId_fromProtobuf(target.value!),
      }
}

export declare namespace ReactionTarget_fromProtobuf {
  type ReturnType = ReactionTarget

  type ErrorType = GlobalErrorType
}

ReactionTarget_fromProtobuf.parseError = (error: unknown) =>
  error as ReactionTarget_fromProtobuf.ErrorType
