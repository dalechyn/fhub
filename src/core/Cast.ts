import { create } from '@bufbuild/protobuf'
import { BaseError } from 'ox/Errors'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import * as Embed from './Embed.js'
import type { GlobalErrorType } from './Error.js'
import type * as Meta from './Meta.js'
import * as Parent from './Parent.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type Cast = {
  meta: Meta.Meta
  fid: bigint
  timestamp: number
  parent?: Parent.Parent | undefined
  text: {
    value: string
    embeds?: Embed.Embed[] | undefined
    mentions?:
      | {
          fid: bigint
          position: number
        }[]
      | undefined
  }
  isLong: boolean
}

export class InvalidEmbedsError extends BaseError {
  override readonly name = 'Cast.InvalidEmbedsError'

  constructor({ hash }: { hash: string }) {
    super(`Embeds "${hash}" has undefined.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
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
      Embed.fromProtobuf(embed),
    )
    if (embedsOrUndefineds.indexOf(undefined) !== -1)
      throw new InvalidEmbedsError({ hash: parameters.meta.hash })
    return embedsOrUndefineds as Embed.Embed[]
  })()
  const parent = Parent.fromProtobuf(parameters.body.parent)

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

export declare namespace fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.CastAddBody
    meta: Meta.Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Cast
  type ErrorType =
    | Embed.fromProtobuf.ErrorType
    | Parent.fromProtobuf.ErrorType
    | GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  cast: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return create(MessageProtobuf.CastAddBodySchema, {
    type: cast.isLong
      ? MessageProtobuf.CastType.LONG_CAST
      : MessageProtobuf.CastType.CAST,
    embedsDeprecated: [],
    embeds: cast.text.embeds ? cast.text.embeds.map(Embed.toProtobuf) : [],
    mentions: cast.text.mentions
      ? cast.text.mentions.map((mention) => mention.fid)
      : [],
    mentionsPositions: cast.text.mentions
      ? cast.text.mentions.map((mention) => mention.position)
      : [],
    parent: cast.parent
      ? Parent.toProtobuf(cast.parent)
      : { case: undefined, value: undefined },
    text: cast.text.value,
  })
}

export declare namespace toProtobuf {
  type ParametersType = Omit<Cast, 'meta'>
  type ReturnType = MessageProtobuf.CastAddBody

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
