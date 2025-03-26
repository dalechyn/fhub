# User.follow

Creates [`Link.Link`](/api/Link/types#link) follow creation message and sends it to Hub.

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
const message = await User.follow(client, {
  follow: {
    targetFid: 11517n
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
function follow(
  client: Client.Client,
  parameters: follow.ParametersType,
  options?: CallOptions,
): Promise<follow.ReturnType>
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

- **Type:** `follow.ParametersType`

`targetFid`, and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit`

#### parameters.message

- **Type:** `followPreconstruct.ReturnType`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Submitted Follow creation message.

`Promise<follow.ReturnType>`