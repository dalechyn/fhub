# Link.fromMessageProtobuf

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
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/Link.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Link.ts#L102)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`Link.fromMessageProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/core/links/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/core/links/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/core/links/Meta/errors#metainvalidsignatureschemetypeerror)