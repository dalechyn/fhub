# Submit.submitMessage

## Imports

:::code-group
```ts [Named]
import { Submit } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Submit from 'fhub/actions/Submit'
```
:::

## Definition

```ts
function submitMessage(
  client: Client.Client,
  parameters: submitMessage.ParametersType,
  options?: CallOptions,
): Promise<submitMessage.ReturnType>
```

**Source:** [src/actions/Submit.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Submit.ts#L58)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `submitMessage.ParametersType`



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<submitMessage.ReturnType>`