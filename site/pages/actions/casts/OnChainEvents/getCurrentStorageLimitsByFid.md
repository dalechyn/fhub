# OnChainEvents.getCurrentStorageLimitsByFid

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
function getCurrentStorageLimitsByFid(
  client: Client.Client,
  parameters: getCurrentStorageLimitsByFid.ParametersType,
  options?: CallOptions,
): Promise<getCurrentStorageLimitsByFid.ReturnType>
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

- **Type:** `getCurrentStorageLimitsByFid.ParametersType`

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

`Promise<getCurrentStorageLimitsByFid.ReturnType>`