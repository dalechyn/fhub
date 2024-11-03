import type { CallOptions } from '@connectrpc/connect'
import { Actions as NodeActions } from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Actions_Watch_watchCastsMentioningFid } from './watchCastsMentioningFid.js'

export declare namespace Actions_Watch_watchCastsMentioningUsername {
  type ParametersType = { username: string }
  type ReturnType = Actions_Watch_watchCastsMentioningFid.ReturnType
  type ErrorType =
    | Actions_Watch_watchCastsMentioningFid.ErrorType
    | GlobalErrorType
}
export async function* Actions_Watch_watchCastsMentioningUsername(
  client: Client,
  parameters: Actions_Watch_watchCastsMentioningUsername.ParametersType,
  options?: CallOptions,
): Actions_Watch_watchCastsMentioningUsername.ReturnType {
  const { fid } = await NodeActions.UsernameProof.getUsernameProof(
    client,
    { name: parameters.username },
    options,
  )

  for await (const cast of Actions_Watch_watchCastsMentioningFid(
    client,
    { fid },
    options,
  )) {
    yield cast
  }
}

Actions_Watch_watchCastsMentioningUsername.parseError = (error: unknown) =>
  error as Actions_Watch_watchCastsMentioningUsername.ErrorType
