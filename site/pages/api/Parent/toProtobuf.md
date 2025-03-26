# Parent.toProtobuf

## Imports

:::code-group
```ts [Named]
import { Parent } from 'fhub/core'
```
```ts [Entrypoint]
import * as Parent from 'fhub/core/Parent'
```
:::

## Definition

```ts
function toProtobuf(
  parent: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/Parent.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Parent.ts#L80)

## Parameters

### parent

- **Type:** `toProtobuf.ParametersType`

#### parent.fid

- **Type:** `bigint`

#### parent.hash

- **Type:** `Hex.Hex`

#### parent.type

- **Type:** `"url"`

#### parent.url

- **Type:** `string`

## Return Type

`toProtobuf.ReturnType`

## Error Type

`Parent.toProtobuf.ErrorType`

- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)