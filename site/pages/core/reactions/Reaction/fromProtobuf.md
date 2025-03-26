# Reaction.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Reaction } from 'fhub/core'
```
```ts [Entrypoint]
import * as Reaction from 'fhub/core/Reaction'
```
:::

## Definition

```ts
function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Reaction.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Reaction.ts#L100)

## Parameters

### parameters

- **Type:** `fromProtobuf.ParametersType`

#### parameters.body

- **Type:** `MessageProtobuf.ReactionBody`

#### parameters.fid

- **Type:** `bigint`

#### parameters.meta

- **Type:** `Meta`

#### parameters.timestamp

- **Type:** `number`

## Return Type

`fromProtobuf.ReturnType`