import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_GetCastsByFid {
  type ReturnType = {
    casts: Cast[]
    nextPageToken: Types.Hex | undefined
  }
  // @TODO: proper error handling
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastsByFid(
  client: Client,
  parameters: {
    fid: bigint
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  },
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    {
      fid: parameters.fid,
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
Actions_Cast_getCastsByFid.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByFid.ErrorType
