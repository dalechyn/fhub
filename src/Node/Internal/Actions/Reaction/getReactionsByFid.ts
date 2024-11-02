import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { Reaction_fromMessage } from '../../Reaction/fromMessage.js'
import type { Reaction, ReactionType } from '../../Reaction/types.js'

export declare namespace Actions_Reaction_getReactionsByFid {
  type ParametersType = {
    fid: bigint
    type?: ReactionType
  } & Pagination
  type ReturnType = {
    messages: Reaction[]
    nextPageToken: NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByFid(
  client: Client,
  parameters: Actions_Reaction_getReactionsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Reaction_getReactionsByFid.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByFid(
    {
      fid: parameters.fid,
      ...Pagination_unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map(Reaction_fromMessage),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_Reaction_getReactionsByFid.parseError = (error: unknown) =>
  error as Actions_Reaction_getReactionsByFid.ErrorType
