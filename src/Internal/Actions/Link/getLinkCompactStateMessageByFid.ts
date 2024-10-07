import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_GetLinkCompactStateMessageByFid {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinkCompactStateMessageByFid(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_Link_GetLinkCompactStateMessageByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinkCompactStateMessageByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinkCompactStateMessageByFid.parseError = (error: unknown) =>
  error as Actions_Link_GetLinkCompactStateMessageByFid.ErrorType
