import type { CallOptions } from '@connectrpc/connect'
import type * as Cast from '../core/Cast.js'
import type * as Client from '../core/Client.js'
import type { GlobalErrorType } from '../core/Error.js'
import * as Casts from './Casts.js'
import * as Event from './Event.js'
import * as UsernameProof from './UsernameProof.js'

export declare namespace watchCasts {
  type ReturnType = AsyncGenerator<Cast.Cast, void, undefined>
  type ErrorType = Casts.get.ErrorType | GlobalErrorType
}
/**
 * Creates an `AsyncGenerator` subscription over all merged {@link fhub#Cast.Cast}s.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Watch } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * for await (const message of Watch.watchCasts(client)) {
 *   message
 *   //    ^?
 * }
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @returns `AsyncGenerator<Cast.Cast>`.
 */
export async function* watchCasts(
  client: Client.Client,
  options?: CallOptions,
): watchCasts.ReturnType {
  for await (const event of Event.subscribe(
    client,
    {
      eventTypes: ['mergeMessage'],
    },
    options,
  )) {
    if (event.message === undefined || event.message.type !== 'castAdd')
      continue
    yield event.message.data
  }
}

watchCasts.parseError = (error: unknown) => error as watchCasts.ErrorType

export declare namespace watchCastsCompliantToRegexp {
  type ParametersType = { regexp: RegExp }
  type ReturnType = watchCasts.ReturnType
  type ErrorType = watchCasts.ErrorType | GlobalErrorType
}
/**
 * Creates an `AsyncGenerator` subscription over all merged {@link fhub#Cast.Cast}s, compliant to a specific `RegExp`.
 *
 * :::note
 *
 * Each cast will be unwrapped asynchronously which can cause issues with rate-limited Hubs.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Watch } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * for await (const message of Watch.watchCastsCompliantToRegexp(client, { regexp: /hello/g })) {
 *   message
 *   //    ^?
 * }
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @returns `AsyncGenerator<Cast.Cast>`.
 */
export async function* watchCastsCompliantToRegexp(
  client: Client.Client,
  parameters: watchCastsCompliantToRegexp.ParametersType,
  options?: CallOptions,
): watchCastsCompliantToRegexp.ReturnType {
  for await (const cast of watchCasts(client, options)) {
    if (parameters.regexp.test(await Casts.toString(client, cast))) yield cast
  }
}

watchCastsCompliantToRegexp.parseError = (error: unknown) =>
  error as watchCastsCompliantToRegexp.ErrorType

export declare namespace watchCastsMentioningFid {
  type ParametersType = { fid: bigint }
  type ReturnType = watchCasts.ReturnType
  type ErrorType = watchCasts.ErrorType | GlobalErrorType
}
/**
 * Creates an `AsyncGenerator` subscription over all merged {@link fhub#Cast.Cast}s, mentioning a specific `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Watch } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * for await (const message of Watch.watchCastsMentioningFid(client, { fid: 11517n })) {
 *   message
 *   //    ^?
 * }
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @returns `AsyncGenerator<Cast.Cast>`.
 */
export async function* watchCastsMentioningFid(
  client: Client.Client,
  parameters: watchCastsMentioningFid.ParametersType,
  options?: CallOptions,
): watchCastsMentioningFid.ReturnType {
  for await (const cast of watchCasts(client, options)) {
    if (!cast.text.mentions) continue
    if (cast.text.mentions.some((mention) => mention.fid === parameters.fid))
      yield cast
  }
}

watchCastsMentioningFid.parseError = (error: unknown) =>
  error as watchCastsMentioningFid.ErrorType

export declare namespace watchCastsMentioningUsername {
  type ParametersType = { username: string }
  type ReturnType = watchCastsMentioningFid.ReturnType
  type ErrorType = watchCastsMentioningFid.ErrorType | GlobalErrorType
}
/**
 * Creates an `AsyncGenerator` subscription over all merged {@link fhub#Cast.Cast}s, mentioning a specific `username`.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { Watch } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * for await (const message of Watch.watchCastsMentioningUsername(client, { username: 'dalechyn.eth' })) {
 *   message
 *   //    ^?
 * }
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @returns `AsyncGenerator<Cast.Cast>`.
 */
export async function* watchCastsMentioningUsername(
  client: Client.Client,
  parameters: watchCastsMentioningUsername.ParametersType,
  options?: CallOptions,
): watchCastsMentioningUsername.ReturnType {
  const { fid } = await UsernameProof.get(
    client,
    { name: parameters.username },
    options,
  )

  for await (const cast of watchCastsMentioningFid(client, { fid }, options)) {
    yield cast
  }
}

watchCastsMentioningUsername.parseError = (error: unknown) =>
  error as watchCastsMentioningUsername.ErrorType
