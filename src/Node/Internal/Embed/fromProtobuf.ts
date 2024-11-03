import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_fromProtobuf } from '../CastId/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Embed_InvalidEmbedTypeError } from './errors.js'
import type { Embed } from './types.js'

export function Embed_fromProtobuf(
  embed: Embed_fromProtobuf.ParametersType,
): Embed_fromProtobuf.ReturnType {
  if (typeof embed.case === 'undefined') return undefined
  if (embed.case === 'url') return { type: 'url', url: embed.value } as const
  if (embed.case === 'castId')
    return {
      type: 'cast',
      ...CastId_fromProtobuf(embed.value),
    } as const

  throw new Embed_InvalidEmbedTypeError({ embed })
}

export declare namespace Embed_fromProtobuf {
  type ParametersType = MessageProtobuf.Embed['embed']
  type ReturnType = Embed | undefined
  type ErrorType =
    | Embed_InvalidEmbedTypeError
    | CastId_fromProtobuf.ErrorType
    | GlobalErrorType
}
Embed_fromProtobuf.parseError = (error: unknown) =>
  error as Embed_fromProtobuf.ErrorType
