# OnChainEvents.getIdRegistryOnChainEvent

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
function getIdRegistryOnChainEvent(
  client: Client.Client,
  parameters: getIdRegistryOnChainEvent.ParametersType,
  options?: CallOptions,
): Promise<getIdRegistryOnChainEvent.ReturnType>
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

- **Type:** `getIdRegistryOnChainEvent.ParametersType`

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

`Promise<getIdRegistryOnChainEvent.ReturnType>`