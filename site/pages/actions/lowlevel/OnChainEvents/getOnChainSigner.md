# OnChainEvents.getOnChainSigner

## Imports

:::code-group
```ts [Named]
import { OnChainEvents } from 'fhub/actions'
```
```ts [Entrypoint]
import * as OnChainEvents from 'fhub/actions/OnChainEvents'
```
:::

## Definition

```ts
function getOnChainSigner(
  client: Client.Client,
  parameters: getOnChainSigner.ParametersType,
  options?: CallOptions,
): Promise<getOnChainSigner.ReturnType>
```

**Source:** [src/actions/OnChainEvents.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/OnChainEvents.ts#L173)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `getOnChainSigner.ParametersType`

#### parameters.fid

- **Type:** `string`
- **Optional**

#### parameters.signer

- **Type:** `string`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getOnChainSigner.ReturnType>`