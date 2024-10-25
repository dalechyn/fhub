import { CastId_fromMessage } from '../CastId/fromMessage.js'
import type { GlobalErrorType } from '../Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import {
  type Message,
  MessageType,
  type ReactionBody as Protobufs_Reaction,
  ReactionType as Protobufs_ReactionType,
} from '../Protobufs/message_pb.js'
import type { Reaction, ReactionTarget, ReactionType } from './types.js'

export function ReactionType_fromMessage(
  reactionType: Protobufs_ReactionType,
): ReactionType_fromMessage.ReturnType {
  return reactionType === Protobufs_ReactionType.RECAST
    ? ('recast' as const)
    : ('like' as const)
}

export declare namespace ReactionType_fromMessage {
  type ReturnType = ReactionType

  type ErrorType = GlobalErrorType
}

ReactionType_fromMessage.parseError = (error: unknown) =>
  error as ReactionType_fromMessage.ErrorType

export function ReactionTarget_fromMessage(
  target: Protobufs_Reaction['target'],
): ReactionTarget_fromMessage.ReturnType {
  return target.case === 'targetUrl'
    ? {
        type: 'url',
        url: target.value,
      }
    : {
        type: 'cast',
        ...CastId_fromMessage(target.value!),
      }
}

export declare namespace ReactionTarget_fromMessage {
  type ReturnType = ReactionTarget

  type ErrorType = GlobalErrorType
}

ReactionTarget_fromMessage.parseError = (error: unknown) =>
  error as ReactionTarget_fromMessage.ErrorType

export function Reaction_fromMessage(
  message: Message,
): Reaction_fromMessage.ReturnType {
  const meta = Meta_fromMessage(message)

  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Reaction message.')
  if (
    message.data.type !== MessageType.REACTION_ADD ||
    message.data.body.case !== 'reactionBody'
  )
    // @TODO: error
    throw new Error('invalid')

  return {
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
    type: ReactionType_fromMessage(message.data.body.value.type),
    target: ReactionTarget_fromMessage(message.data.body.value.target),
  } as const
}

export declare namespace Reaction_fromMessage {
  type ReturnType = Reaction

  type ErrorType = GlobalErrorType
}

Reaction_fromMessage.parseError = (error: unknown) =>
  error as Reaction_fromMessage.ErrorType
