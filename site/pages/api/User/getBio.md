# User.getBio

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
function getBio(
  client: Client.Client,
  parameters: getBio.ParametersType,
  options?: CallOptions,
): Promise<getBio.ReturnType>
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

- **Type:** `getBio.ParametersType`

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getBio.ReturnType>`