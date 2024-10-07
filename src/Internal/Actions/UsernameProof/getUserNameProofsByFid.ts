import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  UsernameProofsResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_UsernameProof_GetUserNameProofsByFid {
  type ReturnType = MessageJsonType<typeof UsernameProofsResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UsernameProof_getUserNameProofsByFid(
  client: Client,
  parameters: Required<FidRequestJson>,
  options?: CallOptions,
): Promise<Actions_UsernameProof_GetUserNameProofsByFid.ReturnType> {
  const message = await client.connectRpcClient.getUserNameProofsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(UsernameProofsResponseSchema, message)
}

Actions_UsernameProof_getUserNameProofsByFid.parseError = (error: unknown) =>
  error as Actions_UsernameProof_GetUserNameProofsByFid.ErrorType
