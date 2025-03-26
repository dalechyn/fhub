# CastAdd.fromMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { CastAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as CastAdd from 'fhub/core/CastAdd'
```
:::

## Definition

```ts
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/CastAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastAdd.ts#L122)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`CastAdd.fromMessageProtobuf.ErrorType`

- [`CastAdd.InvalidMessageTypeError`](/core/casts/CastAdd/errors#castaddinvalidmessagetypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/core/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/core/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/core/casts/Meta/errors#metainvalidsignatureschemetypeerror)