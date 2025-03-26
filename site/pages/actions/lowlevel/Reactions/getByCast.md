# Reactions.getByCast

## Imports

:::code-group
```ts [Named]
import { Reactions } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Reactions from 'fhub/actions/Reactions'
```
:::

## Definition

```ts
function getByCast(
  client: Client.Client,
  parameters: getByCast.ParametersType,
  options?: CallOptions,
): Promise<getByCast.ReturnType>
```

**Source:** [src/actions/Reactions.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Reactions.ts#L161)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getByCast.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.hash

- **Type:** `Hex.Hex`

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `Hex.Hex | undefined`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByCast.ReturnType>`