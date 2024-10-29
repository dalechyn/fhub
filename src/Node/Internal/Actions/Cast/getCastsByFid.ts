import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'

export declare namespace Actions_Cast_getCastsByFid {
  type ParametersType = {
    fid: bigint
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
    startTimestamp?: bigint
    stopTimestamp?: bigint
  }
  type ReturnType = {
    casts: Cast[]
    nextPageToken: Types.Hex | null
  }
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastsByFid(
  client: Client,
  parameters: Actions_Cast_getCastsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCastsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    {
      fid: parameters.fid,
      ...(parameters.pageSize ? { pageSize: parameters.pageSize } : {}),
      ...(parameters.pageToken
        ? { pageToken: Hex.toBytes(parameters.pageToken) }
        : {}),
      ...(parameters.reverse ? { reverse: parameters.reverse } : {}),
      ...(parameters.startTimestamp
        ? { startTimestamp: parameters.startTimestamp }
        : {}),
      ...(parameters.stopTimestamp
        ? { stopTimestamp: parameters.stopTimestamp }
        : {}),
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
Actions_Cast_getCastsByFid.parseError = (error: unknown) =>
  error as Actions_Cast_getCastsByFid.ErrorType
