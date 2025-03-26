# ReactionRemove.toMessageDataProtobuf

## Imports

:::code-group
```ts [Named]
import { ReactionRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as ReactionRemove from 'fhub/core/ReactionRemove'
```
:::

## Definition

```ts
function toMessageDataProtobuf(
  cast: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/ReactionRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/ReactionRemove.ts#L82)

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