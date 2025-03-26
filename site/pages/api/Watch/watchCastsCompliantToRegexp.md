# Watch.watchCastsCompliantToRegexp

## Imports

:::code-group
```ts [Named]
import { Watch } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Watch from 'fhub/actions/Watch'
```
:::

## Definition

```ts
function watchCastsCompliantToRegexp(
  client: Client.Client,
  parameters: watchCastsCompliantToRegexp.ParametersType,
  options?: CallOptions,
): watchCastsCompliantToRegexp.ReturnType
```

**Source:** [src/actions/Watch.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Watch.ts#L93)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `watchCastsCompliantToRegexp.ParametersType`

#### parameters.regexp

- **Type:** `RegExp`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`watchCastsCompliantToRegexp.ReturnType`

## Error Type

`Watch.watchCastsCompliantToRegexp.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)