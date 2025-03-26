# Sync.getSyncSnapshotByPrefix

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
function getSyncSnapshotByPrefix(
  client: Client.Client,
  parameters: getSyncSnapshotByPrefix.ParametersType,
  options?: CallOptions,
): Promise<getSyncSnapshotByPrefix.ReturnType>
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

- **Type:** `getSyncSnapshotByPrefix.ParametersType`

#### parameters.prefix

- **Type:** `string`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getSyncSnapshotByPrefix.ReturnType>`