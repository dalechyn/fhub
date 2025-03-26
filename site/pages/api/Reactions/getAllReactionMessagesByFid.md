# Reactions.getAllReactionMessagesByFid

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
function getAllReactionMessagesByFid(
  client: Client.Client,
  parameters: getAllReactionMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllReactionMessagesByFid.ReturnType>
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

- **Type:** `getAllReactionMessagesByFid.ParametersType`

#### parameters.fid

- **Type:** `bigint`

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

`Promise<getAllReactionMessagesByFid.ReturnType>`