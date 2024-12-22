import { Hex } from 'ox'
import { BaseError } from 'ox/Errors'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type UserData = {
  meta: Meta.Meta
  type: 'none' | 'pfp' | 'display' | 'bio' | 'url' | 'username' | 'location'
  value: string
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

export function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'userDataBody')
    throw new InvalidMessageTypeError({
      hash: Hex.fromBytes(message.hash),
    })
  const type = (() => {
    if (message.data.body.value.type === MessageProtobuf.UserDataType.PFP) {
      return 'pfp'
    }
    if (message.data.body.value.type === MessageProtobuf.UserDataType.BIO) {
      return 'bio'
    }
    if (message.data.body.value.type === MessageProtobuf.UserDataType.DISPLAY) {
      return 'display'
    }
    if (message.data.body.value.type === MessageProtobuf.UserDataType.URL) {
      return 'url'
    }
    if (
      message.data.body.value.type === MessageProtobuf.UserDataType.USERNAME
    ) {
      return 'username'
    }
    if (
      message.data.body.value.type === MessageProtobuf.UserDataType.LOCATION
    ) {
      return 'location'
    }
    return 'none'
  })()
  // @TODO: handle unexpeded type here?
  return {
    meta: Meta.fromProtobuf(message),
    type,
    value: message.data.body.value.value,
  }
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = UserData

  type ErrorType = InvalidMessageTypeError | GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType
