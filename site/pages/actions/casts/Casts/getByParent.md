# Casts.getByParent

Get all [`Cast.Cast`](/api/Cast/types#cast)s that are childs of another [`Cast.Cast`](/api/Cast/types#cast).

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
const { casts, nextPageToken } = await Casts.getByParent(client, {
  parent: {
    type: 'cast',
    fid: 11517n,
    hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24',
  },
})

casts
//  ^?



```

## Definition

```ts
function getByParent(
  client: Client.Client,
  parameters: getByParent.ParametersType,
  options?: CallOptions,
): Promise<getByParent.ReturnType>
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

- **Type:** `getByParent.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid), and optional [`Pagination.Pagination`](/api/Pagination/types#pagination).

#### parameters.parent

- **Type:** `Parent`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`Cast.Cast`](/api/Cast/types#cast)s with the `nextPageToken`.

`Promise<getByParent.ReturnType>`

## Error Type

`Casts.getByParent.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)