# Links.getAllLinkMessagesByFid

Get all [`Link.Link`](/api/Link/types#link) messages data originated from `sourceFid`.

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
const { links, nextPageToken } = await Links.getAllLinkMessagesByFid(client, { sourceFid: 11517n })

links
//  ^?



```

## Definition

```ts
function getAllLinkMessagesByFid(
  client: Client.Client,
  parameters: getAllLinkMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllLinkMessagesByFid.ReturnType>
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

- **Type:** `getAllLinkMessagesByFid.ParametersType`

`sourceFid` of the person who created the link, it's `targetFid` and `type`.

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

[`Link.Link`](/api/Link/types#link)s with the `nextPageToken`

`Promise<getAllLinkMessagesByFid.ReturnType>`