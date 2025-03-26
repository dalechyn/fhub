# Watch.watchCastsMentioningFid

Creates an `AsyncGenerator` subscription over all merged [`Cast.Cast`](/api/Cast/types#cast)s, mentioning a specific `fid`.

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
for await (const message of Watch.watchCastsMentioningFid(client, { fid: 11517n })) {
  message
  //    ^?
}



```

## Definition

```ts
function watchCastsMentioningFid(
  client: Client.Client,
  parameters: watchCastsMentioningFid.ParametersType,
  options?: CallOptions,
): watchCastsMentioningFid.ReturnType
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

- **Type:** `watchCastsMentioningFid.ParametersType`

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`AsyncGenerator<Cast.Cast>`.

`watchCastsMentioningFid.ReturnType`

## Error Type

`Watch.watchCastsMentioningFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/watch/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/watch/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/watch/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/watch/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/watch/Parent/errors#parentinvalidparenttypeerror)