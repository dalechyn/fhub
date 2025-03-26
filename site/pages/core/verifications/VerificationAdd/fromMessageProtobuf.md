# VerificationAdd.fromMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { VerificationAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as VerificationAdd from 'fhub/core/VerificationAdd'
```
:::

## Definition

```ts
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/VerificationAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationAdd.ts#L124)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`VerificationAdd.fromMessageProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/core/verifications/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/core/verifications/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/core/verifications/Meta/errors#metainvalidsignatureschemetypeerror)