# Links.get

Get the [`Link.Link`](/api/Link/types#link) data between `sourceFid` and `targetFid` by it's `type`.

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
const link = await Links.get(client, { sourceFid: 11517n, targetFid: 1n, type: 'follow' })

link
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

- **Type:** `get.ParametersType`

`sourceFid` of the person who created the link, it's `targetFid` and `type`.

#### parameters.sourceFid

- **Type:** `bigint`

#### parameters.targetFid

- **Type:** `bigint`

#### parameters.type

- **Type:** `"follow"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`Link.Link`](/api/Link/types#link)

`Promise<get.ReturnType>`

## Error Type

`Links.get.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/actions/links/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/links/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/links/Meta/errors#metainvalidsignatureschemetypeerror)