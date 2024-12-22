import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as MessageProtobuf from '../protobufs/message_pb.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace Actions_Verification_get {
  type ParametersType =
    Required<RequestResponseProtobuf.VerificationRequestJson>
  type ReturnType = MessageJsonType<typeof MessageProtobuf.MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_get(
  client: Client.Client,
  parameters: Actions_Verification_get.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_get.ReturnType> {
  const message = await client.connectRpcClient.getVerification(
    fromJson(RequestResponseProtobuf.VerificationRequestSchema, parameters),
    options,
  )
  return toJson(MessageProtobuf.MessageSchema, message)
}

Actions_Verification_get.parseError = (error: unknown) =>
  error as Actions_Verification_get.ErrorType

export declare namespace Actions_Verification_getAllVerificationMessagesByFid {
  type ParametersType =
    Required<RequestResponseProtobuf.FidTimestampRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.MessagesResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_getAllVerificationMessagesByFid(
  client: Client.Client,
  parameters: Actions_Verification_getAllVerificationMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_getAllVerificationMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllVerificationMessagesByFid(
    fromJson(RequestResponseProtobuf.FidTimestampRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.MessagesResponseSchema, message)
}

Actions_Verification_getAllVerificationMessagesByFid.parseError = (
  error: unknown,
) => error as Actions_Verification_getAllVerificationMessagesByFid.ErrorType

export declare namespace Actions_Verification_getByFid {
  type ParametersType = Required<RequestResponseProtobuf.FidRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.MessagesResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Verification_getByFid(
  client: Client.Client,
  parameters: Actions_Verification_getByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Verification_getByFid.ReturnType> {
  const message = await client.connectRpcClient.getVerificationsByFid(
    fromJson(RequestResponseProtobuf.FidRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.MessagesResponseSchema, message)
}

Actions_Verification_getByFid.parseError = (error: unknown) =>
  error as Actions_Verification_getByFid.ErrorType
