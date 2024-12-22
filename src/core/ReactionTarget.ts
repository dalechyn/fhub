import * as CastId from './CastId.js'
import type { GlobalErrorType } from './Error.js'
import type * as MessageProtobuf from './protobufs/message_pb.js'

export type ReactionTarget =
  | ({
      type: 'cast'
    } & CastId.CastId)
  | {
      type: 'url'
      url: string
    }

export function fromProtobuf(
  target: MessageProtobuf.ReactionBody['target'],
): fromProtobuf.ReturnType {
  return target.case === 'targetUrl'
    ? {
        type: 'url',
        url: target.value,
      }
    : {
        type: 'cast',
        ...CastId.fromProtobuf(target.value!),
      }
}

export declare namespace fromProtobuf {
  type ReturnType = ReactionTarget

  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  target: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return target.type === 'cast'
    ? { value: CastId.toProtobuf(target), case: 'targetCastId' }
    : { value: target.url, case: 'targetUrl' }
}

export declare namespace toProtobuf {
  type ParametersType = ReactionTarget
  type ReturnType = MessageProtobuf.ReactionBody['target']

  type ErrorTarget = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorTarget
