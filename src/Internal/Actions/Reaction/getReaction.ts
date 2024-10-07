import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { MessageSchema } from '../../Protobufs/message_pb.js'
import {
  type ReactionRequestJson,
  ReactionRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Reaction_GetReaction {
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReaction(
  client: Client,
  parameters: Required<ReactionRequestJson>,
  options?: CallOptions,
): Promise<Actions_Reaction_GetReaction.ReturnType> {
  const message = await client.connectRpcClient.getReaction(
    fromJson(ReactionRequestSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_Reaction_getReaction.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReaction.ErrorType
