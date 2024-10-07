import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  MessagesResponseSchema,
  type ReactionsByTargetRequestJson,
  ReactionsByTargetRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Reaction_GetReactionsByCast {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByCast(
  client: Client,
  parameters: Required<ReactionsByTargetRequestJson>,
  options?: CallOptions,
): Promise<Actions_Reaction_GetReactionsByCast.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByCast(
    fromJson(ReactionsByTargetRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Reaction_getReactionsByCast.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReactionsByCast.ErrorType
