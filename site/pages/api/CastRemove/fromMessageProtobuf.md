# CastRemove.fromMessageProtobuf

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
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/CastRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastRemove.ts#L118)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`CastRemove.fromMessageProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)