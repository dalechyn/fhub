import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { OnChainEventSchema } from '../../Protobufs/onchain_event_pb.js'
import {
  type SignerRequestJson,
  SignerRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_OnChainEvents_getOnChainSigner {
  type ParametersType = Required<SignerRequestJson>
  type ReturnType = MessageJsonType<typeof OnChainEventSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_OnChainEvents_getOnChainSigner(
  client: Client,
  parameters: Actions_OnChainEvents_getOnChainSigner.ParametersType,
  options?: CallOptions,
): Promise<Actions_OnChainEvents_getOnChainSigner.ReturnType> {
  const message = await client.connectRpcClient.getOnChainSigner(
    fromJson(SignerRequestSchema, parameters),
    options,
  )
  return toJson(OnChainEventSchema, message)
}

Actions_OnChainEvents_getOnChainSigner.parseError = (error: unknown) =>
  error as Actions_OnChainEvents_getOnChainSigner.ErrorType
