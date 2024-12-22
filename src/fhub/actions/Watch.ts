import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Client from '../Client.js'
import * as Cast from './Cast.js'

export declare namespace watchCasts {
  type ReturnType = AsyncGenerator<Core.Cast.Cast, void, undefined>
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function* watchCasts(
  client: Client.Client,
  options?: CallOptions,
): watchCasts.ReturnType {
  for await (const event of Core.Actions.Event.subscribe(
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
export async function* watchCastsCompliantToRegexp(
  client: Client.Client,
  parameters: watchCastsCompliantToRegexp.ParametersType,
  options?: CallOptions,
): watchCastsCompliantToRegexp.ReturnType {
  for await (const cast of watchCasts(client, options)) {
    if (parameters.regexp.test(await Cast.toString(client, cast))) yield cast
  }
}

watchCastsCompliantToRegexp.parseError = (error: unknown) =>
  error as watchCastsCompliantToRegexp.ErrorType

export declare namespace watchCastsMentioningFid {
  type ParametersType = { fid: bigint }
  type ReturnType = watchCasts.ReturnType
  type ErrorType = watchCasts.ErrorType | GlobalErrorType
}
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
export async function* watchCastsMentioningUsername(
  client: Client.Client,
  parameters: watchCastsMentioningUsername.ParametersType,
  options?: CallOptions,
): watchCastsMentioningUsername.ReturnType {
  const { fid } = await Core.Actions.UsernameProof.get(
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
