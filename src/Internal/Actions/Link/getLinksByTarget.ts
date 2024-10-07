import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type LinksByTargetRequestJson,
  LinksByTargetRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_GetLinksByTarget {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinksByTarget(
  client: Client,
  parameters: Required<LinksByTargetRequestJson>,
  options?: CallOptions,
): Promise<Actions_Link_GetLinksByTarget.ReturnType> {
  const message = await client.connectRpcClient.getLinksByTarget(
    fromJson(LinksByTargetRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinksByTarget.parseError = (error: unknown) =>
  error as Actions_Link_GetLinksByTarget.ErrorType
