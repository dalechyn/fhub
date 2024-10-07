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

export declare namespace Actions_Cast_GetCastsByMention {
  type ReturnType = MessagesResponseJson
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_getCastsByMention(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByMention.ReturnType> {
  const message = await client.connectRpcClient.getCastsByMention(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}
Actions_Cast_getCastsByMention.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByMention.ErrorType
