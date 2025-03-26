# Follow.create

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
function create(
  client: Client.Client,
  parameters: create.ParametersType,
  options?: CallOptions,
): Promise<create.ReturnType>
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

- **Type:** `create.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit`

#### parameters.message

- **Type:** `createPreconstruct.ReturnType`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<create.ReturnType>`