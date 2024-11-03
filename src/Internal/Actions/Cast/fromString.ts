import type { CallOptions } from '@connectrpc/connect'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Actions_Warpcast_getCastIdFromUrl } from '../Warpcast/getFullCastHash.js'

export declare namespace Actions_Cast_fromString {
  type ParametersType = {
    text: string
    embeds?: NodeTypes.Embed[] | undefined
  }
  type ReturnType = Pick<NodeTypes.Cast, 'text' | 'isLong'>
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_fromString(
  client: Client,
  parameters: Actions_Cast_fromString.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_fromString.ReturnType> {
  const mentionsMatches = [...parameters.text.matchAll(/@\w+(?:.eth)?/gim)]
  const embedsMatches = [
    ...parameters.text.matchAll(
      /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gim,
    ),
  ]
  const mentions: { fid: bigint; position: number }[] = []
  const embeds: NodeTypes.Embed[] = []

  for (
    let mentionsMatchIndex = 0;
    mentionsMatchIndex < mentionsMatches.length;
    ++mentionsMatchIndex
  ) {
    const mentionMatch = mentionsMatches[mentionsMatchIndex]
    const mention = mentionMatch[0]
    const position =
      mentionMatch.index -
      /* remove the delta*/
      mentionsMatches
        .slice(0, mentionsMatchIndex)
        .reduce((delta, prevMentionMatch) => {
          return delta + prevMentionMatch[0].length
        }, 0)

    try {
      const proof = await NodeActions.UsernameProof.getUsernameProof(client, {
        name: mention.slice(1),
      })

      mentions.push({
        fid: proof.fid,
        position,
      })
      // @TODO: better error narrowing
    } catch {}
  }

  for (const embedMatch of embedsMatches) {
    const url = embedMatch[0]

    // @TODO: supercast and other urls that resolve to castId embed

    // Need to refine the url for specific warpcast format since it can have ).( or other symbols at the end
    const refinedWarpcastCastUrl = url.match(
      /https:\/\/warpcast\.com\/\S+\/0x[0-9a-f]{8,}/i,
    )?.[0]

    if (refinedWarpcastCastUrl) {
      const castId = await Actions_Warpcast_getCastIdFromUrl(
        client,
        { url: refinedWarpcastCastUrl },
        options,
      )
      embeds.push({ type: 'cast', ...castId })
    } else
      embeds.push({
        type: 'url',
        url: url,
      })
  }

  let strippedText = parameters.text
  // if the last embed was at the end of the cast we strip it just like warpcast does
  if (
    embedsMatches.length !== 0 &&
    embedsMatches[embedsMatches.length - 1].index +
      embedsMatches[embedsMatches.length - 1][0].length ===
      parameters.text.length
  ) {
    strippedText = strippedText.slice(
      0,
      embedsMatches[embedsMatches.length - 1].index,
    )
  }

  for (const mention of mentionsMatches.reverse()) {
    strippedText = `${strippedText.slice(0, mention.index)}${strippedText.slice(mention.index + mention[0].length)}`
  }

  return {
    text: {
      value: strippedText,
      embeds: [...embeds, ...(parameters.embeds ?? [])],
      mentions,
    },
    isLong: strippedText.length > 320,
  }
}

Actions_Cast_fromString.parseError = (error: unknown) =>
  error as Actions_Cast_fromString.ErrorType
