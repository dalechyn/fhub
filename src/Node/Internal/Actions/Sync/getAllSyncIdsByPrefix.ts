import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  SyncIdsSchema,
  type TrieNodePrefixJson,
  TrieNodePrefixSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Sync_getAllSyncIdsByPrefix {
  type ParametersType = Required<TrieNodePrefixJson>
  type ReturnType = MessageJsonType<typeof SyncIdsSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Sync_getAllSyncIdsByPrefix(
  client: Client,
  parameters: Actions_Sync_getAllSyncIdsByPrefix.ParametersType,
  options?: CallOptions,
): Promise<Actions_Sync_getAllSyncIdsByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getAllSyncIdsByPrefix(
    fromJson(TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(SyncIdsSchema, message)
}

Actions_Sync_getAllSyncIdsByPrefix.parseError = (error: unknown) =>
  error as Actions_Sync_getAllSyncIdsByPrefix.ErrorType
