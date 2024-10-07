import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { MessageSchema } from '../../Protobufs/message_pb.js'
import {
  type LinkRequestJson,
  LinkRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_GetLink {
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLink(
  client: Client,
  parameters: Required<LinkRequestJson>,
  options?: CallOptions,
): Promise<Actions_Link_GetLink.ReturnType> {
  const message = await client.connectRpcClient.getLink(
    fromJson(LinkRequestSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_Link_getLink.parseError = (error: unknown) =>
  error as Actions_Link_GetLink.ErrorType
