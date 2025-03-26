# CastRemove.toMessageDataProtobuf

## Imports

:::code-group
```ts [Named]
import { CastRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as CastRemove from 'fhub/core/CastRemove'
```
:::

## Definition

```ts
function toMessageDataProtobuf(
  castRemoval: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/CastRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastRemove.ts#L118)

## Parameters

### castRemoval

- **Type:** `toMessageDataProtobuf.ParametersType`

#### castRemoval.fid

- **Type:** `bigint`

#### castRemoval.hash

- **Type:** `Hex.Hex`

#### castRemoval.meta

- **Type:** `Meta`

#### castRemoval.timestamp

- **Type:** `number`

## Return Type

`toMessageDataProtobuf.ReturnType`