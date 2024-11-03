import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import { Embed_fromProtobuf } from '../Embed/fromProtobuf.js'
import type { Embed } from '../Embed/types.js'
import type { Meta } from '../Meta/types.js'
import { Parent_fromProtobuf } from '../Parent/fromProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Cast_InvalidEmbedsError } from './errors.js'
import type { Cast } from './types.js'

export function Cast_fromProtobuf(
  parameters: Cast_fromProtobuf.ParametersType,
): Cast_fromProtobuf.ReturnType {
  const isLong = parameters.body.type === MessageProtobuf.CastType.LONG_CAST
  const mentions = (() => {
    if (parameters.body.mentions.length === 0) return undefined
    const mentions = []
    for (let i = 0; i < parameters.body.mentions.length; i++) {
      mentions.push({
        fid: parameters.body.mentions[i],
        position: parameters.body.mentionsPositions[i],
      })
    }
    return mentions
  })()

  const embeds = (() => {
    if (parameters.body.embeds.length === 0) return undefined
    const embedsOrUndefineds = parameters.body.embeds.map(({ embed }) =>
      Embed_fromProtobuf(embed),
    )
    if (embedsOrUndefineds.indexOf(undefined) !== -1)
      throw new Cast_InvalidEmbedsError({ hash: parameters.meta.hash })
    return embedsOrUndefineds as Embed[]
  })()
  const parent = Parent_fromProtobuf(parameters.body.parent)

  return {
    meta: parameters.meta,
    isLong,
    text: {
      mentions,
      embeds,
      value: parameters.body.text,
    },
    fid: parameters.fid,
    timestamp: FARCASTER_EPOCH_TIMESTAMP + parameters.timestamp,
    parent,
  }
}

export declare namespace Cast_fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.CastAddBody
    meta: Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Cast
  type ErrorType =
    | Embed_fromProtobuf.ErrorType
    | Parent_fromProtobuf.ErrorType
    | GlobalErrorType
}

Cast_fromProtobuf.parseError = (error: unknown) =>
  error as Cast_fromProtobuf.ErrorType
