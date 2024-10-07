import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { MessageSchema } from '../../Protobufs/message_pb.js'
import {
  type UserDataRequestJson,
  UserDataRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_UserData_GetUserData {
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UserData_getUserData(
  client: Client,
  parameters: Required<UserDataRequestJson>,
  options?: CallOptions,
): Promise<Actions_UserData_GetUserData.ReturnType> {
  const message = await client.connectRpcClient.getUserData(
    fromJson(UserDataRequestSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_UserData_getUserData.parseError = (error: unknown) =>
  error as Actions_UserData_GetUserData.ErrorType
