import type { CallOptions } from '@connectrpc/connect'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Watch_watchCasts {
  type ReturnType = AsyncGenerator<NodeTypes.Cast, void, undefined>
  type ErrorType = NodeActions.Cast.getCast.ErrorType | GlobalErrorType
}
export async function* Actions_Watch_watchCasts(
  client: Client,
  options?: CallOptions,
): Actions_Watch_watchCasts.ReturnType {
  for await (const event of NodeActions.Event.subscribe(
    client,
    {
      eventTypes: ['mergeMessage'],
    },
    options,
  )) {
    if (event.message === undefined || event.message.type !== 'castAdd')
      continue
    yield event.message.cast
  }
}

Actions_Watch_watchCasts.parseError = (error: unknown) =>
  error as Actions_Watch_watchCasts.ErrorType
