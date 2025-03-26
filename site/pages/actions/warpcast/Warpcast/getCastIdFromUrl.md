# Warpcast.getCastIdFromUrl

## Imports

:::code-group
```ts [Named]
import { Warpcast } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Warpcast from 'fhub/fhub/Actions/Warpcast'
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

**Source:** [src/fhub/actions/Warpcast.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Warpcast.ts#L50)

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