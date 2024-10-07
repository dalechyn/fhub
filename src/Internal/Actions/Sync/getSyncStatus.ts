import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type SyncStatusRequestJson,
  SyncStatusRequestSchema,
  SyncStatusResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Sync_GetSyncStatus {
  type ReturnType = MessageJsonType<typeof SyncStatusResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Sync_getSyncStatus(
  client: Client,
  parameters: Required<SyncStatusRequestJson>,
  options?: CallOptions,
): Promise<Actions_Sync_GetSyncStatus.ReturnType> {
  const message = await client.connectRpcClient.getSyncStatus(
    fromJson(SyncStatusRequestSchema, parameters),
    options,
  )
  return toJson(SyncStatusResponseSchema, message)
}

Actions_Sync_getSyncStatus.parseError = (error: unknown) =>
  error as Actions_Sync_GetSyncStatus.ErrorType
