import { BaseError } from 'ox/Errors'

import { create, toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import * as Cast from './Cast.js'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'
//
// @TODO: replace by our own BaseError
export class InvalidMessageTypeError extends BaseError {
  override readonly name = 'CastAdd.InvalidMessageTypeError'

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
    throw new Error('`data` must be defined in CastAdd message.')
  if (message.data.body.case !== 'castAddBody')
    throw new InvalidMessageTypeError({ hash: meta.hash })
  return Cast.fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Cast.Cast
  type ErrorType =
    | InvalidMessageTypeError
    | Cast.fromProtobuf.ErrorType
    | Meta.fromProtobuf.ErrorType
    | GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function toHex(cast: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(cast)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<Cast.Cast, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageDataProtobuf(
  cast: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: cast.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.CAST_ADD,
    fid: cast.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'castAddBody',
      value: Cast.toProtobuf(cast),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<Cast.Cast, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

toMessageDataProtobuf.parseError = (error: unknown) =>
  error as toMessageDataProtobuf.ErrorType

export function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta.toProtobuf(
      Meta.create({
        dataBytes: toHex(parameters.cast),
        privateKey: parameters.privateKey,
      }),
    ),
    data: toMessageDataProtobuf(parameters.cast),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    cast: Omit<Cast.Cast, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
