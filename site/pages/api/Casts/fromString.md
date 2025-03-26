# Casts.fromString

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
function fromString(
  client: Client.Client,
  parameters: fromString.ParametersType,
  options?: CallOptions,
): Promise<fromString.ReturnType>
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