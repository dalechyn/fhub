import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Embed_toProtobuf } from '../Embed/toProtobuf.js'
import { Parent_toProtobuf } from '../Parent/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Cast } from './types.js'

export function Cast_toProtobuf(
  cast: Cast_toProtobuf.ParametersType,
): Cast_toProtobuf.ReturnType {
  return create(MessageProtobuf.CastAddBodySchema, {
    type: cast.isLong
      ? MessageProtobuf.CastType.LONG_CAST
      : MessageProtobuf.CastType.CAST,
    embedsDeprecated: [],
    embeds: cast.text.embeds ? cast.text.embeds.map(Embed_toProtobuf) : [],
    mentions: cast.text.mentions
      ? cast.text.mentions.map((mention) => mention.fid)
      : [],
    mentionsPositions: cast.text.mentions
      ? cast.text.mentions.map((mention) => mention.position)
      : [],
    parent: cast.parent
      ? Parent_toProtobuf(cast.parent)
      : { case: undefined, value: undefined },
    text: cast.text.value,
  })
}

export declare namespace Cast_toProtobuf {
  type ParametersType = Omit<Cast, 'meta'>
  type ReturnType = MessageProtobuf.CastAddBody

  type ErrorType = GlobalErrorType
}

Cast_toProtobuf.parseError = (error: unknown) =>
  error as Cast_toProtobuf.ErrorType
