# Cast.toString

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
function toString(
  client: Client.Client,
  cast: toString.ParametersType,
): Promise<toString.ReturnType>
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

### cast

- **Type:** `toString.ParametersType`



## Return Type

`Promise<toString.ReturnType>`