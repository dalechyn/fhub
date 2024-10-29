import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type OnChainEventRequestJson,
  OnChainEventRequestSchema,
  OnChainEventResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getOnChainEvents {
  type ParametersType = Required<OnChainEventRequestJson>
  type ReturnType = MessageJsonType<typeof OnChainEventResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getOnChainEvents(
  client: Client,
  parameters: Actions_OnChainEvents_getOnChainEvents.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getOnChainEvents.ReturnType> {
  const message = await client.connectRpcClient.getOnChainEvents(
    fromJson(OnChainEventRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventResponseSchema, message)
}

Actions_OnChainEvents_getOnChainEvents.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_getOnChainEvents.ErrorType
