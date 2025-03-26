# Like.create

## Imports

:::code-group
```ts [Named]
import { Like } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Like from 'fhub/fhub/Actions/Like'
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

**Source:** [src/fhub/actions/Like.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Like.ts#L75)

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

#### parameters.like

- **Type:** `Omit`

#### parameters.message

- **Type:** `createPreconstruct.ReturnType`

#### parameters.type

- **Type:** `"cast"`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<create.ReturnType>`