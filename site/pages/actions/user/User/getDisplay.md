# User.getDisplay

Get a display name of a user by `fid`.

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
const display = await User.getDisplay(client, { fid: 11517n })

display
//    ^?



```

## Definition

```ts
function getDisplay(
  client: Client.Client,
  parameters: getDisplay.ParametersType,
  options?: CallOptions,
): Promise<getDisplay.ReturnType>
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

- **Type:** `getDisplay.ParametersType`

`fid`.

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

string

`Promise<getDisplay.ReturnType>`