import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_toProtobuf } from '../CastId/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Embed } from './types.js'

export function Embed_toProtobuf(
  embed: Embed_toProtobuf.ParametersType,
): Embed_toProtobuf.ReturnType {
  if (embed.type === 'cast')
    return create(MessageProtobuf.EmbedSchema, {
      embed: {
        case: 'castId',
        value: CastId_toProtobuf(embed),
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

export declare namespace Embed_toProtobuf {
  type ParametersType = Embed
  type ReturnType = MessageProtobuf.Embed

  type ErrorType = GlobalErrorType
}
Embed_toProtobuf.parseError = (error: unknown) =>
  error as Embed_toProtobuf.ErrorType
