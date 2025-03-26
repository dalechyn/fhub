# Cast.getRoot

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
function getRoot(
  client: Client.Client,
  parameters: getRoot.ParametersType,
  options?: CallOptions,
): Promise<getRoot.ReturnType>
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

- **Type:** `getRoot.ParametersType`



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getRoot.ReturnType>`