import { fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  type MessagesResponseJson,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Cast_GetCastsByFid {
  type ReturnType = MessagesResponseJson
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_getCastsByFid(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}
Actions_Cast_getCastsByFid.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByFid.ErrorType
