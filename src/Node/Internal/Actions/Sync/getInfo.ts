import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type HubInfoRequestJson,
  HubInfoRequestSchema,
  HubInfoResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Sync_getInfo {
  type ParametersType = Required<HubInfoRequestJson>
  type ReturnType = MessageJsonType<typeof HubInfoResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Sync_getInfo(
  client: Client,
  parameters: Actions_Sync_getInfo.ParametersType,
  options?: CallOptions,
): Promise<Actions_Sync_getInfo.ReturnType> {
  const message = await client.connectRpcClient.getInfo(
    fromJson(HubInfoRequestSchema, parameters),
    options,
  )
  return toJson(HubInfoResponseSchema, message)
}

Actions_Sync_getInfo.parseError = (error: unknown) =>
  error as Actions_Sync_getInfo.ErrorType
