# LinkCompactState.toMessageDataProtobuf

## Imports

:::code-group
```ts [Named]
import { LinkCompactState } from 'fhub/core'
```
```ts [Entrypoint]
import * as LinkCompactState from 'fhub/core/LinkCompactState'
```
:::

## Definition

```ts
function toMessageDataProtobuf(
  link: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/LinkCompactState.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkCompactState.ts#L116)

## Parameters

### link

- **Type:** `toMessageDataProtobuf.ParametersType`

#### link.fid

- **Type:** `bigint`

#### link.fids

- **Type:** `bigint[]`

#### link.meta

- **Type:** `Meta`

#### link.timestamp

- **Type:** `number`

#### link.type

- **Type:** `string`

## Return Type

`toMessageDataProtobuf.ReturnType`