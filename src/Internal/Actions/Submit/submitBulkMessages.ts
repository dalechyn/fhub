import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type SubmitBulkMessagesRequestJson,
  SubmitBulkMessagesRequestSchema,
  SubmitBulkMessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Submit_SubmitBulkMessages {
  type ReturnType = MessageJsonType<typeof SubmitBulkMessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Submit_submitBulkMessages(
  client: Client,
  parameters: Required<SubmitBulkMessagesRequestJson>,
  options?: CallOptions,
): Promise<Actions_Submit_SubmitBulkMessages.ReturnType> {
  const message = await client.connectRpcClient.submitBulkMessages(
    fromJson(SubmitBulkMessagesRequestSchema, parameters),
    options,
  )
  return toJson(SubmitBulkMessagesResponseSchema, message)
}

Actions_Submit_submitBulkMessages.parseError = (error: unknown) =>
  error as Actions_Submit_SubmitBulkMessages.ErrorType
