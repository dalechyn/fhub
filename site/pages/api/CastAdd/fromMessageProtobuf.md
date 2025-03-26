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

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)