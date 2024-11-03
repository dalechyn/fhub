import type { CallOptions } from '@connectrpc/connect'
import { Hex } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import type { Cast } from '../../Cast/types.js'
import { CastAdd_fromMessageProtobuf } from '../../CastAdd/fromMessageProtobuf.js'
import type { CastId } from '../../CastId/types.js'

export declare namespace Actions_Cast_getCast {
  type ParametersType = CastId
  type ReturnType = Cast
  type ErrorType = CastAdd_fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: Actions_Cast_getCast.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCast.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    { fid: parameters.fid, hash: Hex.toBytes(parameters.hash) },
    options,
  )

  return CastAdd_fromMessageProtobuf(message)
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_getCast.ErrorType
