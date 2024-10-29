import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { MessageSchema } from '../../Protobufs/message_pb.js'
import {
  type VerificationRequestJson,
  VerificationRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Verification_getVerification {
  type ParametersType = Required<VerificationRequestJson>
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_getVerification(
  client: Client,
  parameters: Actions_Verification_getVerification.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_getVerification.ReturnType> {
  const message = await client.connectRpcClient.getVerification(
    fromJson(VerificationRequestSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_Verification_getVerification.parseError = (error: unknown) =>
  error as Actions_Verification_getVerification.ErrorType
