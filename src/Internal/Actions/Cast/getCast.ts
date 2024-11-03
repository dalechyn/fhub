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
  type ReturnType = NodeTypes.Cast & {
    recasts: NodeTypes.Reaction[]
    likes: NodeTypes.Reaction[]
    text: {
      formatted: string
    }
  }
  type ErrorType = NodeActions.Cast.getCast.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: Actions_Cast_getCast.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCast.ReturnType> {
  const cast = await NodeActions.Cast.getCast(client, parameters, options)

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

  const formattedText = await (async () => {
    let text = cast.text.value
    if (!cast.text.mentions) return text
    for (const mention of cast.text.mentions.reverse()) {
      const mentionUsername = await NodeActions.UserData.getUserDataUsername(
        client,
        { fid: mention.fid },
      )
      text = `${text.slice(0, mention.position)}@${mentionUsername}${text.slice(mention.position)}`
    }
    return text
  })()

  return {
    ...cast,
    text: {
      ...cast.text,
      formatted: formattedText,
    },
    likes,
    recasts,
  }
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_getCast.ErrorType
