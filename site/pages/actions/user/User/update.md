# User.update

Creates [`UserData.UserData`](/api/UserData/types#userdata) update message and sends it to Hub.

:::note

Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.

:::

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
import { Account, Client, Transport } from 'fhub'
import { User } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const message = await User.update(client, {
  data: {
    type: 'bio',
    value: 'believe in somETHing'
  },
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
function update(
  client: Client.Client,
  parameters: update.ParametersType,
  options?: CallOptions,
): Promise<update.ReturnType>
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

- **Type:** `update.ParametersType`

`type` of data to update with `value`, and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.data

- **Type:** `Omit`

#### parameters.message

- **Type:** `updatePreconstruct.ReturnType`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Submited User data update message.

`Promise<update.ReturnType>`