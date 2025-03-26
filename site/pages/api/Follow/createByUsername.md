# Follow.createByUsername

## Imports

:::code-group
```ts [Named]
import { Follow } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Follow from 'fhub/actions/Follow'
```
:::

## Definition

```ts
function createByUsername(
  client: Client.Client,
  parameters: createByUsername.ParametersType,
  options?: CallOptions,
): Promise<createByUsername.ReturnType>
```

**Source:** [src/actions/Follow.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Follow.ts#L102)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `createByUsername.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit & { username: string; }`

#### parameters.username

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<createByUsername.ReturnType>`