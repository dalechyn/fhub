import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { HubEvent_fromMessage } from '../../HubEvent/fromMessage.js'
import type { HubEvent } from '../../HubEvent/types.js'

export declare namespace Actions_Event_subscribe {
  type ParametersType = {
    eventTypes: ('mergeMessage' | 'pruneMessage' | 'revokeMessage')[]
    fromId?: bigint | undefined
    totalShards?: bigint | undefined
    shardIndex?: bigint | undefined
  }
  type ReturnType = AsyncGenerator<HubEvent, void, undefined>
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function* Actions_Event_subscribe(
  client: Client,
  parameters: Actions_Event_subscribe.ParametersType,
  options?: CallOptions,
): Actions_Event_subscribe.ReturnType {
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
    yield HubEvent_fromMessage(message)
  }
}

Actions_Event_subscribe.parseError = (error: unknown) =>
  error as Actions_Event_subscribe.ErrorType
