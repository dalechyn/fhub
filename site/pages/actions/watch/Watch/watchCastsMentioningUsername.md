# Watch.watchCastsMentioningUsername

Creates an `AsyncGenerator` subscription over all merged [`Cast.Cast`](/api/Cast/types#cast)s, mentioning a specific `username`.

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
for await (const message of Watch.watchCastsMentioningUsername(client, { username: 'dalechyn.eth' })) {
  message
  //    ^?
}



```

## Definition

```ts
function watchCastsMentioningUsername(
  client: Client.Client,
  parameters: watchCastsMentioningUsername.ParametersType,
  options?: CallOptions,
): watchCastsMentioningUsername.ReturnType
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

- **Type:** `watchCastsMentioningUsername.ParametersType`

#### parameters.username

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`AsyncGenerator<Cast.Cast>`.

`watchCastsMentioningUsername.ReturnType`

## Error Type

`Watch.watchCastsMentioningUsername.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/watch/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/watch/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/watch/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/watch/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/watch/Parent/errors#parentinvalidparenttypeerror)