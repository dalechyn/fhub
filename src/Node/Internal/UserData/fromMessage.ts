import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import { type Message, UserDataType } from '../Protobufs/message_pb.js'
import { UserData_InvalidMessageTypeError } from './errors.js'
import type { UserData } from './types.js'

export function UserData_fromMessage(
  message: Message,
): UserData_fromMessage.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'userDataBody')
    throw new UserData_InvalidMessageTypeError({
      hash: Hex.fromBytes(message.hash),
    })
  const type = (() => {
    if (message.data.body.value.type === UserDataType.PFP) {
      return 'pfp'
    }
    if (message.data.body.value.type === UserDataType.BIO) {
      return 'bio'
    }
    if (message.data.body.value.type === UserDataType.DISPLAY) {
      return 'display'
    }
    if (message.data.body.value.type === UserDataType.URL) {
      return 'url'
    }
    if (message.data.body.value.type === UserDataType.USERNAME) {
      return 'username'
    }
    if (message.data.body.value.type === UserDataType.LOCATION) {
      return 'location'
    }
    return 'none'
  })()
  // @TODO: handle unexpeded type here?
  return {
    meta: Meta_fromMessage(message),
    type,
    value: message.data.body.value.value,
  }
}

export declare namespace UserData_fromMessage {
  type ReturnType = UserData

  type ErrorType = UserData_InvalidMessageTypeError | GlobalErrorType
}

UserData_fromMessage.parseError = (error: unknown) =>
  error as UserData_fromMessage.ErrorType
