import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import type { CastId } from '../../CastId/types.js'
import { Reaction_fromMessage } from '../../Reaction/fromMessage.js'
import { ReactionTarget_toMessage } from '../../Reaction/toMessage.js'
import type { Reaction } from '../../Reaction/types.js'

export declare namespace Actions_Reaction_getReactionsByCast {
  type ParametersType = CastId & {
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  }
  type ReturnType = {
    messages: Reaction[]
    nextPageToken: Types.Hex | null
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Reaction_getReactionsByCast(
  client: Client,
  parameters: Actions_Reaction_getReactionsByCast.ParametersType,
  options?: CallOptions,
): Promise<Actions_Reaction_getReactionsByCast.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByCast(
    {
      target: ReactionTarget_toMessage({ type: 'cast', ...parameters }),
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

Actions_Reaction_getReactionsByCast.parseError = (error: unknown) =>
  error as Actions_Reaction_getReactionsByCast.ErrorType
