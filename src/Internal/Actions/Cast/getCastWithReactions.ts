import type { Types } from 'ox'
import type { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import type { Reaction } from '../../Reaction/types.js'
import { Actions_Reaction_getReactionsByCast } from '../Reaction/getReactionsByCast.js'
import { Actions_Cast_getCast } from './getCast.js'

export declare namespace Actions_Cast_GetCastWithReactions {
  type ReturnType = {
    cast: Cast
    recasts: Reaction[]
    likes: Reaction[]
  }
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastWithReactions(
  ...[client, parameters, options]: Parameters<typeof Actions_Cast_getCast>
): Promise<Actions_Cast_GetCastWithReactions.ReturnType> {
  const cast = await Actions_Cast_getCast(client, parameters, options)

  const reactions = await (async () => {
    const reactions: Reaction[] = []
    let reactionsPageToken: Types.Hex | null = null
    do {
      const { nextPageToken, messages } =
        await Actions_Reaction_getReactionsByCast(client, {
          ...parameters,
          pageToken: reactionsPageToken ? reactionsPageToken : undefined,
        })
      reactionsPageToken = nextPageToken as any
      reactions.push(...messages)
    } while (reactionsPageToken)
    return reactions
  })()

  const likes = reactions.filter((reaction) => reaction.type === 'like')
  const recasts = reactions.filter((reaction) => reaction.type === 'recast')

  return { cast, likes, recasts }
}

Actions_Cast_getCastWithReactions.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastWithReactions.ErrorType
