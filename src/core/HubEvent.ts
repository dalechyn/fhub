import type { GlobalErrorType } from './Error.js'
import * as Message from './Message.js'
import * as HubEventProtobuf from './protobufs/hub_event_pb.js'

export type HubEventType = 'mergeMessage' | 'pruneMessage' | 'revokeMessage'

export type HubEvent = {
  id: bigint
} & (
  | {
      type: Exclude<HubEventType, 'mergeMessage'>
      message: Message.Message | undefined
    }
  | {
      type: Extract<HubEventType, 'mergeMessage'>
      message: Message.Message | undefined
      deletedMesssages: Message.Message[]
    }
)

export function fromProtobuf(
  hubEvent: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  if (
    hubEvent.type === HubEventProtobuf.HubEventType.MERGE_MESSAGE &&
    hubEvent.body.case === 'mergeMessageBody'
  ) {
    return {
      type: 'mergeMessage',
      id: hubEvent.id,
      message: hubEvent.body.value.message
        ? Message.fromProtobuf(hubEvent.body.value.message)
        : undefined,
      deletedMesssages: hubEvent.body.value.deletedMessages.map(
        Message.fromProtobuf,
      ),
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
        ? Message.fromProtobuf(hubEvent.body.value.message)
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
        ? Message.fromProtobuf(hubEvent.body.value.message)
        : undefined,
    }
  }
  throw new Error('Not implemented')
}

export declare namespace fromProtobuf {
  type ParametersType = HubEventProtobuf.HubEvent
  type ReturnType = HubEvent
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType
