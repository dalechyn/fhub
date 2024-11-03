import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Actions_Watch_watchCasts } from './watchCasts.js'

export declare namespace Actions_Watch_watchCastsMentioningFid {
  type ParametersType = { fid: bigint }
  type ReturnType = Actions_Watch_watchCasts.ReturnType
  type ErrorType = Actions_Watch_watchCasts.ErrorType | GlobalErrorType
}
export async function* Actions_Watch_watchCastsMentioningFid(
  client: Client,
  parameters: Actions_Watch_watchCastsMentioningFid.ParametersType,
  options?: CallOptions,
): Actions_Watch_watchCastsMentioningFid.ReturnType {
  for await (const cast of Actions_Watch_watchCasts(client, options)) {
    if (!cast.text.mentions) continue
    if (cast.text.mentions.some((mention) => mention.fid === parameters.fid))
      yield cast
  }
}

Actions_Watch_watchCastsMentioningFid.parseError = (error: unknown) =>
  error as Actions_Watch_watchCastsMentioningFid.ErrorType
