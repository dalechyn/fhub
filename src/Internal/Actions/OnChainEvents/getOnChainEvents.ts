import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type OnChainEventRequestJson,
  OnChainEventRequestSchema,
  OnChainEventResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_GetOnChainEvents {
  type ReturnType = MessageJsonType<typeof OnChainEventResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getOnChainEvents(
  client: Client,
  parameters: Required<OnChainEventRequestJson>,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_GetOnChainEvents.ReturnType> {
  const message = await client.connectRpcClient.getOnChainEvents(
    fromJson(OnChainEventRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventResponseSchema, message)
}

Actions_OnChainEvents_getOnChainEvents.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_GetOnChainEvents.ErrorType
