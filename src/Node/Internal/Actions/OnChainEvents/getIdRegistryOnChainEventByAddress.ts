import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { OnChainEventSchema } from '../../Protobufs/onchain_event_pb.js'
import {
  type IdRegistryEventByAddressRequestJson,
  IdRegistryEventByAddressRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getIdRegistryOnChainEventByAddress {
  type ParametersType = Required<IdRegistryEventByAddressRequestJson>
  type ReturnType = MessageJsonType<typeof OnChainEventSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getIdRegistryOnChainEventByAddress(
  client: Client,
  parameters: Actions_OnChainEvents_getIdRegistryOnChainEventByAddress.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getIdRegistryOnChainEventByAddress.ReturnType> {
  const message =
    await client.connectRpcClient.getIdRegistryOnChainEventByAddress(
      fromJson(IdRegistryEventByAddressRequestSchema, parameters),
      options,
    )
  return toJson(OnChainEventSchema, message)
}

Actions_OnChainEvents_getIdRegistryOnChainEventByAddress.parseError = (
  error: unknown,
) => error as Actions_OnChainEvents_getIdRegistryOnChainEventByAddress.ErrorType
