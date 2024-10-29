import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  TrieNodeMetadataResponseSchema,
  type TrieNodePrefixJson,
  TrieNodePrefixSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Sync_getSyncMetadataByPrefix {
  type ParametersType = Required<TrieNodePrefixJson>
  type ReturnType = MessageJsonType<typeof TrieNodeMetadataResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Sync_getSyncMetadataByPrefix(
  client: Client,
  parameters: Actions_Sync_getSyncMetadataByPrefix.ParametersType,
  options?: CallOptions,
): Promise<Actions_Sync_getSyncMetadataByPrefix.ReturnType> {
  const message = await client.connectRpcClient.getSyncMetadataByPrefix(
    fromJson(TrieNodePrefixSchema, parameters),
    options,
  )
  return toJson(TrieNodeMetadataResponseSchema, message)
}

Actions_Sync_getSyncMetadataByPrefix.parseError = (error: unknown) =>
  error as Actions_Sync_getSyncMetadataByPrefix.ErrorType
