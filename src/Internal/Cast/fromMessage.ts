import { Hex } from 'ox'
import { Embed_fromMessage } from '../Embed/fromMessage.js'
import type { GlobalErrorType } from '../Errors/error.js'
import { Parent_fromMessage } from '../Parent/fromMessage.js'
import { CastType, type Message, MessageType } from '../Protobufs/message_pb.js'
import { Cast_InvalidMessageTypeError } from './errors.js'
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
    throw new Cast_InvalidMessageTypeError({ hash })

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
    message.data.body.value.embeds.map(({ embed }) => Embed_fromMessage(embed))
  })()
  const parent = Parent_fromMessage(message.data.body.value.parent)

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
    | Cast_InvalidMessageTypeError
    | Embed_fromMessage.ErrorType
    | Parent_fromMessage.ErrorType
    | GlobalErrorType
}

Cast_fromMessage.parseError = (error: unknown) =>
  error as Cast_fromMessage.ErrorType
