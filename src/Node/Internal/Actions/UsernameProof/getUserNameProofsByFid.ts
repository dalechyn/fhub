import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type FidRequestJson,
  FidRequestSchema,
  UsernameProofsResponseSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_UsernameProof_getUserNameProofsByFid {
  type ParametersType = Required<FidRequestJson>
  type ReturnType = MessageJsonType<typeof UsernameProofsResponseSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UsernameProof_getUserNameProofsByFid(
  client: Client,
  parameters: Actions_UsernameProof_getUserNameProofsByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_UsernameProof_getUserNameProofsByFid.ReturnType> {
  const proofs = await client.connectRpcClient.getUserNameProofsByFid(
    fromJson(FidRequestSchema, parameters),
    options,
  )
  return toJson(UsernameProofsResponseSchema, proofs)
}

Actions_UsernameProof_getUserNameProofsByFid.parseError = (error: unknown) =>
  error as Actions_UsernameProof_getUserNameProofsByFid.ErrorType
