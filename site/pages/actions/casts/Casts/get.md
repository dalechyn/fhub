# Casts.get

Get a [`Cast.Cast`](/api/Cast/types#cast) by it's `hash` and `fid` of the creator.

## Imports

:::code-group
```ts [Named]
import { Casts } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Casts from 'fhub/actions/Casts'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { Casts } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const cast = await Casts.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })

cast
// ^?



```

## Definition

```ts
function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L1244)

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

- **Type:** `get.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid).



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Cast.

`Promise<get.ReturnType>`

## Error Type

`Casts.get.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)