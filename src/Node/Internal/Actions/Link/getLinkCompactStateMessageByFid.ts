import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { LinkCompactState_fromMessageProtobuf } from '../../LinkCompactState/fromMessageProtobuf.js'
import type { LinkCompactState } from '../../LinkCompactState/types.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'

export declare namespace Actions_Link_getLinkCompactStateMessageByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination
  type ReturnType = { links: LinkCompactState[]; nextPageToken: NextPageToken }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinkCompactStateMessageByFid(
  client: Client,
  parameters: Actions_Link_getLinkCompactStateMessageByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLinkCompactStateMessageByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinkCompactStateMessageByFid(
    { fid: parameters.fid, ...Pagination_unwrap(parameters) },
    options,
  )
  return {
    links: message.messages.map(LinkCompactState_fromMessageProtobuf),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_Link_getLinkCompactStateMessageByFid.parseError = (error: unknown) =>
  error as Actions_Link_getLinkCompactStateMessageByFid.ErrorType
