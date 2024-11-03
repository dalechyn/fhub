import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Link_fromMessageProtobuf } from '../../Link/fromMessageProtobuf.js'
import type { Link } from '../../Link/types.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'

export declare namespace Actions_Link_getLinksByFid {
  type ParametersType = {
    sourceFid: bigint
    type: string
  } & Pagination
  type ReturnType = { links: Link[]; nextPageToken: NextPageToken }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Link_getLinksByFid(
  client: Client,
  parameters: Actions_Link_getLinksByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLinksByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinksByFid(
    {
      fid: parameters.sourceFid,
      linkType: parameters.type,
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    links: message.messages.map(Link_fromMessageProtobuf),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_Link_getLinksByFid.parseError = (error: unknown) =>
  error as Actions_Link_getLinksByFid.ErrorType
