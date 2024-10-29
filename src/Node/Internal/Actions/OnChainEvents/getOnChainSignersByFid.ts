import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  OnChainEventResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getOnChainSignersByFid {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof OnChainEventResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getOnChainSignersByFid(
  client: Client,
  parameters: Actions_OnChainEvents_getOnChainSignersByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getOnChainSignersByFid.ReturnType> {
  const message = await client.connectRpcClient.getOnChainSignersByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventResponseSchema, message)
}

Actions_OnChainEvents_getOnChainSignersByFid.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_getOnChainSignersByFid.ErrorType
