import { CastId_toMessage } from '../CastId/toMessage.js'
import type { GlobalErrorType } from '../Errors/error.js'
import {
  type ReactionBody as Protobufs_Reaction,
  ReactionType as Protobufs_ReactionType,
} from '../Protobufs/message_pb.js'
import type { Reaction, ReactionTarget, ReactionType } from './types.js'

export function ReactionType_toMessage(
  type: ReactionType,
): ReactionType_toMessage.ReturnType {
  if (type === 'like') return Protobufs_ReactionType.LIKE
  if (type === 'recast') return Protobufs_ReactionType.RECAST
  // @TODO: error
  throw new Error('unknwo tyep')
}

export function ReactionTarget_toMessage(
  target: ReactionTarget,
): ReactionTarget_toMessage.ReturnType {
  return target.type === 'cast'
    ? { value: CastId_toMessage(target), case: 'targetCastId' }
    : { value: target.url, case: 'targetUrl' }
}

export function Reaction_toMessage(
  reaction: Reaction,
): Reaction_toMessage.ReturnType {
  return {
    $typeName: 'ReactionBody',
    type: ReactionType_toMessage(reaction.type),
    target: ReactionTarget_toMessage(reaction.target),
  } as const
}

export declare namespace ReactionType_toMessage {
  type ReturnType = Protobufs_ReactionType

  type ErrorType = GlobalErrorType
}

ReactionType_toMessage.parseError = (error: unknown) =>
  error as ReactionType_toMessage.ErrorType

export declare namespace ReactionTarget_toMessage {
  type ReturnType = Protobufs_Reaction['target']

  type ErrorTarget = GlobalErrorType
}

ReactionTarget_toMessage.parseError = (error: unknown) =>
  error as ReactionTarget_toMessage.ErrorTarget

export declare namespace Reaction_toMessage {
  type ReturnType = Protobufs_Reaction

  type ErrorType = GlobalErrorType
}

Reaction_toMessage.parseError = (error: unknown) =>
  error as Reaction_toMessage.ErrorType
