import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../clients/createClient.js'
import { HubService } from '../../protobufs/rpc_pb.js'
import type { Evaluate } from '../../types/utils.js'

export namespace GetCastsByFid {
  export type Parameters = Required<
    MessageJsonType<typeof HubService.method.getCastsByFid.input>
  >
  export type ReturnType = MessageJsonType<
    typeof HubService.method.getCastsByFid.output
  >
  export type ErrorType = MessageJsonType<
    typeof HubService.method.getCastsByFid.output
  >
}
export async function getCastsByFid(
  client: Client,
  parameters: Evaluate<GetCastsByFid.Parameters>,
  options?: CallOptions,
): Promise<GetCastsByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    fromJson(HubService.method.getCastsByFid.input, parameters),
    options,
  )
  return toJson(HubService.method.getCastsByFid.output, message)
}
