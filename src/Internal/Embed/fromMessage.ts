import { CastId_fromMessage } from '../CastId/fromMessage.js'
import type { GlobalErrorType } from '../Errors/error.js'
import type { Embed as Protobufs_Embed } from '../Protobufs/message_pb.js'
import { Embed_InvalidEmbedTypeError } from './errors.js'
import type { Embed } from './types.js'

export function Embed_fromMessage(
  embed: Protobufs_Embed['embed'],
): Embed_fromMessage.ReturnType {
  if (typeof embed.case === 'undefined') return undefined
  if (embed.case === 'url') return { type: 'url', url: embed.value } as const
  if (embed.case === 'castId')
    return {
      type: 'cast',
      ...CastId_fromMessage(embed.value),
    } as const

  throw new Embed_InvalidEmbedTypeError({ embed })
}

export declare namespace Embed_fromMessage {
  type ReturnType = Embed | undefined

  type ErrorType =
    | Embed_InvalidEmbedTypeError
    | CastId_fromMessage.ErrorType
    | GlobalErrorType
}
Embed_fromMessage.parseError = (error: unknown) =>
  error as Embed_fromMessage.ErrorType
