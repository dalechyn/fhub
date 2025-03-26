# Submit.submitBulkMessages

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
function submitBulkMessages(
  client: Client.Client,
  parameters: submitBulkMessages.ParametersType,
  options?: CallOptions,
): Promise<submitBulkMessages.ReturnType>
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

- **Type:** `submitBulkMessages.ParametersType`

#### parameters.messages

- **Type:** `MessageJson[]`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<submitBulkMessages.ReturnType>`