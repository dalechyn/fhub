# Recast.create

## Imports

:::code-group
```ts [Named]
import { Recast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Recast from 'fhub/actions/Recast'
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

**Source:** [src/actions/Recast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Recast.ts#L78)

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

#### parameters.message

- **Type:** `createPreconstruct.ReturnType`

#### parameters.recast

- **Type:** `Omit`

#### parameters.type

- **Type:** `"cast"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<create.ReturnType>`