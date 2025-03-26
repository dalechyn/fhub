# Casts.getWithReactions

Get a [`Cast.Cast`](/api/Cast/types#cast) by it's `hash` and `fid` of the creator, with unwrapped text and reactions.

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
const cast = await Casts.getWithReactions(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })

cast
// ^?



```

## Definition

```ts
function getWithReactions(
  client: Client.Client,
  parameters: getWithReactions.ParametersType,
  options?: CallOptions,
): Promise<getWithReactions.ReturnType>
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

- **Type:** `getWithReactions.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid).



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Cast with reactions and unwrapped text.

`Promise<getWithReactions.ReturnType>`