import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Verification_getVerificationsByFid {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_getVerificationsByFid(
  client: Client,
  parameters: Actions_Verification_getVerificationsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_getVerificationsByFid.ReturnType> {
  const message = await client.connectRpcClient.getVerificationsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Verification_getVerificationsByFid.parseError = (error: unknown) =>
  error as Actions_Verification_getVerificationsByFid.ErrorType
