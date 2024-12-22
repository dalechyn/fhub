import { create } from '@bufbuild/protobuf'
import { BaseError } from 'ox/Errors'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type Link = {
  meta: Meta.Meta
  type: string
  displayTimestamp?: number | undefined
  timestamp: number
  targetFid: bigint
  fid: bigint
}

export class InvalidMessageTypeError extends BaseError {
  override readonly name = 'Link.InvalidMessageTypeError'

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
  if (!message.data) throw new Error('`data` must be defined in Link message.')
  if (message.data.body.case !== 'linkBody')
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
  type ReturnType = Link
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
  if (parameters.body.target.case !== 'targetFid')
    throw new Error('Invalid target')

  return {
    meta: parameters.meta,
    type: parameters.body.type,
    displayTimestamp: parameters.body.displayTimestamp,
    targetFid: parameters.body.target.value,
    fid: parameters.fid,
    timestamp: parameters.timestamp,
  }
}

export declare namespace fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.LinkBody
    meta: Meta.Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Link
  type ErrorType = GlobalErrorType
}
fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  link: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return create(MessageProtobuf.LinkBodySchema, {
    type: link.type,
    ...(link.displayTimestamp
      ? { displayTimestamp: link.displayTimestamp }
      : {}),
    target: { case: 'targetFid', value: link.targetFid },
  })
}

export declare namespace toProtobuf {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = MessageProtobuf.LinkBody

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
