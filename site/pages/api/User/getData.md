# User.getData

## Imports

:::code-group
```ts [Named]
import { User } from 'fhub/actions'
```
```ts [Entrypoint]
import * as User from 'fhub/actions/User'
```
:::

## Definition

```ts
function getData(
  client: Client.Client,
  parameters: getData.ParametersType,
  options?: CallOptions,
): Promise<getData.ReturnType>
```

**Source:** [src/actions/User.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/User.ts#L332)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getData.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.userDataType

- **Type:** `UserDataType`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getData.ReturnType>`