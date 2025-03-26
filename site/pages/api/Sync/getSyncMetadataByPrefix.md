# Sync.getSyncMetadataByPrefix

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
function getSyncMetadataByPrefix(
  client: Client.Client,
  parameters: getSyncMetadataByPrefix.ParametersType,
  options?: CallOptions,
): Promise<getSyncMetadataByPrefix.ReturnType>
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

- **Type:** `getSyncMetadataByPrefix.ParametersType`

#### parameters.prefix

- **Type:** `string`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getSyncMetadataByPrefix.ReturnType>`