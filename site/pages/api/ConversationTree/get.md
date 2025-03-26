# ConversationTree.get

## Imports

:::code-group
```ts [Named]
import { ConversationTree } from 'fhub/actions'
```
```ts [Entrypoint]
import * as ConversationTree from 'fhub/actions/ConversationTree'
```
:::

## Definition

```ts
function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType>
```

**Source:** [src/actions/ConversationTree.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/ConversationTree.ts#L131)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `get.ParametersType`



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<get.ReturnType>`

## Error Type

`ConversationTree.get.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)