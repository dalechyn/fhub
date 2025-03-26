# Casts.getWithReactionsByFid

Get all [`Cast.Cast`](/api/Cast/types#cast)s with reactions and unwrapped text by `fid` of the creator.

:::note

Involves pagination.

:::

:::note

Since getting all reactions involves a loop, heavily rate-limited Hubs can cause issues.

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
const { casts, nextPageToken } = await Casts.getWithReactionsByFid(client, { fid: 11517n })

casts
// ^?



```

## Definition

```ts
function getWithReactionsByFid(
  client: Client.Client,
  parameters: getWithReactionsByFid.ParametersType,
  options?: CallOptions,
): Promise<getWithReactionsByFid.ReturnType>
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

- **Type:** `getWithReactionsByFid.ParametersType`

`fid` of the creator, and [`Pagination.Pagination`](/api/Pagination/types#pagination).



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`Cast.Cast`](/api/Cast/types#cast)s with reactions and unwrapped text, `nextPageToken`.

`Promise<getWithReactionsByFid.ReturnType>`