# Meta.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Meta } from 'fhub/core'
```
```ts [Entrypoint]
import * as Meta from 'fhub/core/Meta'
```
:::

## Definition

```ts
function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Meta.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Meta.ts#L167)

## Parameters

### message

- **Type:** `fromProtobuf.ParametersType`



## Return Type

`fromProtobuf.ReturnType`

## Error Type

`Meta.fromProtobuf.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/core/message/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/core/message/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/core/message/Meta/errors#metainvalidsignatureschemetypeerror)