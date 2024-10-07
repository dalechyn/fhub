import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidTimestampRequestJson,
  FidTimestampRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_UserData_GetAllUserDataMessagesByFid {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UserData_getAllUserDataMessagesByFid(
  client: Client,
  parameters: Required<FidTimestampRequestJson>,
  options?: CallOptions,
): Promise<Actions_UserData_GetAllUserDataMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllUserDataMessagesByFid(
    fromJson(FidTimestampRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_UserData_getAllUserDataMessagesByFid.parseError = (error: unknown) =>
  error as Actions_UserData_GetAllUserDataMessagesByFid.ErrorType
