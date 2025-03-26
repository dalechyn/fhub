# Warpcast.getCastIdFromUrl

Gets a [`CastId.CastId`](/api/CastId/types#castid) from Warpcast Cast URL.

## Imports

:::code-group
```ts [Named]
import { Warpcast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Warpcast from 'fhub/actions/Warpcast'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { Warpcast } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const castId = await Warpcast.getCastIdFromUrl(client, { url: 'https://warpcast.com/dalechyn.eth/0x43706fe7' })

castId
//   ^?



```

## Definition

```ts
function getCastIdFromUrl(
  client: Client.Client,
  parameters: getCastIdFromUrl.ParametersType,
  options?: CallOptions,
): Promise<getCastIdFromUrl.ReturnType>
```

**Source:** [src/actions/Warpcast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Warpcast.ts#L73)

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

- **Type:** `getCastIdFromUrl.ParametersType`

`url` of the cast from Warpcast client website.

#### parameters.url

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`CastId.CastId`](/api/CastId/types#castid).

`Promise<getCastIdFromUrl.ReturnType>`