import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { MessageType } from '../../Protobufs/message_pb.js'

export declare namespace Actions_Cast_getAllCastMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination
  type ReturnType = {
    messages: (
      | { type: 'casted'; cast: Cast }
      | { type: 'removed'; hash: Types.Hex }
    )[]
    nextPageToken: NextPageToken
  }
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getAllCastMessagesByFid(
  client: Client,
  parameters: Actions_Cast_getAllCastMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getAllCastMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllCastMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination_unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map((message) => {
      if (
        message.data?.type === MessageType.CAST_REMOVE &&
        message.data.body.case === 'castRemoveBody'
      )
        return {
          type: 'removed' as const,
          hash: Hex.fromBytes(message.data.body.value.targetHash),
        }
      return { type: 'casted', cast: Cast_fromMessage(message) }
    }),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}
Actions_Cast_getAllCastMessagesByFid.parseError = (error: unknown) =>
  error as Actions_Cast_getAllCastMessagesByFid.ErrorType
