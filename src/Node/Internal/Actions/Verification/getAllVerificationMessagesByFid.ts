import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidTimestampRequestJson,
  FidTimestampRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Verification_getAllVerificationMessagesByFid {
  type ParametersType = Required<FidTimestampRequestJson>
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_getAllVerificationMessagesByFid(
  client: Client,
  parameters: Actions_Verification_getAllVerificationMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_getAllVerificationMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllVerificationMessagesByFid(
    fromJson(FidTimestampRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Verification_getAllVerificationMessagesByFid.parseError = (
  error: unknown,
) => error as Actions_Verification_getAllVerificationMessagesByFid.ErrorType
