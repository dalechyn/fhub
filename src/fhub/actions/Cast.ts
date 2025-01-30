import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Account from '../Account.js'
import type * as Client from '../Client.js'
import * as Warpcast from './Warpcast.js'

export declare namespace create {
  type ParametersType = (
    | {
        cast: Omit<Core.Cast.Cast, 'meta' | 'fid' | 'timestamp'>
      }
    | getRoot.ParametersType
  ) & {
    account: Account.Account
  }
  type ReturnType = Core.Message.Message
  type ErrorType = GlobalErrorType
}
export async function create(
  client: Client.Client,
  parameters: create.ParametersType,
  options?: CallOptions,
): Promise<create.ReturnType> {
  const cast = await (async () => {
    if ('cast' in parameters) return parameters.cast

    return getRoot(client, parameters, options)
  })()
  const message = await Core.CastAdd.toMessageProtobuf({
    cast: {
      ...cast,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return Core.Actions.Submit.submitMessage(client, message, options)
}

create.parseError = (error: unknown) => error as create.ErrorType

export declare namespace fromString {
  type ParametersType = {
    text: string
    embeds?: Core.Embed.Embed[] | undefined
  }
  type ReturnType = Pick<Core.Cast.Cast, 'text' | 'isLong'>
  type ErrorType = GlobalErrorType
}
export async function fromString(
  client: Client.Client,
  parameters: fromString.ParametersType,
  options?: CallOptions,
): Promise<fromString.ReturnType> {
  const mentionsMatches = [...parameters.text.matchAll(/@\w+(?:.eth)?/gim)]
  const embedsMatches = [
    ...parameters.text.matchAll(
      /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gim,
    ),
  ]
  const mentions: { fid: bigint; position: number }[] = []
  const embeds: Core.Embed.Embed[] = []

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
      const proof = await Core.Actions.UsernameProof.get(client, {
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
      const castId = await Warpcast.getCastIdFromUrl(
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

fromString.parseError = (error: unknown) => error as fromString.ErrorType

export declare namespace getRoot {
  type ParametersType =
    | Core.Actions.Cast.get.ParametersType
    | Core.Actions.Cast.get.ReturnType
  type ReturnType = Core.Actions.Cast.get.ReturnType
  type ErrorType = GlobalErrorType
}
export async function getRoot(
  client: Client.Client,
  parameters: getRoot.ParametersType,
  options?: CallOptions,
): Promise<getRoot.ReturnType> {
  let cast =
    'meta' in parameters
      ? parameters
      : await Core.Actions.Cast.get(client, parameters, options)
  while (cast.parent !== undefined && cast.parent.type === 'cast') {
    cast = await Core.Actions.Cast.get(client, cast.parent, options)
  }
  return cast
}

getRoot.parseError = (error: unknown) => error as getRoot.ErrorType

export declare namespace toString {
  type ParametersType = Core.Cast.Cast
  type ReturnType = string
  type ErrorType = GlobalErrorType
}
export async function toString(
  client: Client.Client,
  cast: toString.ParametersType,
): Promise<toString.ReturnType> {
  const unwrappedText = await (async () => {
    let text = cast.text.value
    if (!cast.text.mentions) return text
    for (const mention of cast.text.mentions.reverse()) {
      const mentionUsername = await Core.Actions.UserData.getUsername(client, {
        fid: mention.fid,
      })
      text = `${text.slice(0, mention.position)}@${mentionUsername}${text.slice(mention.position)}`
    }
    return text
  })()

  return unwrappedText
}

toString.parseError = (error: unknown) => error as toString.ErrorType
