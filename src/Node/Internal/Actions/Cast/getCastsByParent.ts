import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import { Parent_toMessage } from '../../Parent/toMessage.js'
import type { Parent } from '../../Parent/types.js'

export declare namespace Actions_Cast_getCastsByParent {
  type ParametersType = {
    parent: Parent
    pageSize?: number
    pageToken?: Types.Hex | undefined
    reverse?: boolean
  }
  type ReturnType = {
    casts: Cast[]
    nextPageToken: Types.Hex | null
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
Actions_Cast_getCastsByParent.parseError = (error: unknown) =>
  error as Actions_Cast_getCastsByParent.ErrorType
