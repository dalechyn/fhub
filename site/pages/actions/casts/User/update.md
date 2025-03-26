# User.update

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
function update(
  client: Client.Client,
  parameters: update.ParametersType,
  options?: CallOptions,
): Promise<update.ReturnType>
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

- **Type:** `update.ParametersType`

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

`Promise<update.ReturnType>`