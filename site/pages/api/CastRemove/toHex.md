# CastRemove.toHex

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
function toHex(
  cast: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/CastRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastRemove.ts#L118)

## Parameters

### cast

- **Type:** `toHex.ParametersType`

#### cast.fid

- **Type:** `bigint`

#### cast.hash

- **Type:** `Hex.Hex`

#### cast.meta

- **Type:** `Meta`

#### cast.timestamp

- **Type:** `number`

## Return Type

`toHex.ReturnType`