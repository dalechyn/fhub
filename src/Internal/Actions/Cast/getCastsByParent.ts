import { fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type CastsByParentRequestJson,
  CastsByParentRequestSchema,
  type MessagesResponseJson,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Cast_GetCastsByParent {
  type ReturnType = MessagesResponseJson
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_getCastsByParent(
  client: Client,
  parameters: Required<CastsByParentRequestJson>,
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByParent.ReturnType> {
  const message = await client.connectRpcClient.getCastsByParent(
    fromJson(CastsByParentRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}
Actions_Cast_getCastsByParent.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByParent.ErrorType
