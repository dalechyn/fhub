import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_toProtobuf } from '../CastId/toProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Parent_InvalidParentTypeError } from './errors.js'
import type { Parent } from './types.js'

export function Parent_toProtobuf(
  parent: Parent_toProtobuf.ParametersType,
): Parent_toProtobuf.ReturnType {
  if (typeof parent === 'undefined')
    return {
      case: undefined,
      value: undefined,
    }
  if (parent.type === 'url')
    return { case: 'parentUrl', value: parent.url } as const
  if (parent.type === 'cast')
    return {
      case: 'parentCastId',
      value: CastId_toProtobuf(parent),
    } as const

  throw new Parent_InvalidParentTypeError({ parent })
}

export declare namespace Parent_toProtobuf {
  type ParametersType = Parent | undefined
  type ReturnType = MessageProtobuf.CastAddBody['parent']

  type ErrorType =
    | Parent_InvalidParentTypeError
    | CastId_toProtobuf.ErrorType
    | GlobalErrorType
}
Parent_toProtobuf.parseError = (error: unknown) =>
  error as Parent_toProtobuf.ErrorType
