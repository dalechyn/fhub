import { Hex } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import { CastType, type Message, MessageType } from '../Protobufs/message_pb.js'
import {
  Cast_InvalidEmbedTypeError,
  Cast_InvalidMessageError,
  Cast_InvalidMessageTypeError,
  Cast_InvalidParentTypeError,
} from './errors.js'
import type { Cast } from './types.js'

export function Cast_fromMessage(
  message: Message,
): Cast_fromMessage.ReturnType {
  const hash = Hex.fromBytes(message.hash)
  const signer = Hex.fromBytes(message.signer)
  const signature = Hex.fromBytes(message.signature)
  const hashScheme = message.hashScheme
  const signatureScheme = message.signatureScheme
  const dataBytes = message.dataBytes
    ? Hex.fromBytes(message.dataBytes)
    : undefined

  // @TODO: separate error here
  if (!message.data) throw new Error('`data` must be defined in Cast message.')
  // @TODO: separate error here
  if (
    message.data.type !== MessageType.CAST_ADD ||
    message.data.body.case !== 'castAddBody'
  )
    throw new Cast_InvalidMessageError({
      hash,
      cause: new Cast_InvalidMessageTypeError({ hash }),
    })

  const isLong = message.data.body.value.type === CastType.LONG_CAST
  const mentions = (() => {
    if (message.data.body.value.mentions.length === 0) return undefined
    const mentions = []
    for (let i = 0; i < message.data.body.value.mentions.length; i++) {
      mentions.push({
        fid: message.data.body.value.mentions[i],
        position: message.data.body.value.mentionsPositions[i],
      })
    }
    return mentions
  })()

  const embeds = (() => {
    if (message.data.body.value.embeds.length === 0) return undefined
    message.data.body.value.embeds.map(({ embed }) => {
      if (embed.case === 'url')
        return { type: 'url', url: embed.value } as const
      if (embed.case === 'castId')
        return {
          type: 'cast',
          fid: embed.value.fid,
          hash: Hex.fromBytes(embed.value.hash),
        } as const
      throw new Cast_InvalidMessageError({
        hash,
        cause: new Cast_InvalidEmbedTypeError({ hash }),
      })
    })
  })()
  const parent = (() => {
    if (typeof message.data.body.value.parent.case === 'undefined')
      return undefined
    if (message.data.body.value.parent.case === 'parentUrl')
      return { type: 'url', url: message.data.body.value.parent.value } as const
    if (message.data.body.value.parent.case === 'parentCastId')
      return {
        type: 'cast',
        fid: message.data.body.value.parent.value.fid,
        hash: Hex.fromBytes(message.data.body.value.parent.value.hash),
      } as const

    throw new Cast_InvalidMessageError({
      hash,
      cause: new Cast_InvalidParentTypeError({ hash }),
    })
  })()

  return {
    hash,
    signer,
    signature,
    hashScheme,
    signatureScheme,
    dataBytes,
    isLong,
    mentions,
    embeds,
    embedsDeprecated: (() => {
      if (message.data.body.value.embedsDeprecated.length === 0)
        return undefined
      return message.data.body.value.embedsDeprecated
    })(),
    authorFid: message.data.fid,
    timestamp: message.data.timestamp,
    text: message.data.body.value.text,
    parent,
  }
}

export declare namespace Cast_fromMessage {
  type ReturnType = Cast

  type ErrorType =
    | Cast_InvalidMessageError<
        | Cast_InvalidMessageTypeError
        | Cast_InvalidEmbedTypeError
        | Cast_InvalidParentTypeError
      >
    | GlobalErrorType
}
