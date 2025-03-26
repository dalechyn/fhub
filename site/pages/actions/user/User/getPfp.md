# User.getPfp

Get pfp url of a user by `fid`.

## Imports

:::code-group
```ts [Named]
import { User } from 'fhub/actions'
```
```ts [Entrypoint]
import * as User from 'fhub/actions/User'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { User } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const pfpUrl = await User.getPfp(client, { fid: 11517n })

pfpUrl
//   ^?



```

## Definition

```ts
function getPfp(
  client: Client.Client,
  parameters: getPfp.ParametersType,
  options?: CallOptions,
): Promise<getPfp.ReturnType>
```

**Source:** [src/actions/User.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/User.ts#L839)

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

- **Type:** `getPfp.ParametersType`

`fid`.

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

string

`Promise<getPfp.ReturnType>`