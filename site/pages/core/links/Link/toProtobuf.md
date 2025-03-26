# Link.toProtobuf

## Imports

:::code-group
```ts [Named]
import { Link } from 'fhub/core'
```
```ts [Entrypoint]
import * as Link from 'fhub/core/Link'
```
:::

## Definition

```ts
function toProtobuf(
  link: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/Link.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Link.ts#L102)

## Parameters

### link

- **Type:** `toProtobuf.ParametersType`

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

`toProtobuf.ReturnType`