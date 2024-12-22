import { create } from '@bufbuild/protobuf'
import { BaseError } from 'ox/Errors'
import * as CastId from './CastId.js'
import type { GlobalErrorType } from './Error.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type Embed =
  | ({
      type: 'cast'
    } & CastId.CastId)
  | {
      type: 'url'
      url: string
    }

export class InvalidEmbedTypeError extends BaseError {
  override readonly name = 'Embed.InvalidEmbedTypeError'

  constructor({ embed }: { embed: any }) {
    super(`Embed is invalid: ${JSON.stringify(embed, null, 2)}`, {
      docsPath: '/errors#invalidembedtypeerror',
    })
  }
}

export function fromProtobuf(
  embed: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  if (typeof embed.case === 'undefined') return undefined
  if (embed.case === 'url') return { type: 'url', url: embed.value } as const
  if (embed.case === 'castId')
    return {
      type: 'cast',
      ...CastId.fromProtobuf(embed.value),
    } as const

  throw new InvalidEmbedTypeError({ embed })
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.Embed['embed']
  type ReturnType = Embed | undefined
  type ErrorType =
    | InvalidEmbedTypeError
    | CastId.fromProtobuf.ErrorType
    | GlobalErrorType
}
fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  embed: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  if (embed.type === 'cast')
    return create(MessageProtobuf.EmbedSchema, {
      embed: {
        case: 'castId',
        value: CastId.toProtobuf(embed),
      },
    })
  if (embed.type === 'url')
    return create(MessageProtobuf.EmbedSchema, {
      embed: {
        case: 'url',
        value: embed.url,
      },
    })
  throw new Error()
}

export declare namespace toProtobuf {
  type ParametersType = Embed
  type ReturnType = MessageProtobuf.Embed

  type ErrorType = GlobalErrorType
}
toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
