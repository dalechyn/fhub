import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  MessagesResponseSchema,
  type ReactionsByTargetRequestJson,
  ReactionsByTargetRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Reaction_GetReactionsByTarget {
  type ReturnType = MessageJsonType<typeof MessagesResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByTarget(
  client: Client,
  parameters: Required<ReactionsByTargetRequestJson>,
  options?: CallOptions,
): Promise<Actions_Reaction_GetReactionsByTarget.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByTarget(
    fromJson(ReactionsByTargetRequestSchema, parameters),
    options,
  )
  return toJson(MessagesResponseSchema, message)
}

Actions_Reaction_getReactionsByTarget.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReactionsByTarget.ErrorType
