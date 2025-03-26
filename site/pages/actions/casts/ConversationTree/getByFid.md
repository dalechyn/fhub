# ConversationTree.getByFid

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
function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType>
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

- **Type:** `getByFid.ParametersType`

#### parameters.excludedRoots

- **Type:** `Set`

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByFid.ReturnType>`

## Error Type

`ConversationTree.getByFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)