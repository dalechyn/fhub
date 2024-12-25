import { toBinary } from '@bufbuild/protobuf'
import { create } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import { BaseError } from 'ox/Errors'
import type { Omit } from 'ox/Internal'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type UserData = {
  meta: Meta.Meta
  type: 'none' | 'pfp' | 'display' | 'bio' | 'url' | 'username' | 'location'
  value: string
  fid: bigint
  timestamp: number
}

// @TODO: replace by our own BaseError
export class InvalidMessageTypeError extends BaseError {
  override readonly name = 'UserData.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than USER_DATA_ADD.`, {
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
  if (message.data.body.case !== 'userDataBody')
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
  type ReturnType = UserData
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
  // @TODO: error here
  const type = (() => {
    if (parameters.body.type === MessageProtobuf.UserDataType.PFP) {
      return 'pfp'
    }
    if (parameters.body.type === MessageProtobuf.UserDataType.BIO) {
      return 'bio'
    }
    if (parameters.body.type === MessageProtobuf.UserDataType.DISPLAY) {
      return 'display'
    }
    if (parameters.body.type === MessageProtobuf.UserDataType.URL) {
      return 'url'
    }
    if (parameters.body.type === MessageProtobuf.UserDataType.USERNAME) {
      return 'username'
    }
    if (parameters.body.type === MessageProtobuf.UserDataType.LOCATION) {
      return 'location'
    }
    return 'none'
  })()
  // @TODO: handle unexpeded type here?
  return {
    meta: parameters.meta,
    type,
    value: parameters.body.value,
    fid: parameters.fid,
    timestamp: parameters.timestamp,
  }
}

export declare namespace fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.UserDataBody
    meta: Meta.Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = UserData

  type ErrorType = InvalidMessageTypeError | GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toMessageDataProtobuf(
  body: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: body.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.USER_DATA_ADD,
    fid: body.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'userDataBody',
      value: toProtobuf(body),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<UserData, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

toMessageDataProtobuf.parseError = (error: unknown) =>
  error as toMessageDataProtobuf.ErrorType

export function toHex(body: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(body)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<UserData, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta.toProtobuf(
      Meta.create({
        dataBytes: toHex(parameters.data),
        privateKey: parameters.privateKey,
      }),
    ),
    data: toMessageDataProtobuf(parameters.data),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    data: Omit<UserData, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType

export function toProtobuf(
  body: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return create(MessageProtobuf.UserDataBodySchema, {
    type: (() => {
      if (body.type === 'username') return MessageProtobuf.UserDataType.USERNAME
      if (body.type === 'location') return MessageProtobuf.UserDataType.LOCATION
      if (body.type === 'url') return MessageProtobuf.UserDataType.URL
      if (body.type === 'bio') return MessageProtobuf.UserDataType.BIO
      if (body.type === 'display') return MessageProtobuf.UserDataType.DISPLAY
      if (body.type === 'pfp') return MessageProtobuf.UserDataType.PFP
      throw new Error('unknown userdatabody type')
    })(),
    value: body.value,
  })
}

export declare namespace toProtobuf {
  type ParametersType = Omit<UserData, 'meta'>
  type ReturnType = MessageProtobuf.UserDataBody

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
