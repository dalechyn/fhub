import type { CallOptions } from '@connectrpc/connect'
import { Hex } from 'ox'
import { Cast_fromMessage } from '../../Cast/fromMessage.js'
import type { Cast } from '../../Cast/types.js'
import type { CastId } from '../../CastId/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_GetCast {
  type ReturnType = Cast
  type ErrorType = Cast_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: CastId,
  options?: CallOptions,
): Promise<Actions_Cast_GetCast.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    { fid: parameters.fid, hash: Hex.toBytes(parameters.hash) },
    options,
  )

  return Cast_fromMessage(message)
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_GetCast.ErrorType
