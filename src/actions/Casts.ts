import type { CallOptions } from '@connectrpc/connect'
import { Hex } from 'ox'
import type * as Account from '../core/Account.js'
import type * as Cast from '../core/Cast.js'
import * as CastAdd from '../core/CastAdd.js'
import type * as CastId from '../core/CastId.js'
import * as CastRemove from '../core/CastRemove.js'
import type * as Client from '../core/Client.js'
import type * as Embed from '../core/Embed.js'
import type { GlobalErrorType } from '../core/Error.js'
import type * as Message from '../core/Message.js'
import * as Pagination from '../core/Pagination.js'
import * as Parent from '../core/Parent.js'
import type * as Reaction from '../core/Reaction.js'
import * as ReactionAdd from '../core/ReactionAdd.js'
import type * as ReactionTarget from '../core/ReactionTarget.js'
import * as MessageProtobuf from '../core/protobufs/message_pb.js'
import * as Reactions from './Reactions.js'
import * as Submit from './Submit.js'
import * as User from './User.js'
import * as UsernameProof from './UsernameProof.js'
import * as Warpcast from './Warpcast.js'

export declare namespace get {
  type ParametersType = CastId.CastId
  type ReturnType = Cast.Cast
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Get a {@link fhub#Cast.Cast} by it's `hash` and `fid` of the creator.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const cast = await Casts.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })
 *
 * cast
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}.
 * @returns Cast.
 */
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    { fid: parameters.fid, hash: Hex.toBytes(parameters.hash) },
    options,
  )

  return CastAdd.fromMessageProtobuf(message)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getAllCastMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    messages: (
      | { type: 'casted'; cast: Cast.Cast }
      | { type: 'removed'; cast: CastRemove.CastRemove }
    )[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast} creation and removal messages by `fid` of the creator.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * :::note
 *
 * Removed cast messages are being automatically pruned on the Hub level, which might explain why you can't find any.
 *
 * :::
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { messages, nextPageToken } = await Casts.getAllCastMessagesByFid(client, { fid: 11517n })
 *
 * messages
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid` of the creator, and optional {@link fhub#Pagination.Pagination}.
 * @returns Messages with the `nextPageToken`.
 */
export async function getAllCastMessagesByFid(
  client: Client.Client,
  parameters: getAllCastMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllCastMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllCastMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map((message) => {
      if (
        message.data?.type === MessageProtobuf.MessageType.CAST_REMOVE &&
        message.data.body.case === 'castRemoveBody'
      )
        return {
          type: 'removed' as const,
          cast: CastRemove.fromMessageProtobuf(message),
        }
      return { type: 'casted', cast: CastAdd.fromMessageProtobuf(message) }
    }),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getAllCastMessagesByFid.parseError = (error: unknown) =>
  error as getAllCastMessagesByFid.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.PaginationWithTimestamps
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast}s by `fid` of the creator.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { casts, nextPageToken } = await Casts.getByFid(client, { fid: 11517n })
 *
 * casts
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid` of the creator, and {@link fhub#Pagination.Pagination}.
 * @returns {@link fhub#Cast.Cast}s with the `nextPageToken`.
 */
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getByMention {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast}s that mention a specific `fid`.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { casts, nextPageToken } = await Casts.getByMention(client, { fid: 11517n })
 *
 * casts
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid` of the creator, and optional {@link fhub#Pagination.Pagination}.
 * @returns {@link fhub#Cast.Cast}s with the `nextPageToken`.
 */
export async function getByMention(
  client: Client.Client,
  parameters: getByMention.ParametersType,
  options?: CallOptions,
): Promise<getByMention.ReturnType> {
  const message = await client.connectRpcClient.getCastsByMention(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByMention.parseError = (error: unknown) => error as getByMention.ErrorType

export declare namespace getByParent {
  type ParametersType = {
    parent: Parent.Parent
  } & Pagination.Pagination
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType =
    | CastAdd.fromMessageProtobuf.ErrorType
    | Parent.toProtobuf.ErrorType
    | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast}s that are childs of another {@link fhub#Cast.Cast}.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { casts, nextPageToken } = await Casts.getByParent(client, {
 *   parent: {
 *     type: 'cast',
 *     fid: 11517n,
 *     hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24',
 *   },
 * })
 *
 * casts
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and optional {@link fhub#Pagination.Pagination}.
 * @returns {@link fhub#Cast.Cast}s with the `nextPageToken`.
 */
export async function getByParent(
  client: Client.Client,
  parameters: getByParent.ParametersType,
  options?: CallOptions,
): Promise<getByParent.ReturnType> {
  const message = await client.connectRpcClient.getCastsByParent(
    {
      parent: Parent.toProtobuf(parameters.parent),
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByParent.parseError = (error: unknown) => error as getByParent.ErrorType

export declare namespace createPreconstruct {
  type ParametersType = {
    cast: Omit<Cast.Cast, 'meta' | 'fid' | 'timestamp'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}

/**
 * Preconstructs {@link fhub#Cast.Cast} creation message without submitting it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const message = await Casts.createPreconstruct({
 *   cast: {
 *     text: {
 *       value: 'Hi!',
 *     },
 *     isLong: false,
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#Cast.Cast}, and {@link fhub#Account.Account} to sign the message.
 * @returns Cast creation message.
 */
export async function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType> {
  const message = await CastAdd.toMessageProtobuf({
    cast: {
      ...parameters.cast,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

createPreconstruct.parseError = (error: unknown) =>
  error as createPreconstruct.ErrorType

export declare namespace create {
  type ParametersType =
    | {
        cast: Omit<Cast.Cast, 'meta' | 'fid' | 'timestamp'>
        account: Account.Account
      }
    | { message: createPreconstruct.ReturnType }
  type ReturnType = Message.Message
  type ErrorType = GlobalErrorType
}

/**
 * Creates a {@link fhub#Cast.Cast} and sends it to Hub.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await Casts.create(client, {
 *   cast: {
 *     text: {
 *       value: 'Hi!',
 *     },
 *     isLong: false,
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#Cast.Cast}, and {@link fhub#Account.Account} to sign the message.
 * @returns Submitted Cast creation message
 */
export async function create(
  client: Client.Client,
  parameters: create.ParametersType,
  options?: CallOptions,
): Promise<create.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await CastAdd.toMessageProtobuf({
          cast: {
            ...parameters.cast,
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Submit.submitMessage(client, message, options)
}

create.parseError = (error: unknown) => error as create.ErrorType

export declare namespace fromString {
  type ParametersType = {
    text: string
    embeds?: Embed.Embed[] | undefined
  }
  type ReturnType = Pick<Cast.Cast, 'text' | 'isLong'>
  type ErrorType = GlobalErrorType
}
/**
 * Creates an partial {@link fhub#Cast.Cast} from raw string.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const cast = await Casts.fromString(client, {
 *   text: 'Hey @v, look at this cute kitty!',
 *   embeds: [{ type: 'url', url: 'https://cool-kitty.jpeg' }],
 * })
 *
 * cast
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - Text of the cast and optional embeds
 * @returns Partial cast with parsed mentions.
 */
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
  const embeds: Embed.Embed[] = []

  for (
    let mentionsMatchIndex = 0;
    mentionsMatchIndex < mentionsMatches.length;
    ++mentionsMatchIndex
  ) {
    const mentionMatch = mentionsMatches[mentionsMatchIndex]!
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
      const proof = await UsernameProof.get(client, {
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
    embedsMatches[embedsMatches.length - 1]!.index +
      embedsMatches[embedsMatches.length - 1]![0].length ===
      parameters.text.length
  ) {
    strippedText = strippedText.slice(
      0,
      embedsMatches[embedsMatches.length - 1]!.index,
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
  type ParametersType = get.ParametersType | get.ReturnType
  type ReturnType = get.ReturnType
  type ErrorType = GlobalErrorType
}
/**
 * Gets the root {@link fhub#Cast.Cast} by traversing parents.
 *
 * :::note
 *
 * Since traversing involves a loop, heavily rate-limited Hubs can cause issues.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const cast = await Casts.getRoot(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })
 *
 * cast
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}.
 * @returns Root Cast.
 */
export async function getRoot(
  client: Client.Client,
  parameters: getRoot.ParametersType,
  options?: CallOptions,
): Promise<getRoot.ReturnType> {
  let cast =
    'meta' in parameters ? parameters : await get(client, parameters, options)
  while (cast.parent !== undefined && cast.parent.type === 'cast') {
    cast = await get(client, cast.parent, options)
  }
  return cast
}

getRoot.parseError = (error: unknown) => error as getRoot.ErrorType

export declare namespace toString {
  type ParametersType = Cast.Cast
  type ReturnType = string
  type ErrorType = GlobalErrorType
}
/**
 * Formats a {@link fhub#Cast.Cast} into a string.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const cast = await Casts.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })
 *
 * const formatted = await Casts.toString(client, cast)
 *
 * formatted
 * //      ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param cast - {@link fhub#Cast.Cast} to format.
 * @returns The formatted Cast text.
 */
export async function toString(
  client: Client.Client,
  cast: toString.ParametersType,
): Promise<toString.ReturnType> {
  const unwrappedText = await (async () => {
    let text = cast.text.value
    if (!cast.text.mentions) return text
    for (const mention of cast.text.mentions.reverse()) {
      const mentionUsername = await User.getUsername(client, {
        fid: mention.fid,
      })
      text = `${text.slice(0, mention.position)}@${mentionUsername}${text.slice(mention.position)}`
    }
    return text
  })()

  return unwrappedText
}

toString.parseError = (error: unknown) => error as toString.ErrorType

export declare namespace likePreconstruct {
  type ParametersType = {
    cast: Omit<Extract<ReactionTarget.ReactionTarget, { type: 'cast' }>, 'type'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}
/**
 * Preconstructs {@link fhub#Reaction.Reaction} creation like message without submitting it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const message = await Casts.likePreconstruct({
 *   cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and {@link fhub#Account.Account} to sign the message.
 * @returns Like creation message.
 */
export async function likePreconstruct(
  parameters: likePreconstruct.ParametersType,
): Promise<likePreconstruct.ReturnType> {
  const message = await ReactionAdd.toMessageProtobuf({
    reaction: {
      type: 'like',
      target: {
        type: 'cast',
        ...parameters.cast,
      },
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

likePreconstruct.parseError = (error: unknown) =>
  error as likePreconstruct.ErrorType

export declare namespace like {
  type ParametersType =
    | {
        cast: Omit<
          Extract<ReactionTarget.ReactionTarget, { type: 'cast' }>,
          'type'
        >
        account: Account.Account
      }
    | { message: likePreconstruct.ReturnType }
  type ReturnType = Message.Message
  type ErrorType = GlobalErrorType
}
/**
 * Creates a like {@link fhub#Reaction.Reaction} and sends it to Hub.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await Casts.like(client, {
 *   cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and {@link fhub#Account.Account} to sign the message.
 * @returns Submitted Like creation message
 */
export async function like(
  client: Client.Client,
  parameters: like.ParametersType,
  options?: CallOptions,
): Promise<like.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await ReactionAdd.toMessageProtobuf({
          reaction: {
            type: 'like',
            target: {
              type: 'cast',
              ...parameters.cast,
            },
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Submit.submitMessage(client, message, options)
}

like.parseError = (error: unknown) => error as like.ErrorType

export declare namespace recastPreconstruct {
  type ParametersType = {
    cast: Omit<Extract<ReactionTarget.ReactionTarget, { type: 'cast' }>, 'type'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}

/**
 * Preconstructs {@link fhub#Reaction.Reaction} creation recast message without submitting it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const message = await Casts.recastPreconstruct({
 *   cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and {@link fhub#Account.Account} to sign the message.
 * @returns Recast creation message.
 */
export async function recastPreconstruct(
  parameters: recastPreconstruct.ParametersType,
): Promise<recastPreconstruct.ReturnType> {
  const message = await ReactionAdd.toMessageProtobuf({
    reaction: {
      type: 'recast',
      target: {
        type: 'cast',
        ...parameters.cast,
      },
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

recastPreconstruct.parseError = (error: unknown) =>
  error as recastPreconstruct.ErrorType

export declare namespace recast {
  type ParametersType =
    | {
        cast: Omit<
          Extract<ReactionTarget.ReactionTarget, { type: 'cast' }>,
          'type'
        >
        account: Account.Account
      }
    | { message: recastPreconstruct.ReturnType }
  type ReturnType = Message.Message
  type ErrorType = GlobalErrorType
}
/**
 * Creates a recast {@link fhub#Reaction.Reaction} and sends it to Hub.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await Casts.recast(client, {
 *   cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and {@link fhub#Account.Account} to sign the message.
 * @returns Submitted Recast creation message
 */
export async function recast(
  client: Client.Client,
  parameters: recast.ParametersType,
  options?: CallOptions,
): Promise<recast.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await ReactionAdd.toMessageProtobuf({
          reaction: {
            type: 'recast',
            target: {
              type: 'cast',
              ...parameters.cast,
            },
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Submit.submitMessage(client, message, options)
}

recast.parseError = (error: unknown) => error as recast.ErrorType

export declare namespace getWithReactions {
  type ParametersType = get.ParametersType
  type ReturnType = Cast.Cast & {
    recasts: Reaction.Reaction[]
    likes: Reaction.Reaction[]
    text: {
      unwrapped: string
    }
  }
  type ErrorType = get.ErrorType | GlobalErrorType
}

/**
 * Get a {@link fhub#Cast.Cast} by it's `hash` and `fid` of the creator, with unwrapped text and reactions.
 *
 * :::note
 *
 * Since getting all reactions involves a loop, heavily rate-limited Hubs can cause issues.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const cast = await Casts.getWithReactions(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })
 *
 * cast
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}.
 * @returns Cast with reactions and unwrapped text.
 */
export async function getWithReactions(
  client: Client.Client,
  parameters: getWithReactions.ParametersType,
  options?: CallOptions,
): Promise<getWithReactions.ReturnType> {
  const cast = await get(client, parameters, options)

  const reactions = await (async () => {
    const reactions: Reaction.Reaction[] = []
    let reactionsPageToken: Hex.Hex | null = null
    do {
      const { nextPageToken, messages } = await Reactions.getByCast(client, {
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

  return {
    ...cast,
    text: {
      ...cast.text,
      unwrapped: await toString(client, cast),
    },
    likes,
    recasts,
  }
}

getWithReactions.parseError = (error: unknown) =>
  error as getWithReactions.ErrorType

export declare namespace getWithReactionsByFid {
  type ParametersType = getByFid.ParametersType
  type ReturnType = {
    nextPageToken: Pagination.NextPageToken
    casts: (Cast.Cast & {
      recasts: Reaction.Reaction[]
      likes: Reaction.Reaction[]
      text: {
        unwrapped: string
      }
    })[]
  }
  type ErrorType = getByFid.ErrorType | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast}s with reactions and unwrapped text by `fid` of the creator.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * :::note
 *
 * Since getting all reactions involves a loop, heavily rate-limited Hubs can cause issues.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { casts, nextPageToken } = await Casts.getWithReactionsByFid(client, { fid: 11517n })
 *
 * casts
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid` of the creator, and {@link fhub#Pagination.Pagination}.
 * @returns {@link fhub#Cast.Cast}s with reactions and unwrapped text, `nextPageToken`.
 */
export async function getWithReactionsByFid(
  client: Client.Client,
  parameters: getWithReactionsByFid.ParametersType,
  options?: CallOptions,
): Promise<getWithReactionsByFid.ReturnType> {
  const casts: getWithReactionsByFid.ReturnType['casts'] = []
  const getCastsByFidResult: getByFid.ReturnType = await getByFid(
    client,
    parameters,
    options,
  )

  casts.push(
    ...(await Promise.all(
      getCastsByFidResult.casts.map(async (cast) => {
        const reactions = await (async () => {
          const reactions: Reaction.Reaction[] = []
          let reactionsPageToken: Hex.Hex | null = null
          do {
            const { nextPageToken, messages } = await Reactions.getByCast(
              client,
              {
                fid: cast.fid,
                hash: cast.meta.hash,
                pageToken: reactionsPageToken ? reactionsPageToken : undefined,
              },
            )
            reactionsPageToken = nextPageToken as any
            reactions.push(...messages)
          } while (reactionsPageToken)
          return reactions
        })()

        const likes = reactions.filter((reaction) => reaction.type === 'like')
        const recasts = reactions.filter(
          (reaction) => reaction.type === 'recast',
        )

        return {
          ...cast,
          text: {
            ...cast.text,
            unwrapped: await toString(client, cast),
          },
          likes,
          recasts,
        }
      }),
    )),
  )
  return { ...getCastsByFidResult, casts }
}

getWithReactionsByFid.parseError = (error: unknown) =>
  error as getWithReactionsByFid.ErrorType

export declare namespace getWithReactionsByParent {
  type ParametersType = getByParent.ParametersType
  type ReturnType = {
    casts: (Cast.Cast & {
      recasts: Reaction.Reaction[]
      likes: Reaction.Reaction[]
      text: {
        unwrapped: string
      }
    })[]
    nextPageToken: Pagination.NextPageToken
  }

  type ErrorType = getByParent.ErrorType | GlobalErrorType
}
/**
 * Get all {@link fhub#Cast.Cast}s that are childs of another {@link fhub#Cast.Cast}.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * :::note
 *
 * Since getting all reactions involves a loop, heavily rate-limited Hubs can cause issues.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Casts } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { casts, nextPageToken } = await Casts.getWithReactionsByParent(client, {
 *   parent: {
 *     type: 'cast',
 *     fid: 11517n,
 *     hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24',
 *   },
 * })
 *
 * casts
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}, and optional {@link fhub#Pagination.Pagination}.
 * @returns {@link fhub#Cast.Cast}s with reactions and unwrapped text, `nextPageToken`.
 */
export async function getWithReactionsByParent(
  client: Client.Client,
  parameters: getWithReactionsByParent.ParametersType,
  options?: CallOptions,
): Promise<getWithReactionsByParent.ReturnType> {
  const castsPageToken: Hex.Hex | null = null
  const casts: getWithReactionsByParent.ReturnType['casts'] = []
  const getCastsByParentResult: getByParent.ReturnType = await getByParent(
    client,
    {
      pageToken: castsPageToken ?? undefined,
      ...parameters,
    },
    options,
  )
  casts.push(
    ...(await Promise.all(
      getCastsByParentResult.casts.map(async (cast) => {
        const reactions = await (async () => {
          const reactions: Reaction.Reaction[] = []
          let reactionsPageToken: Hex.Hex | null = null
          do {
            const { nextPageToken, messages } = await Reactions.getByCast(
              client,
              {
                fid: cast.fid,
                hash: cast.meta.hash,
                pageToken: reactionsPageToken ? reactionsPageToken : undefined,
              },
            )
            reactionsPageToken = nextPageToken as any
            reactions.push(...messages)
          } while (reactionsPageToken)
          return reactions
        })()

        const likes = reactions.filter((reaction) => reaction.type === 'like')
        const recasts = reactions.filter(
          (reaction) => reaction.type === 'recast',
        )

        return {
          ...cast,
          text: {
            ...cast.text,
            unwrapped: await toString(client, cast),
          },
          likes,
          recasts,
        }
      }),
    )),
  )
  return { casts, nextPageToken: getCastsByParentResult.nextPageToken }
}

getWithReactionsByParent.parseError = (error: unknown) =>
  error as getWithReactionsByParent.ErrorType
