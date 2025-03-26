# Casts.like

Creates a like [`Reaction.Reaction`](/api/Reaction/types#reaction) and sends it to Hub.

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
import { Account, Client, Transport } from 'fhub'
import { Casts } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const message = await Casts.like(client, {
  cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
  account: Account.fromPrivateKeyAndFid({
    fid: 11517n,
    privateKey:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  }),
})

message
//    ^?



```

## Definition

```ts
function like(
  client: Client.Client,
  parameters: like.ParametersType,
  options?: CallOptions,
): Promise<like.ReturnType>
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

- **Type:** `like.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid), and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

#### parameters.message

- **Type:** `likePreconstruct.ReturnType`

#### parameters.type

- **Type:** `"cast"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Submitted Like creation message

`Promise<like.ReturnType>`