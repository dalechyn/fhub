# Watch.watchCastsCompliantToRegexp

Creates an `AsyncGenerator` subscription over all merged [`Cast.Cast`](/api/Cast/types#cast)s, compliant to a specific `RegExp`.

:::note

Each cast will be unwrapped asynchronously which can cause issues with rate-limited Hubs.

:::

## Imports

:::code-group
```ts [Named]
import { Watch } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Watch from 'fhub/actions/Watch'
```
:::

## Examples

```ts twoslash
import { Account, Client, Transport } from 'fhub'
import { Watch } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
for await (const message of Watch.watchCastsCompliantToRegexp(client, { regexp: /hello/g })) {
  message
  //    ^?
}



```

## Definition

```ts
function watchCastsCompliantToRegexp(
  client: Client.Client,
  parameters: watchCastsCompliantToRegexp.ParametersType,
  options?: CallOptions,
): watchCastsCompliantToRegexp.ReturnType
```

**Source:** [src/actions/Watch.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Watch.ts#L183)

## Parameters

### client

- **Type:** `Client.Client`

Fhub Client.

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

`AsyncGenerator<Cast.Cast>`.

`watchCastsCompliantToRegexp.ReturnType`

## Error Type

`Watch.watchCastsCompliantToRegexp.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/watch/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/watch/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/watch/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/watch/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/watch/Parent/errors#parentinvalidparenttypeerror)