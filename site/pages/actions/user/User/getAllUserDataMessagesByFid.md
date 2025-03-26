# User.getAllUserDataMessagesByFid

Gets all [`UserData.UserData`](/api/UserData/types#userdata) messages by `fid`.

:::note

Involves pagination.

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
import { Client, Transport } from 'fhub'
import { User } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const { datas, nextPageToken } = await User.getAllUserDataMessagesByFid(client, { fid: 11517n })

datas
//  ^?



```

## Definition

```ts
function getAllUserDataMessagesByFid(
  client: Client.Client,
  parameters: getAllUserDataMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllUserDataMessagesByFid.ReturnType>
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

- **Type:** `getAllUserDataMessagesByFid.ParametersType`

`fid`.

#### parameters.fid

- **Type:** `bigint`

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `Hex.Hex | undefined`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`UserData.UserData`](/api/UserData/types#userdata)s with `nextPageToken`.

`Promise<getAllUserDataMessagesByFid.ReturnType>`

## Error Type

`User.getAllUserDataMessagesByFid.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/actions/user/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/user/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/user/Meta/errors#metainvalidsignatureschemetypeerror)