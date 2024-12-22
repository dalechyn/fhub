import { BaseError } from 'ox/Errors'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from './Error.js'
import * as ReactionTarget from './ReactionTarget.js'
import * as ReactionType from './ReactionType.js'

export type Reaction = {
  meta: Meta.Meta
  fid: bigint
  timestamp: number
  type: ReactionType.ReactionType
  target: ReactionTarget.ReactionTarget
}

// @TODO: replace by our own BaseError
export class InvalidMessageTypeError extends BaseError {
  override readonly name = 'Reaction.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  const meta = Meta.fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Reaction message.')
  if (message.data.body.case !== 'reactionBody')
    throw new InvalidMessageTypeError({ hash: meta.hash })
  return fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Reaction
  type ErrorType =
    | InvalidMessageTypeError
    | Meta.fromProtobuf.ErrorType
    | GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  return {
    meta: parameters.meta,
    fid: parameters.fid,
    timestamp: parameters.timestamp,
    type: ReactionType.fromProtobuf(parameters.body.type),
    target: ReactionTarget.fromProtobuf(parameters.body.target),
  } as const
}

export declare namespace fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.ReactionBody
    meta: Meta.Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Reaction
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  reaction: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return create(MessageProtobuf.ReactionBodySchema, {
    type: ReactionType.toProtobuf(reaction.type),
    target: ReactionTarget.toProtobuf(reaction.target),
  })
}

export declare namespace toProtobuf {
  type ParametersType = Omit<Reaction, 'meta'>
  type ReturnType = MessageProtobuf.ReactionBody

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
