import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  StorageLimitsResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_GetCurrentStorageLimitsByFid {
  type ReturnType = MessageJsonType<typeof StorageLimitsResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getCurrentStorageLimitsByFid(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_GetCurrentStorageLimitsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCurrentStorageLimitsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(StorageLimitsResponseSchema, message)
}

Actions_OnChainEvents_getCurrentStorageLimitsByFid.parseError = (
  error: unknown,
) => error as Actions_OnChainEvents_GetCurrentStorageLimitsByFid.ErrorType
