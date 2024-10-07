import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  MessagesResponseSchema,
  type ReactionsByFidRequestJson,
  ReactionsByFidRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Reaction_GetReactionsByFid {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByFid(
  client: Client,
  parameters: Required<ReactionsByFidRequestJson>,
  options?: CallOptions,
): Promise<Actions_Reaction_GetReactionsByFid.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByFid(
    fromJson(ReactionsByFidRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Reaction_getReactionsByFid.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReactionsByFid.ErrorType
