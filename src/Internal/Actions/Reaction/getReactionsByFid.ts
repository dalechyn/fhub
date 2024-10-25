import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Reaction_fromMessage } from '../../Reaction/fromMessage.js'
import { ReactionType_toMessage } from '../../Reaction/toMessage.js'
import type { Reaction, ReactionType } from '../../Reaction/types.js'

export declare namespace Actions_Reaction_GetReactionsByFid {
  type ReturnType = {
    messages: Reaction[]
    nextPageToken: Types.Hex | null
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByFid(
  client: Client,
  parameters: {
    fid: bigint
    type?: ReactionType
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  },
  options?: CallOptions,
): Promise<Actions_Reaction_GetReactionsByFid.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByFid(
    {
      fid: parameters.fid,
      ...(parameters.type
        ? { reactionType: ReactionType_toMessage(parameters.type) }
        : {}),
      ...(parameters.pageSize ? { pageSize: parameters.pageSize } : {}),
      ...(parameters.pageToken
        ? { pageToken: Hex.toBytes(parameters.pageToken) }
        : {}),
      ...(parameters.reverse ? { reverse: parameters.reverse } : {}),
    },
    options,
  )

  const nextPageToken = (() => {
    if (!message.nextPageToken) return null
    const hex = Hex.fromBytes(message.nextPageToken)
    if (hex === '0x') return null
    return hex
  })()
  return {
    messages: message.messages.map(Reaction_fromMessage),
    nextPageToken,
  }
}

Actions_Reaction_getReactionsByFid.parseError = (error: unknown) =>
  error as Actions_Reaction_GetReactionsByFid.ErrorType
