import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Reaction_fromMessage } from '../../Reaction/fromMessage.js'
import {
  ReactionTarget_toMessage,
  ReactionType_toMessage,
} from '../../Reaction/toMessage.js'
import type {
  Reaction,
  ReactionTarget,
  ReactionType,
} from '../../Reaction/types.js'

export declare namespace Actions_Reaction_GetReaction {
  type ReturnType = Reaction
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReaction(
  client: Client,
  parameters: {
    fid: bigint
    reactionType: ReactionType
    target: ReactionTarget
  },
  options?: CallOptions,
): Promise<Actions_Reaction_GetReaction.ReturnType> {
  const message = await client.connectRpcClient.getReaction(
    {
      fid: parameters.fid,
      reactionType: ReactionType_toMessage(parameters.reactionType),
      target: ReactionTarget_toMessage(parameters.target),
    },
    options,
  )
  return Reaction_fromMessage(message)
}

Actions_Reaction_getReaction.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReaction.ErrorType
