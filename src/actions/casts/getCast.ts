import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../clients/createClient.js'
import { HubService } from '../../protobufs/rpc_pb.js'
import type { Evaluate } from '../../types/utils.js'

export namespace GetCast {
  export type Parameters = Required<
    MessageJsonType<typeof HubService.method.getCast.input>
  >
  export type ReturnType = MessageJsonType<
    typeof HubService.method.getCast.output
  >
  export type ErrorType = MessageJsonType<
    typeof HubService.method.getCast.output
  >
}
export async function getCast(
  client: Client,
  parameters: Evaluate<GetCast.Parameters>,
  options?: CallOptions,
): Promise<GetCast.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    fromJson(HubService.method.getCast.input, parameters),
    options,
  )
  return toJson(HubService.method.getCast.output, message)
}
