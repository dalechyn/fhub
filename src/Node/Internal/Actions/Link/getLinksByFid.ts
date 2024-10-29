import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type LinksByFidRequestJson,
  LinksByFidRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_getLinksByFid {
  type ParametersType = Required<LinksByFidRequestJson>
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinksByFid(
  client: Client,
  parameters: Actions_Link_getLinksByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLinksByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinksByFid(
    fromJson(LinksByFidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinksByFid.parseError = (error: unknown) =>
  error as Actions_Link_getLinksByFid.ErrorType
