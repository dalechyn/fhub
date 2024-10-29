import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { OnChainEventSchema } from '../../Protobufs/onchain_event_pb.js'
import {
  type FidRequestJson,
  FidRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getIdRegistryOnChainEvent {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof OnChainEventSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getIdRegistryOnChainEvent(
  client: Client,
  parameters: Actions_OnChainEvents_getIdRegistryOnChainEvent.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getIdRegistryOnChainEvent.ReturnType> {
  const message = await client.connectRpcClient.getIdRegistryOnChainEvent(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventSchema, message)
}

Actions_OnChainEvents_getIdRegistryOnChainEvent.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_getIdRegistryOnChainEvent.ErrorType
