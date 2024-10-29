import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  MessagesResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Link_getLinkCompactStateMessageByFid {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinkCompactStateMessageByFid(
  client: Client,
  parameters: Actions_Link_getLinkCompactStateMessageByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLinkCompactStateMessageByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinkCompactStateMessageByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Link_getLinkCompactStateMessageByFid.parseError = (error: unknown) =>
  error as Actions_Link_getLinkCompactStateMessageByFid.ErrorType
