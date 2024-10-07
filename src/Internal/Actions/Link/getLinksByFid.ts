import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type LinksByFidRequestJson,
  LinksByFidRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_GetLinksByFid {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinksByFid(
  client: Client,
  parameters: Required<LinksByFidRequestJson>,
  options?: CallOptions,
): Promise<Actions_Link_GetLinksByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinksByFid(
    fromJson(LinksByFidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinksByFid.parseError = (error: unknown) =>
  error as Actions_Link_GetLinksByFid.ErrorType
