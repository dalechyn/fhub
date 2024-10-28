import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { MessageType } from '../../Protobufs/message_pb.js'

export declare namespace Actions_Cast_GetAllCastMessagesByFid {
  type ReturnType = {
    messages: (
      | { type: 'casted'; cast: Cast }
      | { type: 'removed'; hash: Types.Hex }
    )[]
    nextPageToken: Types.Hex | null
  }
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getAllCastMessagesByFid(
  client: Client,
  parameters: {
    fid: bigint
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  },
  options?: CallOptions,
): Promise<Actions_Cast_GetAllCastMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllCastMessagesByFid(
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
    messages: await Promise.all(
      message.messages.map(async (message) => {
        if (
          message.data?.type === MessageType.CAST_REMOVE &&
          message.data.body.case === 'castRemoveBody'
        )
          return {
            type: 'removed' as const,
            hash: Hex.fromBytes(message.data.body.value.targetHash),
          }
        return { type: 'casted', cast: await Cast_fromMessage(client, message) }
      }),
    ),
    nextPageToken,
  }
}
Actions_Cast_getAllCastMessagesByFid.parseError = (error: unknown) =>
  error as Actions_Cast_GetAllCastMessagesByFid.ErrorType
