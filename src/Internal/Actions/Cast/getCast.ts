import type { CallOptions } from '@connectrpc/connect'
import type { Types } from 'ox'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_getCast {
  type ParametersType = NodeActions.Cast.getCast.ParametersType
  type ReturnType = {
    cast: NodeTypes.Cast
    recasts: NodeTypes.Reaction[]
    likes: NodeTypes.Reaction[]
    children: ReturnType[]
  }
  type ErrorType = NodeActions.Cast.getCast.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: Actions_Cast_getCast.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCast.ReturnType> {
  const cast = await NodeActions.Cast.getCast(client, parameters, options)

  async function getCastData(
    cast: NodeTypes.Cast,
  ): Promise<Actions_Cast_getCast.ReturnType> {
    const reactions = await (async () => {
      const reactions: NodeTypes.Reaction[] = []
      let reactionsPageToken: Types.Hex | null = null
      do {
        const { nextPageToken, messages } =
          await NodeActions.Reaction.getReactionsByCast(client, {
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

    const childrenCasts = await (async () => {
      const casts: NodeTypes.Cast[] = []
      let castsPageToken: Types.Hex | null = null
      do {
        const result = await NodeActions.Cast.getCastsByParent(client, {
          parent: { type: 'cast', fid: cast.fid, hash: cast.meta.hash },
          ...parameters,
          pageToken: castsPageToken ? castsPageToken : undefined,
        })
        castsPageToken = result.nextPageToken as any
        casts.push(...result.casts)
      } while (castsPageToken)
      return casts
    })()

    return {
      cast,
      likes,
      recasts,
      children: await Promise.all(childrenCasts.map(getCastData)),
    }
  }

  return getCastData(cast)
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_getCast.ErrorType
