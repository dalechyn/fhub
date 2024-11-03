import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Reaction_fromMessageProtobuf } from '../../Reaction/fromMessageProtobuf.js'
import type { Reaction } from '../../Reaction/types.js'
import { ReactionTarget_toProtobuf } from '../../ReactionTarget/toProtobuf.js'
import type { ReactionTarget } from '../../ReactionTarget/types.js'
import { ReactionType_toProtobuf } from '../../ReactionType/toProtobuf.js'
import type { ReactionType } from '../../ReactionType/types.js'

export declare namespace Actions_Reaction_getReaction {
  type ParametersType = {
    fid: bigint
    reactionType: ReactionType
    target: ReactionTarget
  }
  type ReturnType = Reaction
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReaction(
  client: Client,
  parameters: Actions_Reaction_getReaction.ParametersType,
  options?: CallOptions,
): Promise<Actions_Reaction_getReaction.ReturnType> {
  const message = await client.connectRpcClient.getReaction(
    {
      fid: parameters.fid,
      reactionType: ReactionType_toProtobuf(parameters.reactionType),
      target: ReactionTarget_toProtobuf(parameters.target),
    },
    options,
  )
  return Reaction_fromMessageProtobuf(message)
}

Actions_Reaction_getReaction.parseError = (error: unknown) =>
  error as Actions_Reaction_getReaction.ErrorType
