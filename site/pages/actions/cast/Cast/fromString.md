# Cast.fromString

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
function fromString(
  client: Client.Client,
  parameters: fromString.ParametersType,
  options?: CallOptions,
): Promise<fromString.ReturnType>
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

- **Type:** `fromString.ParametersType`

#### parameters.embeds

- **Type:** `Embed[]`
- **Optional**

#### parameters.text

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<fromString.ReturnType>`