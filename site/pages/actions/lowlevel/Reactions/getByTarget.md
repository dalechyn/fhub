# Reactions.getByTarget

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
function getByTarget(
  client: Client.Client,
  parameters: ReactionTarget.ReactionTarget & Pagination.Pagination,
  options?: CallOptions,
): Promise<getByTarget.ReturnType>
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

- **Type:** `ReactionTarget.ReactionTarget & Pagination.Pagination`

#### parameters.fid

- **Type:** `bigint`

#### parameters.hash

- **Type:** `Hex.Hex`

#### parameters.type

- **Type:** `"url"`

#### parameters.url

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByTarget.ReturnType>`