# UserData.fromMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { UserData } from 'fhub/core'
```
```ts [Entrypoint]
import * as UserData from 'fhub/core/UserData'
```
:::

## Definition

```ts
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/UserData.ts](https://github.com/dalechyn/fhub/blob/main/src/core/UserData.ts#L215)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`UserData.fromMessageProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)