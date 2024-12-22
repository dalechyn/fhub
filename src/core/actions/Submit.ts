import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as Message from '../Message.js'
import type * as MessageProtobuf from '../protobufs/message_pb.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace submitBulkMessages {
  type ParametersType =
    Required<RequestResponseProtobuf.SubmitBulkMessagesRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.SubmitBulkMessagesResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function submitBulkMessages(
  client: Client.Client,
  parameters: submitBulkMessages.ParametersType,
  options?: CallOptions,
): Promise<submitBulkMessages.ReturnType> {
  const message = await client.connectRpcClient.submitBulkMessages(
    fromJson(
      RequestResponseProtobuf.SubmitBulkMessagesRequestSchema,
      parameters,
    ),
    options,
  )
  return toJson(
    RequestResponseProtobuf.SubmitBulkMessagesResponseSchema,
    message,
  )
}

submitBulkMessages.parseError = (error: unknown) =>
  error as submitBulkMessages.ErrorType

export declare namespace submitMessage {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Message.Message
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function submitMessage(
  client: Client.Client,
  parameters: submitMessage.ParametersType,
  options?: CallOptions,
): Promise<submitMessage.ReturnType> {
  const message = await client.connectRpcClient.submitMessage(
    parameters,
    options,
  )
  return Message.fromProtobuf(message)
}

submitMessage.parseError = (error: unknown) => error as submitMessage.ErrorType
