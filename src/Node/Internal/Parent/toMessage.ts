import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_toMessage } from '../CastId/toMessage.js'
import type { CastAddBody } from '../Protobufs/message_pb.js'
import { Parent_InvalidParentTypeError } from './errors.js'
import type { Parent } from './types.js'

export function Parent_toMessage(
  parent: Parent | undefined,
): Parent_toMessage.ReturnType {
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
      value: CastId_toMessage(parent),
    } as const

  throw new Parent_InvalidParentTypeError({ parent })
}

export declare namespace Parent_toMessage {
  type ReturnType = CastAddBody['parent']

  type ErrorType =
    | Parent_InvalidParentTypeError
    | CastId_toMessage.ErrorType
    | GlobalErrorType
}
Parent_toMessage.parseError = (error: unknown) =>
  error as Parent_toMessage.ErrorType
