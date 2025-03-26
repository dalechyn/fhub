# Links.getCompactStateMessageByFid

Get all [`LinkCompactState.LinkCompactState`](/api/LinkCompactState/types#linkcompactstate)s data originated from `fid`.

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
const { links, nextPageToken } = await Links.getCompactStateMessageByFid(client, { fid: 11517n })

links
//  ^?



```

## Definition

```ts
function getCompactStateMessageByFid(
  client: Client.Client,
  parameters: getCompactStateMessageByFid.ParametersType,
  options?: CallOptions,
): Promise<getCompactStateMessageByFid.ReturnType>
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

- **Type:** `getCompactStateMessageByFid.ParametersType`

`targetFid` of the person with whom links were created

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

[`LinkCompactState.LinkCompactState`](/api/LinkCompactState/types#linkcompactstate)s with the `nextPageToken`

`Promise<getCompactStateMessageByFid.ReturnType>`