import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type CastIdJson,
  CastIdSchema,
  MessageSchema,
} from '../../Protobufs/message_pb.js'

export declare namespace Actions_Cast_GetCast {
  type ReturnType = MessageJsonType<typeof MessageSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: Required<CastIdJson>,
  options?: CallOptions,
): Promise<Actions_Cast_GetCast.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    fromJson(CastIdSchema, parameters),
    options,
  )
  return toJson(MessageSchema, message)
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_GetCast.ErrorType
