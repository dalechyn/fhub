# Casts.toString

Formats a [`Cast.Cast`](/api/Cast/types#cast) into a string.

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
const cast = await Casts.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })

const formatted = await Casts.toString(client, cast)

formatted
//      ^?



```

## Definition

```ts
function toString(
  client: Client.Client,
  cast: toString.ParametersType,
): Promise<toString.ReturnType>
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

### cast

- **Type:** `toString.ParametersType`

[`Cast.Cast`](/api/Cast/types#cast) to format.



## Return Type

The formatted Cast text.

`Promise<toString.ReturnType>`