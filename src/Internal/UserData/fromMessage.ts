import type { GlobalErrorType } from '../Errors/error.js'
import {
  type Message,
  MessageType,
  UserDataType,
} from '../Protobufs/message_pb.js'
import type { UserData } from './types.js'

export function UserData_fromMessage(
  message: Message,
): UserData_fromMessage.ReturnType {
  // @TODO: error here
  if (!message.data) throw new Error('')
  // @TODO: error here
  if (
    message.data.type !== MessageType.USER_DATA_ADD ||
    message.data.body.case !== 'userDataBody'
  )
    throw new Error('')
  const type = (() => {
    if (message.data.body.value.type === UserDataType.PFP) {
      return 'pfp'
    } else if (message.data.body.value.type === UserDataType.BIO) {
      return 'bio'
    } else if (message.data.body.value.type === UserDataType.DISPLAY) {
      return 'display'
    } else if (message.data.body.value.type === UserDataType.URL) {
      return 'url'
    } else if (message.data.body.value.type === UserDataType.USERNAME) {
      return 'username'
    } else if (message.data.body.value.type === UserDataType.LOCATION) {
      return 'location'
    }
    return 'none'
  })()
  // @TODO: handle unexpeded type here?
  return { type, value: message.data.body.value.value }
}

export declare namespace UserData_fromMessage {
  type ReturnType = UserData

  type ErrorType = GlobalErrorType
}

UserData_fromMessage.parseError = (error: unknown) =>
  error as UserData_fromMessage.ErrorType
