import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Message_fromMessage } from '../Message/fromMessage.js'
import {
  HubEventType,
  type HubEvent as ProtobufHubEvent,
} from '../Protobufs/hub_event_pb.js'
import type { HubEvent } from './types.js'

export function HubEvent_fromMessage(
  hubEvent: ProtobufHubEvent,
): HubEvent_fromMessage.ReturnType {
  if (
    hubEvent.type === HubEventType.MERGE_MESSAGE &&
    hubEvent.body.case === 'mergeMessageBody'
  ) {
    return {
      type: 'mergeMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromMessage(hubEvent.body.value.message)
        : undefined,
      deletedMesssages:
        hubEvent.body.value.deletedMessages.map(Message_fromMessage),
    }
  }

  if (
    hubEvent.type === HubEventType.PRUNE_MESSAGE &&
    hubEvent.body.case === 'pruneMessageBody'
  ) {
    return {
      type: 'pruneMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromMessage(hubEvent.body.value.message)
        : undefined,
    }
  }

  if (
    hubEvent.type === HubEventType.REVOKE_MESSAGE &&
    hubEvent.body.case === 'revokeMessageBody'
  ) {
    return {
      type: 'revokeMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message_fromMessage(hubEvent.body.value.message)
        : undefined,
    }
  }
  throw new Error('Not implemented')
}

export declare namespace HubEvent_fromMessage {
  type ReturnType = HubEvent

  type ErrorType = GlobalErrorType
}

HubEvent_fromMessage.parseError = (error: unknown) =>
  error as HubEvent_fromMessage.ErrorType
