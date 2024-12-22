import { BaseError } from 'ox/Errors'
import * as CastId from './CastId.js'
import type { GlobalErrorType } from './Error.js'
import type * as MessageProtobuf from './protobufs/message_pb.js'

export type Parent =
  | ({
      type: 'cast'
    } & CastId.CastId)
  | {
      type: 'url'
      url: string
    }

export class InvalidParentTypeError extends BaseError {
  override readonly name = 'Parent.InvalidParentTypeError'

  constructor({ parent }: { parent: any }) {
    super(`Parent is invalid: ${JSON.stringify(parent, null, 2)}`, {
      docsPath: '/errors#invalidparenttypeerror',
    })
  }
}

export function fromProtobuf(
  parent: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  if (typeof parent.case === 'undefined') return undefined
  if (parent.case === 'parentUrl')
    return { type: 'url', url: parent.value } as const
  if (parent.case === 'parentCastId')
    return {
      type: 'cast',
      ...CastId.fromProtobuf(parent.value),
    } as const

  throw new InvalidParentTypeError({ parent })
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.CastAddBody['parent']
  type ReturnType = Parent | undefined

  type ErrorType =
    | InvalidParentTypeError
    | CastId.fromProtobuf.ErrorType
    | GlobalErrorType
}
fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  parent: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
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
      value: CastId.toProtobuf(parent),
    } as const

  throw new InvalidParentTypeError({ parent })
}

export declare namespace toProtobuf {
  type ParametersType = Parent | undefined
  type ReturnType = MessageProtobuf.CastAddBody['parent']

  type ErrorType =
    | InvalidParentTypeError
    | CastId.toProtobuf.ErrorType
    | GlobalErrorType
}
toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
