# Casts.getByFid

Get all [`Cast.Cast`](/api/Cast/types#cast)s by `fid` of the creator.

:::note

Involves pagination.

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
const { casts, nextPageToken } = await Casts.getByFid(client, { fid: 11517n })

casts
// ^?



```

## Definition

```ts
function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType>
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

- **Type:** `getByFid.ParametersType`

`fid` of the creator, and [`Pagination.Pagination`](/api/Pagination/types#pagination).

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

#### parameters.startTimestamp

- **Type:** `bigint`
- **Optional**

#### parameters.stopTimestamp

- **Type:** `bigint`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`Cast.Cast`](/api/Cast/types#cast)s with the `nextPageToken`.

`Promise<getByFid.ReturnType>`

## Error Type

`Casts.getByFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)