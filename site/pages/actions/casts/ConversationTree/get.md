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

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)