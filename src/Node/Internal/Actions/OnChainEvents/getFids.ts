import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidsRequestJson,
  FidsRequestSchema,
  FidsResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getFids {
  type ParametersType = Required<FidsRequestJson>
  type ReturnType = MessageJsonType<typeof FidsResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getFids(
  client: Client,
  parameters: Actions_OnChainEvents_getFids.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getFids.ReturnType> {
  const message = await client.connectRpcClient.getFids(
    fromJson(FidsRequestSchema, parameters),
    options,
  )
  return toJson(FidsResponseSchema, message)
}

Actions_OnChainEvents_getFids.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_getFids.ErrorType
