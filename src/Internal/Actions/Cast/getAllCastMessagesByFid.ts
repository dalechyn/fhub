import { fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidTimestampRequestJson,
  FidTimestampRequestSchema,
  type MessagesResponseJson,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Cast_GetAllCastMessagesByFid {
  type ReturnType = MessagesResponseJson
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_getAllCastMessagesByFid(
  client: Client,
  parameters: Required<FidTimestampRequestJson>,
  options?: CallOptions,
): Promise<Actions_Cast_GetAllCastMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllCastMessagesByFid(
    fromJson(FidTimestampRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}
Actions_Cast_getAllCastMessagesByFid.parseError = (error: unknown) =>
  error as Actions_Cast_GetAllCastMessagesByFid.ErrorType
