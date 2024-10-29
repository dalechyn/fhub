import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  StorageLimitsResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getCurrentStorageLimitsByFid {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof StorageLimitsResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getCurrentStorageLimitsByFid(
  client: Client,
  parameters: Actions_OnChainEvents_getCurrentStorageLimitsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getCurrentStorageLimitsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCurrentStorageLimitsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(StorageLimitsResponseSchema, message)
}

Actions_OnChainEvents_getCurrentStorageLimitsByFid.parseError = (
  error: unknown,
) => error as Actions_OnChainEvents_getCurrentStorageLimitsByFid.ErrorType