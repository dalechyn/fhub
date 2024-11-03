import { create } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import * as RequestResponseProtobuf from '../../Protobufs/request_response_pb.js'
import { UsernameProof_fromProtobuf } from '../../UsernameProof/fromProtobuf.js'
import type { UsernameProof } from '../../UsernameProof/types.js'

export declare namespace Actions_UsernameProof_getUsernameProof {
  type ParametersType = { name: string }
  type ReturnType = Omit<UsernameProof, 'meta'>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_UsernameProof_getUsernameProof(
  client: Client,
  parameters: Actions_UsernameProof_getUsernameProof.ParametersType,
  options?: CallOptions,
): Promise<Actions_UsernameProof_getUsernameProof.ReturnType> {
  const proof = await client.connectRpcClient.getUsernameProof(
    create(RequestResponseProtobuf.UsernameProofRequestSchema, {
      name: Uint8Array.from(Buffer.from(parameters.name)),
    }),
    options,
  )
  return UsernameProof_fromProtobuf(proof)
}

Actions_UsernameProof_getUsernameProof.parseError = (error: unknown) =>
  error as Actions_UsernameProof_getUsernameProof.ErrorType
