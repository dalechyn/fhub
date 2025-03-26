# User.getData

Get a [`UserData.UserData`](/api/UserData/types#userdata) by `fid` and `type`.

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
const data = await User.getData(client, { fid: 11517n, type: 'bio' })

data
// ^?



```

## Definition

```ts
function getData(
  client: Client.Client,
  parameters: getData.ParametersType,
  options?: CallOptions,
): Promise<getData.ReturnType>
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

- **Type:** `getData.ParametersType`

`fid` and `type`.

#### parameters.fid

- **Type:** `bigint`

#### parameters.type

- **Type:** `"url" | "none" | "pfp" | "display" | "bio" | "username" | "location"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`UserData.UserData`](/api/UserData/types#userdata).

`Promise<getData.ReturnType>`