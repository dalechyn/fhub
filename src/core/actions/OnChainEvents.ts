import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as OnChainEventProtobuf from '../protobufs/onchain_event_pb.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace getCurrentStorageLimitsByFid {
  type ParametersType = Required<RequestResponseProtobuf.FidRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.StorageLimitsResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getCurrentStorageLimitsByFid(
  client: Client.Client,
  parameters: getCurrentStorageLimitsByFid.ParametersType,
  options?: CallOptions,
): Promise<getCurrentStorageLimitsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCurrentStorageLimitsByFid(
    fromJson(RequestResponseProtobuf.FidRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.StorageLimitsResponseSchema, message)
}

getCurrentStorageLimitsByFid.parseError = (error: unknown) =>
  error as getCurrentStorageLimitsByFid.ErrorType

export declare namespace getFids {
  type ParametersType = Required<RequestResponseProtobuf.FidsRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.FidsResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getFids(
  client: Client.Client,
  parameters: getFids.ParametersType,
  options?: CallOptions,
): Promise<getFids.ReturnType> {
  const message = await client.connectRpcClient.getFids(
    fromJson(RequestResponseProtobuf.FidsRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.FidsResponseSchema, message)
}

getFids.parseError = (error: unknown) => error as getFids.ErrorType

export declare namespace getIdRegistryOnChainEvent {
  type ParametersType = Required<RequestResponseProtobuf.FidRequestJson>
  type ReturnType = MessageJsonType<
    typeof OnChainEventProtobuf.OnChainEventSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getIdRegistryOnChainEvent(
  client: Client.Client,
  parameters: getIdRegistryOnChainEvent.ParametersType,
  options?: CallOptions,
): Promise<getIdRegistryOnChainEvent.ReturnType> {
  const message = await client.connectRpcClient.getIdRegistryOnChainEvent(
    fromJson(RequestResponseProtobuf.FidRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventProtobuf.OnChainEventSchema, message)
}

getIdRegistryOnChainEvent.parseError = (error: unknown) =>
  error as getIdRegistryOnChainEvent.ErrorType

export declare namespace getIdRegistryOnChainEventByAddress {
  type ParametersType =
    Required<RequestResponseProtobuf.IdRegistryEventByAddressRequestJson>
  type ReturnType = MessageJsonType<
    typeof OnChainEventProtobuf.OnChainEventSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getIdRegistryOnChainEventByAddress(
  client: Client.Client,
  parameters: getIdRegistryOnChainEventByAddress.ParametersType,
  options?: CallOptions,
): Promise<getIdRegistryOnChainEventByAddress.ReturnType> {
  const message =
    await client.connectRpcClient.getIdRegistryOnChainEventByAddress(
      fromJson(
        RequestResponseProtobuf.IdRegistryEventByAddressRequestSchema,
        parameters,
      ),
      options,
    )
  return toJson(OnChainEventProtobuf.OnChainEventSchema, message)
}

getIdRegistryOnChainEventByAddress.parseError = (error: unknown) =>
  error as getIdRegistryOnChainEventByAddress.ErrorType

export declare namespace OnChainEvents_getOnChainEvents {
  type ParametersType =
    Required<RequestResponseProtobuf.OnChainEventRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.OnChainEventResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function OnChainEvents_getOnChainEvents(
  client: Client.Client,
  parameters: OnChainEvents_getOnChainEvents.ParametersType,
  options?: CallOptions,
): Promise<OnChainEvents_getOnChainEvents.ReturnType> {
  const message = await client.connectRpcClient.getOnChainEvents(
    fromJson(RequestResponseProtobuf.OnChainEventRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.OnChainEventResponseSchema, message)
}

OnChainEvents_getOnChainEvents.parseError = (error: unknown) =>
  error as OnChainEvents_getOnChainEvents.ErrorType

export declare namespace getOnChainSigner {
  type ParametersType = Required<RequestResponseProtobuf.SignerRequestJson>
  type ReturnType = MessageJsonType<
    typeof OnChainEventProtobuf.OnChainEventSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getOnChainSigner(
  client: Client.Client,
  parameters: getOnChainSigner.ParametersType,
  options?: CallOptions,
): Promise<getOnChainSigner.ReturnType> {
  const message = await client.connectRpcClient.getOnChainSigner(
    fromJson(RequestResponseProtobuf.SignerRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventProtobuf.OnChainEventSchema, message)
}

getOnChainSigner.parseError = (error: unknown) =>
  error as getOnChainSigner.ErrorType

export declare namespace getOnChainSignersByFid {
  type ParametersType = Required<RequestResponseProtobuf.FidRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.OnChainEventResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getOnChainSignersByFid(
  client: Client.Client,
  parameters: getOnChainSignersByFid.ParametersType,
  options?: CallOptions,
): Promise<getOnChainSignersByFid.ReturnType> {
  const message = await client.connectRpcClient.getOnChainSignersByFid(
    fromJson(RequestResponseProtobuf.FidRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.OnChainEventResponseSchema, message)
}

getOnChainSignersByFid.parseError = (error: unknown) =>
  error as getOnChainSignersByFid.ErrorType
