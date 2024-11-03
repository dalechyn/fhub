import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { Reaction_fromMessageProtobuf } from '../../Reaction/fromMessageProtobuf.js'
import type { Reaction } from '../../Reaction/types.js'
import { ReactionTarget_toProtobuf } from '../../ReactionTarget/toProtobuf.js'
import type { ReactionTarget } from '../../ReactionTarget/types.js'

export declare namespace Actions_Reaction_getReactionsByTarget {
  type ReturnType = {
    messages: Reaction[]
    nextPageToken: NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByTarget(
  client: Client,
  parameters: ReactionTarget & Pagination,
  options?: CallOptions,
): Promise<Actions_Reaction_getReactionsByTarget.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByTarget(
    {
      ...ReactionTarget_toProtobuf(parameters),
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    messages: message.messages.map(Reaction_fromMessageProtobuf),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_Reaction_getReactionsByTarget.parseError = (error: unknown) =>
  error as Actions_Reaction_getReactionsByTarget.ErrorType
