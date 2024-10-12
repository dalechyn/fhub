import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast, Parent } from '../../Cast/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_GetCastsByParent {
  type ReturnType = {
    casts: Cast[]
    nextPageToken: Types.Hex | undefined
  }
  // @TODO: proper error handling
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastsByParent(
  client: Client,
  parameters: {
    parent: Parent
    pageSize?: number
    pageToken?: Types.Hex
    reverse?: boolean
  },
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByParent.ReturnType> {
  const message = await client.connectRpcClient.getCastsByParent(
    {
      // TODO: Parent_from method and to. shit is complex...
      // This obv won't work now
      parent: parameters.parent as any,
      ...(parameters.pageSize ? { pageSize: parameters.pageSize } : {}),
      ...(parameters.pageToken
        ? { pageToken: Hex.toBytes(parameters.pageToken) }
        : {}),
      ...(parameters.reverse ? { reverse: parameters.reverse } : {}),
    },
    options,
  )
  return {
    casts: message.messages.map(Cast_fromMessage),
    nextPageToken: message.nextPageToken
      ? Hex.fromBytes(message.nextPageToken)
      : undefined,
  }
}
Actions_Cast_getCastsByParent.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByParent.ErrorType
