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

- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)