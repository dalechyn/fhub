# LinkRemove.toMessageDataProtobuf

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
function toMessageDataProtobuf(
  link: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/LinkRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkRemove.ts#L80)

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