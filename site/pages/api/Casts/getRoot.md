# Casts.getRoot

## Imports

:::code-group
```ts [Named]
import { Casts } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Casts from 'fhub/actions/Casts'
```
:::

## Definition

```ts
function getRoot(
  client: Client.Client,
  parameters: getRoot.ParametersType,
  options?: CallOptions,
): Promise<getRoot.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L387)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getRoot.ParametersType`



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getRoot.ReturnType>`