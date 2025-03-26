# Reaction.fromMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { Reaction } from 'fhub/core'
```
```ts [Entrypoint]
import * as Reaction from 'fhub/core/Reaction'
```
:::

## Definition

```ts
function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType
```

**Source:** [src/core/Reaction.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Reaction.ts#L100)

## Parameters

### message

- **Type:** `fromMessageProtobuf.ParametersType`



## Return Type

`fromMessageProtobuf.ReturnType`

## Error Type

`Reaction.fromMessageProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)