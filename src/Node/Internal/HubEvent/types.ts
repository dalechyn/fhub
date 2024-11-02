import type { Message } from '../Message/types.js'

export type HubEventType = 'mergeMessage' | 'pruneMessage' | 'revokeMessage'

export type HubEvent = {
  id: bigint
} & (
  | {
      type: Exclude<HubEventType, 'mergeMessage'>
      message: Message | undefined
    }
  | {
      type: Extract<HubEventType, 'mergeMessage'>
      message: Message | undefined
      deletedMesssages: Message[]
    }
)
