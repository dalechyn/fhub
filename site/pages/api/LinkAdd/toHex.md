# LinkAdd.toHex

## Imports

:::code-group
```ts [Named]
import { LinkAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as LinkAdd from 'fhub/core/LinkAdd'
```
:::

## Definition

```ts
function toHex(
  link: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/LinkAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkAdd.ts#L80)

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