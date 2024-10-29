import { type MessageJsonType, fromJson, toJson } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { HubEventSchema } from '../../Protobufs/hub_event_pb.js'
import {
  type EventRequestJson,
  EventRequestSchema,
} from '../../Protobufs/request_response_pb.js'

export declare namespace Actions_Event_getEvent {
  type ParametersType = Required<EventRequestJson>
  type ReturnType = MessageJsonType<typeof HubEventSchema>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Event_getEvent(
  client: Client,
  parameters: Actions_Event_getEvent.ParametersType,
  options?: CallOptions,
): Promise<Actions_Event_getEvent.ReturnType> {
  const message = await client.connectRpcClient.getEvent(
    fromJson(EventRequestSchema, parameters),
    options,
  )
  return toJson(HubEventSchema, message)
}

Actions_Event_getEvent.parseError = (error: unknown) =>
  error as Actions_Event_getEvent.ErrorType
