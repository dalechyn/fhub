# Sync.getInfo

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
function getInfo(
  client: Client.Client,
  parameters: getInfo.ParametersType,
  options?: CallOptions,
): Promise<getInfo.ReturnType>
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

- **Type:** `getInfo.ParametersType`

#### parameters.dbStats

- **Type:** `boolean`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getInfo.ReturnType>`