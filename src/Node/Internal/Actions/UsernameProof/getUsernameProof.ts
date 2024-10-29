import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import {
  type UsernameProofRequestJson,
  UsernameProofRequestSchema,
} from '../../Protobufs/request_response_pb.js'
import { UserNameProofSchema } from '../../Protobufs/username_proof_pb.js'

export declare namespace Actions_UsernameProof_getUsernameProof {
  type ParametersType = Required<UsernameProofRequestJson>
  type ReturnType = MessageJsonType<typeof UserNameProofSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UsernameProof_getUsernameProof(
  client: Client,
  parameters: Actions_UsernameProof_getUsernameProof.ParametersType,
  options?: CallOptions,
): Promise<Actions_UsernameProof_getUsernameProof.ReturnType> {
  const message = await client.connectRpcClient.getUsernameProof(
    fromJson(UsernameProofRequestSchema, parameters),
    options,
  )
  return toJson(UserNameProofSchema, message)
}

Actions_UsernameProof_getUsernameProof.parseError = (error: unknown) =>
  error as Actions_UsernameProof_getUsernameProof.ErrorType
