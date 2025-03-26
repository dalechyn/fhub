# Reaction.toProtobuf

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
function toProtobuf(
  reaction: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/Reaction.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Reaction.ts#L100)

## Parameters

### reaction

- **Type:** `toProtobuf.ParametersType`

#### reaction.fid

- **Type:** `bigint`

#### reaction.meta

- **Type:** `Meta`

#### reaction.target

- **Type:** `ReactionTarget`

#### reaction.timestamp

- **Type:** `number`

#### reaction.type

- **Type:** `ReactionType`

## Return Type

`toProtobuf.ReturnType`