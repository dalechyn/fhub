import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidTimestampRequestJson,
  FidTimestampRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_GetAllLinkMessagesByFid {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getAllLinkMessagesByFid(
  client: Client,
  parameters: Required<FidTimestampRequestJson>,
  options?: CallOptions,
): Promise<Actions_Link_GetAllLinkMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllLinkMessagesByFid(
    fromJson(FidTimestampRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getAllLinkMessagesByFid.parseError = (error: unknown) =>
  error as Actions_Link_GetAllLinkMessagesByFid.ErrorType
