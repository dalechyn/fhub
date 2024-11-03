import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Link_fromMessageProtobuf } from '../../Link/fromMessageProtobuf.js'
import type { Link } from '../../Link/types.js'

export declare namespace Actions_Link_getLink {
  type ParametersType = {
    sourceFid: bigint
    targetFid: bigint
    type: string
  }
  type ReturnType = Link
  type ErrorType = Link_fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function Actions_Link_getLink(
  client: Client,
  parameters: Actions_Link_getLink.ParametersType,
  options?: CallOptions,
): Promise<Actions_Link_getLink.ReturnType> {
  const message = await client.connectRpcClient.getLink(
    {
      linkType: parameters.type,
      fid: parameters.sourceFid,
      target: {
        case: 'targetFid',
        value: parameters.targetFid,
      },
    },
    options,
  )
  return Link_fromMessageProtobuf(message)
}

Actions_Link_getLink.parseError = (error: unknown) =>
  error as Actions_Link_getLink.ErrorType
