import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type LinksByTargetRequestJson,
  LinksByTargetRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_getLinksByTarget {
  type ParametersType = Required<LinksByTargetRequestJson>
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinksByTarget(
  client: Client,
  parameters: Actions_Link_getLinksByTarget.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLinksByTarget.ReturnType> {
  const message = await client.connectRpcClient.getLinksByTarget(
    fromJson(LinksByTargetRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinksByTarget.parseError = (error: unknown) =>
  error as Actions_Link_getLinksByTarget.ErrorType
