import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_GetCastsByMention {
  type ReturnType = {
    casts: Cast[]
    nextPageToken: Types.Hex | null
  }
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastsByMention(
  client: Client,
  parameters: {
    fid: bigint
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  },
  options?: CallOptions,
): Promise<Actions_Cast_GetCastsByMention.ReturnType> {
  const message = await client.connectRpcClient.getCastsByMention(
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

  const nextPageToken = (() => {
    if (!message.nextPageToken) return null
    const hex = Hex.fromBytes(message.nextPageToken)
    if (hex === '0x') return null
    return hex
  })()
  return {
    casts: await Promise.all(
      message.messages.map((message) => Cast_fromMessage(client, message)),
    ),
    nextPageToken,
  }
}
Actions_Cast_getCastsByMention.parseError = (error: unknown) =>
  error as Actions_Cast_GetCastsByMention.ErrorType
