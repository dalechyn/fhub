# LinkAdd.toMessageDataProtobuf

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
function toMessageDataProtobuf(
  link: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/LinkAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkAdd.ts#L80)

## Parameters

### link

- **Type:** `toMessageDataProtobuf.ParametersType`

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

`toMessageDataProtobuf.ReturnType`