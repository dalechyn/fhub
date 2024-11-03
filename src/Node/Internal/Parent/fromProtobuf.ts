import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_fromProtobuf } from '../CastId/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Parent_InvalidParentTypeError } from './errors.js'
import type { Parent } from './types.js'

export function Parent_fromProtobuf(
  parent: Parent_fromProtobuf.ParametersType,
): Parent_fromProtobuf.ReturnType {
  if (typeof parent.case === 'undefined') return undefined
  if (parent.case === 'parentUrl')
    return { type: 'url', url: parent.value } as const
  if (parent.case === 'parentCastId')
    return {
      type: 'cast',
      ...CastId_fromProtobuf(parent.value),
    } as const

  throw new Parent_InvalidParentTypeError({ parent })
}

export declare namespace Parent_fromProtobuf {
  type ParametersType = MessageProtobuf.CastAddBody['parent']
  type ReturnType = Parent | undefined

  type ErrorType =
    | Parent_InvalidParentTypeError
    | CastId_fromProtobuf.ErrorType
    | GlobalErrorType
}
Parent_fromProtobuf.parseError = (error: unknown) =>
  error as Parent_fromProtobuf.ErrorType
