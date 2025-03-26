# Warpcast.getCastIdFromUrl

## Imports

:::code-group
```ts [Named]
import { Warpcast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Warpcast from 'fhub/actions/Warpcast'
```
:::

## Definition

```ts
function getCastIdFromUrl(
  client: Client.Client,
  parameters: getCastIdFromUrl.ParametersType,
  options?: CallOptions,
): Promise<getCastIdFromUrl.ReturnType>
```

**Source:** [src/actions/Warpcast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Warpcast.ts#L51)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getCastIdFromUrl.ParametersType`

#### parameters.url

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getCastIdFromUrl.ReturnType>`