# ReactionAdd.toMessageDataProtobuf

## Imports

:::code-group
```ts [Named]
import { ReactionAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as ReactionAdd from 'fhub/core/ReactionAdd'
```
:::

## Definition

```ts
function toMessageDataProtobuf(
  cast: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/ReactionAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/ReactionAdd.ts#L82)

## Parameters

### cast

- **Type:** `toMessageDataProtobuf.ParametersType`

#### cast.fid

- **Type:** `bigint`

#### cast.meta

- **Type:** `Meta`

#### cast.target

- **Type:** `ReactionTarget`

#### cast.timestamp

- **Type:** `number`

#### cast.type

- **Type:** `ReactionType`

## Return Type

`toMessageDataProtobuf.ReturnType`