import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace getAllMessagesBySyncIds {
  type ParametersType = Required<RequestResponseProtobuf.SyncIdsJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.MessagesResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getAllMessagesBySyncIds(
  client: Client.Client,
  parameters: getAllMessagesBySyncIds.ParametersType,
  options?: CallOptions,
): Promise<getAllMessagesBySyncIds.ReturnType> {
  const message = await client.connectRpcClient.getAllMessagesBySyncIds(
    fromJson(RequestResponseProtobuf.SyncIdsSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.MessagesResponseSchema, message)
}

getAllMessagesBySyncIds.parseError = (error: unknown) =>
  error as getAllMessagesBySyncIds.ErrorType

export declare namespace getAllSyncIdsByPrefix {
  type ParametersType = Required<RequestResponseProtobuf.TrieNodePrefixJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.SyncIdsSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getAllSyncIdsByPrefix(
  client: Client.Client,
  parameters: getAllSyncIdsByPrefix.ParametersType,
  options?: CallOptions,
): Promise<getAllSyncIdsByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getAllSyncIdsByPrefix(
    fromJson(RequestResponseProtobuf.TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.SyncIdsSchema, message)
}

getAllSyncIdsByPrefix.parseError = (error: unknown) =>
  error as getAllSyncIdsByPrefix.ErrorType

export declare namespace getInfo {
  type ParametersType = Required<RequestResponseProtobuf.HubInfoRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.HubInfoResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getInfo(
  client: Client.Client,
  parameters: getInfo.ParametersType,
  options?: CallOptions,
): Promise<getInfo.ReturnType> {
  const message = await client.connectRpcClient.getInfo(
    fromJson(RequestResponseProtobuf.HubInfoRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.HubInfoResponseSchema, message)
}

getInfo.parseError = (error: unknown) => error as getInfo.ErrorType

export declare namespace getSyncMetadataByPrefix {
  type ParametersType = Required<RequestResponseProtobuf.TrieNodePrefixJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.TrieNodeMetadataResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getSyncMetadataByPrefix(
  client: Client.Client,
  parameters: getSyncMetadataByPrefix.ParametersType,
  options?: CallOptions,
): Promise<getSyncMetadataByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getSyncMetadataByPrefix(
    fromJson(RequestResponseProtobuf.TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.TrieNodeMetadataResponseSchema, message)
}

getSyncMetadataByPrefix.parseError = (error: unknown) =>
  error as getSyncMetadataByPrefix.ErrorType

export declare namespace getSyncSnapshotByPrefix {
  type ParametersType = Required<RequestResponseProtobuf.TrieNodePrefixJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.TrieNodeSnapshotResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getSyncSnapshotByPrefix(
  client: Client.Client,
  parameters: getSyncSnapshotByPrefix.ParametersType,
  options?: CallOptions,
): Promise<getSyncSnapshotByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getSyncSnapshotByPrefix(
    fromJson(RequestResponseProtobuf.TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.TrieNodeSnapshotResponseSchema, message)
}

getSyncSnapshotByPrefix.parseError = (error: unknown) =>
  error as getSyncSnapshotByPrefix.ErrorType

export declare namespace getSyncStatus {
  type ParametersType = Required<RequestResponseProtobuf.SyncStatusRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.SyncStatusResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getSyncStatus(
  client: Client.Client,
  parameters: getSyncStatus.ParametersType,
  options?: CallOptions,
): Promise<getSyncStatus.ReturnType> {
  const message = await client.connectRpcClient.getSyncStatus(
    fromJson(RequestResponseProtobuf.SyncStatusRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.SyncStatusResponseSchema, message)
}

getSyncStatus.parseError = (error: unknown) => error as getSyncStatus.ErrorType
