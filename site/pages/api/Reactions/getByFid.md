# Reactions.getByFid

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
function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType>
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

- **Type:** `getByFid.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.type

- **Type:** `ReactionType`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByFid.ReturnType>`