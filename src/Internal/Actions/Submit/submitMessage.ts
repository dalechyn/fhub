import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { type MessageJson, MessageSchema } from '../../Protobufs/message_pb.js'

export declare namespace Actions_Submit_SubmitMessage {
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Submit_submitMessage(
  client: Client,
  parameters: Required<MessageJson>,
  options?: CallOptions,
): Promise<Actions_Submit_SubmitMessage.ReturnType> {
  const message = await client.connectRpcClient.submitMessage(
    fromJson(MessageSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_Submit_submitMessage.parseError = (error: unknown) =>
  error as Actions_Submit_SubmitMessage.ErrorType
