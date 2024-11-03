import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { UserData_InvalidMessageTypeError } from './errors.js'
import type { UserData } from './types.js'

export function UserData_fromProtobuf(
  message: UserData_fromProtobuf.ParametersType,
): UserData_fromProtobuf.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'userDataBody')
    throw new UserData_InvalidMessageTypeError({
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
    meta: Meta_fromProtobuf(message),
    type,
    value: message.data.body.value.value,
  }
}

export declare namespace UserData_fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = UserData

  type ErrorType = UserData_InvalidMessageTypeError | GlobalErrorType
}

UserData_fromProtobuf.parseError = (error: unknown) =>
  error as UserData_fromProtobuf.ErrorType
