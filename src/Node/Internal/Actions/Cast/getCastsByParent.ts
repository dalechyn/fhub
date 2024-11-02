import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { Parent_toMessage } from '../../Parent/toMessage.js'
import type { Parent } from '../../Parent/types.js'

export declare namespace Actions_Cast_getCastsByParent {
  type ParametersType = {
    parent: Parent
  } & Pagination
  type ReturnType = {
    casts: Cast[]
    nextPageToken: NextPageToken
  }
  type ErrorType =
    | Cast_fromMessage.ErrorType
    | Parent_toMessage.ErrorType
    | GlobalErrorType
}
export async function Actions_Cast_getCastsByParent(
  client: Client,
  parameters: Actions_Cast_getCastsByParent.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCastsByParent.ReturnType> {
  const message = await client.connectRpcClient.getCastsByParent(
    {
      parent: Parent_toMessage(parameters.parent),
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) => Cast_fromMessage(message)),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}
Actions_Cast_getCastsByParent.parseError = (error: unknown) =>
  error as Actions_Cast_getCastsByParent.ErrorType
