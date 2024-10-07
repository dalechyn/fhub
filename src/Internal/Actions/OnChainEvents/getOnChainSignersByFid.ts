import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  OnChainEventResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_GetOnChainSignersByFid {
  type ReturnType = MessageJsonType<typeof OnChainEventResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getOnChainSignersByFid(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_GetOnChainSignersByFid.ReturnType> {
  const message = await client.connectRpcClient.getOnChainSignersByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventResponseSchema, message)
}

Actions_OnChainEvents_getOnChainSignersByFid.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_GetOnChainSignersByFid.ErrorType
