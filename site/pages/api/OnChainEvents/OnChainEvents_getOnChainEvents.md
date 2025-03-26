# OnChainEvents.OnChainEvents_getOnChainEvents

## Imports

:::code-group
```ts [Named]
import { OnChainEvents } from 'fhub/actions'
```
```ts [Entrypoint]
import * as OnChainEvents from 'fhub/actions/OnChainEvents'
```
:::

## Definition

```ts
function OnChainEvents_getOnChainEvents(
  client: Client.Client,
  parameters: OnChainEvents.getOnChainEvents.ParametersType,
  options?: CallOptions,
): Promise<OnChainEvents.getOnChainEvents.ReturnType>
```

**Source:** [src/actions/OnChainEvents.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/OnChainEvents.ts#L173)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `OnChainEvents.getOnChainEvents.ParametersType`

#### parameters.eventType

- **Type:** `OnChainEventTypeJson`
- **Optional**

#### parameters.fid

- **Type:** `string`
- **Optional**

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `string`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<OnChainEvents.getOnChainEvents.ReturnType>`