# Casts.getAllCastMessagesByFid

Get all [`Cast.Cast`](/api/Cast/types#cast) creation and removal messages by `fid` of the creator.

:::note

Involves pagination.

:::

:::note

Removed cast messages are being automatically pruned on the Hub level, which might explain why you can't find any.

:::

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
const { messages, nextPageToken } = await Casts.getAllCastMessagesByFid(client, { fid: 11517n })

messages
//    ^?



```

## Definition

```ts
function getAllCastMessagesByFid(
  client: Client.Client,
  parameters: getAllCastMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllCastMessagesByFid.ReturnType>
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

- **Type:** `getAllCastMessagesByFid.ParametersType`

`fid` of the creator, and optional [`Pagination.Pagination`](/api/Pagination/types#pagination).

#### parameters.fid

- **Type:** `bigint`

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `Hex.Hex | undefined`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Messages with the `nextPageToken`.

`Promise<getAllCastMessagesByFid.ReturnType>`

## Error Type

`Casts.getAllCastMessagesByFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)