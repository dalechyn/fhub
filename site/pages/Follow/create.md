# Follow.create

## Imports

:::code-group
```ts [Named]
import { Follow } from 'fhub/fhub/Actions.ts'
```
```ts [Entrypoint]
import * as Follow from 'fhub/fhub/Actions.ts/Follow'
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