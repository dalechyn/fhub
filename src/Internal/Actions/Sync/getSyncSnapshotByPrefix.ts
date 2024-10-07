import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type TrieNodePrefixJson,
  TrieNodePrefixSchema,
  TrieNodeSnapshotResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Sync_GetSyncSnapshotByPrefix {
  type ReturnType = MessageJsonType<typeof TrieNodeSnapshotResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Sync_getSyncSnapshotByPrefix(
  client: Client,
  parameters: Required<TrieNodePrefixJson>,
  options?: CallOptions,
): Promise<Actions_Sync_GetSyncSnapshotByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getSyncSnapshotByPrefix(
    fromJson(TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(TrieNodeSnapshotResponseSchema, message)
}

Actions_Sync_getSyncSnapshotByPrefix.parseError = (error: unknown) =>
  error as Actions_Sync_GetSyncSnapshotByPrefix.ErrorType
