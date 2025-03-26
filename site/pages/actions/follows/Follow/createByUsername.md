# Follow.createByUsername

## Imports

:::code-group
```ts [Named]
import { Follow } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Follow from 'fhub/fhub/Actions/Follow'
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

**Source:** [src/fhub/actions/Follow.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Follow.ts#L98)

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