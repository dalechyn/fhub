# Watch.watchCasts

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
function watchCasts(
  client: Client.Client,
  options?: CallOptions,
): watchCasts.ReturnType
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

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`watchCasts.ReturnType`

## Error Type

`Watch.watchCasts.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)