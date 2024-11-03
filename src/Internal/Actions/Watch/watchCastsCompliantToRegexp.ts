import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Actions_Cast_toString } from '../Cast/toString.js'
import { Actions_Watch_watchCasts } from './watchCasts.js'

export declare namespace Actions_Watch_watchCastsCompliantToRegexp {
  type ParametersType = { regexp: RegExp }
  type ReturnType = Actions_Watch_watchCasts.ReturnType
  type ErrorType = Actions_Watch_watchCasts.ErrorType | GlobalErrorType
}
export async function* Actions_Watch_watchCastsCompliantToRegexp(
  client: Client,
  parameters: Actions_Watch_watchCastsCompliantToRegexp.ParametersType,
  options?: CallOptions,
): Actions_Watch_watchCastsCompliantToRegexp.ReturnType {
  for await (const cast of Actions_Watch_watchCasts(client, options)) {
    if (parameters.regexp.test(await Actions_Cast_toString(client, cast)))
      yield cast
  }
}

Actions_Watch_watchCastsCompliantToRegexp.parseError = (error: unknown) =>
  error as Actions_Watch_watchCastsCompliantToRegexp.ErrorType
