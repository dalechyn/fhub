# LinkRemove.toHex

## Imports

:::code-group
```ts [Named]
import { LinkRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as LinkRemove from 'fhub/core/LinkRemove'
```
:::

## Definition

```ts
function toHex(
  link: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/LinkRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkRemove.ts#L80)

## Parameters

### link

- **Type:** `toHex.ParametersType`

#### link.displayTimestamp

- **Type:** `number`
- **Optional**

#### link.fid

- **Type:** `bigint`

#### link.meta

- **Type:** `Meta`

#### link.targetFid

- **Type:** `bigint`

#### link.timestamp

- **Type:** `number`

#### link.type

- **Type:** `string`

## Return Type

`toHex.ReturnType`