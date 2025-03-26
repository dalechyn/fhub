# Links.getByFid

Get all [`Link.Link`](/api/Link/types#link)s data originated from `sourceFid`.

:::note

Involves pagination.

:::

## Imports

:::code-group
```ts [Named]
import { Links } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Links from 'fhub/actions/Links'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { Links } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const { links, nextPageToken } = await Links.getByFid(client, { sourceFid: 11517n, type: 'follow' })

links
//  ^?



```

## Definition

```ts
function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType>
```

**Source:** [src/actions/Links.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Links.ts#L295)

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

`sourceFid` of the person who created links

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `Hex.Hex | undefined`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

#### parameters.sourceFid

- **Type:** `bigint`

#### parameters.type

- **Type:** `"follow"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`Link.Link`](/api/Link/types#link)s with the `nextPageToken`

`Promise<getByFid.ReturnType>`