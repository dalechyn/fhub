# Sync.getSyncStatus

## Imports

:::code-group
```ts [Named]
import { Sync } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Sync from 'fhub/actions/Sync'
```
:::

## Definition

```ts
function getSyncStatus(
  client: Client.Client,
  parameters: getSyncStatus.ParametersType,
  options?: CallOptions,
): Promise<getSyncStatus.ReturnType>
```

**Source:** [src/actions/Sync.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Sync.ts#L142)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getSyncStatus.ParametersType`

#### parameters.peerId

- **Type:** `string`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getSyncStatus.ReturnType>`