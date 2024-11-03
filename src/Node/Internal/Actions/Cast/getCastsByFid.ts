import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import type { Cast } from '../../Cast/types.js'
import { CastAdd_fromMessageProtobuf } from '../../CastAdd/fromMessageProtobuf.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type {
  NextPageToken,
  PaginationWithTimestamps,
} from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'

export declare namespace Actions_Cast_getCastsByFid {
  type ParametersType = {
    fid: bigint
  } & PaginationWithTimestamps
  type ReturnType = {
    casts: Cast[]
    nextPageToken: NextPageToken
  }
  type ErrorType = CastAdd_fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCastsByFid(
  client: Client,
  parameters: Actions_Cast_getCastsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCastsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    {
      fid: parameters.fid,
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) =>
      CastAdd_fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}
Actions_Cast_getCastsByFid.parseError = (error: unknown) =>
  error as Actions_Cast_getCastsByFid.ErrorType
