import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as HubEvent from '../HubEvent.js'
import * as HubEventProtobuf from '../protobufs/hub_event_pb.js'
import * as RequestResponseProtobuf from '../protobufs/request_response_pb.js'

export declare namespace get {
  type ParametersType = Required<RequestResponseProtobuf.EventRequestJson>
  type ReturnType = MessageJsonType<typeof HubEventProtobuf.HubEventSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const message = await client.connectRpcClient.getEvent(
    fromJson(RequestResponseProtobuf.EventRequestSchema, parameters),
    options,
  )
  return toJson(HubEventProtobuf.HubEventSchema, message)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace subscribe {
  type ParametersType = {
    eventTypes: ('mergeMessage' | 'pruneMessage' | 'revokeMessage')[]
    fromId?: bigint | undefined
    totalShards?: bigint | undefined
    shardIndex?: bigint | undefined
  }
  type ReturnType = AsyncGenerator<HubEvent.HubEvent, void, undefined>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function* subscribe(
  client: Client.Client,
  parameters: subscribe.ParametersType,
  options?: CallOptions,
): subscribe.ReturnType {
  const eventTypesNumbers = parameters.eventTypes.map((eventType) => {
    if (eventType === 'mergeMessage') return 1
    if (eventType === 'pruneMessage') return 2
    if (eventType === 'revokeMessage') return 3
    if (eventType === 'mergeUsernameProof') return 6
    if (eventType === 'mergeOnChainEvent') return 9
    return 0
  })

  for await (const message of client.connectRpcClient.subscribe(
    {
      eventTypes: eventTypesNumbers,
      ...(parameters.fromId ? { fromId: parameters.fromId } : {}),
      ...(parameters.totalShards
        ? { totalShards: parameters.totalShards }
        : {}),
      ...(parameters.shardIndex ? { shardIndex: parameters.shardIndex } : {}),
    },
    options,
  )) {
    yield HubEvent.fromProtobuf(message)
  }
}

subscribe.parseError = (error: unknown) => error as subscribe.ErrorType
