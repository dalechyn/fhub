import { CastId_fromMessage } from '../CastId/fromMessage.js'
import type { GlobalErrorType } from '../Errors/error.js'
import type { CastAddBody } from '../Protobufs/message_pb.js'
import { Parent_InvalidParentTypeError } from './errors.js'
import type { Parent } from './types.js'

export function Parent_fromMessage(
  parent: CastAddBody['parent'],
): Parent_fromMessage.ReturnType {
  if (typeof parent.case === 'undefined') return undefined
  if (parent.case === 'parentUrl')
    return { type: 'url', url: parent.value } as const
  if (parent.case === 'parentCastId')
    return {
      type: 'cast',
      ...CastId_fromMessage(parent.value),
    } as const

  throw new Parent_InvalidParentTypeError({ parent })
}

export declare namespace Parent_fromMessage {
  type ReturnType = Parent | undefined

  type ErrorType =
    | Parent_InvalidParentTypeError
    | CastId_fromMessage.ErrorType
    | GlobalErrorType
}
Parent_fromMessage.parseError = (error: unknown) =>
  error as Parent_fromMessage.ErrorType
