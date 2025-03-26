# Reactions.getReaction

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
function getReaction(
  client: Client.Client,
  parameters: getReaction.ParametersType,
  options?: CallOptions,
): Promise<getReaction.ReturnType>
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

- **Type:** `getReaction.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.reactionType

- **Type:** `ReactionType`

#### parameters.target

- **Type:** `ReactionTarget`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getReaction.ReturnType>`