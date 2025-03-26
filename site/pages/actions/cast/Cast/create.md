# Cast.create

## Imports

:::code-group
```ts [Named]
import { Cast } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Cast from 'fhub/fhub/Actions/Cast'
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

**Source:** [src/fhub/actions/Cast.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Cast.ts#L219)

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

#### parameters.cast

- **Type:** `Omit`

#### parameters.message

- **Type:** `createPreconstruct.ReturnType`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<create.ReturnType>`