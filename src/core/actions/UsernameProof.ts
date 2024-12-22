import {
  type MessageJsonType,
  create,
  fromJson,
  toJson,
} from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as UsernameProof from '../UsernameProof.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace get {
  type ParametersType = { name: string }
  type ReturnType = Omit<UsernameProof.UsernameProof, 'meta'>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const proof = await client.connectRpcClient.getUsernameProof(
    create(RequestResponseProtobuf.UsernameProofRequestSchema, {
      name: Uint8Array.from(Buffer.from(parameters.name)),
    }),
    options,
  )
  return UsernameProof.fromProtobuf(proof)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getByFid {
  type ParametersType = Required<RequestResponseProtobuf.FidRequestJson>
  type ReturnType = MessageJsonType<
    typeof RequestResponseProtobuf.UsernameProofsResponseSchema
  >
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const proofs = await client.connectRpcClient.getUserNameProofsByFid(
    fromJson(RequestResponseProtobuf.FidRequestSchema, parameters),
    options,
  )
  return toJson(RequestResponseProtobuf.UsernameProofsResponseSchema, proofs)
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType
