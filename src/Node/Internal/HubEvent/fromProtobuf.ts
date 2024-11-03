import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Message_fromProtobuf } from '../Message/fromProtobuf.js'
import * as HubEventProtobuf from '../Protobufs/hub_event_pb.js'
import type { HubEvent } from './types.js'

export function HubEvent_fromProtobuf(
  hubEvent: HubEvent_fromProtobuf.ParametersType,
): HubEvent_fromProtobuf.ReturnType {
  if (
    hubEvent.type === HubEventProtobuf.HubEventType.MERGE_MESSAGE &&
    hubEvent.body.case === 'mergeMessageBody'
  ) {
    return {
      type: 'mergeMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromProtobuf(hubEvent.body.value.message)
        : undefined,
      deletedMesssages:
        hubEvent.body.value.deletedMessages.map(Message_fromProtobuf),
    }
  }

  if (
    hubEvent.type === HubEventProtobuf.HubEventType.PRUNE_MESSAGE &&
    hubEvent.body.case === 'pruneMessageBody'
  ) {
    return {
      type: 'pruneMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromProtobuf(hubEvent.body.value.message)
        : undefined,
    }
  }

  if (
    hubEvent.type === HubEventProtobuf.HubEventType.REVOKE_MESSAGE &&
    hubEvent.body.case === 'revokeMessageBody'
  ) {
    return {
      type: 'revokeMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromProtobuf(hubEvent.body.value.message)
        : undefined,
    }
  }
  throw new Error('Not implemented')
}

export declare namespace HubEvent_fromProtobuf {
  type ParametersType = HubEventProtobuf.HubEvent
  type ReturnType = HubEvent
  type ErrorType = GlobalErrorType
}

HubEvent_fromProtobuf.parseError = (error: unknown) =>
  error as HubEvent_fromProtobuf.ErrorType
