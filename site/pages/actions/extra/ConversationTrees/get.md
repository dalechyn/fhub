# ConversationTrees.get

Get a [`ConversationTree.ConversationTree`](/api/ConversationTree/types#conversationtree) by a given root [`CastId.CastId`](/api/CastId/types#castid).

:::note

You will most likely be rate-limited unless you're using a paid Hub RPC.

:::

## Imports

:::code-group
```ts [Named]
import { ConversationTrees } from 'fhub/actions'
```
```ts [Entrypoint]
import * as ConversationTrees from 'fhub/actions/ConversationTrees'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { ConversationTrees } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const tree = await ConversationTrees.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })

tree
// ^?



```

## Definition

```ts
function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType>
```

**Source:** [src/actions/ConversationTrees.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/ConversationTrees.ts#L194)

## Parameters

### client

- **Type:** `Client.Client`

Fhub Client.

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `get.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid).



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`ConversationTree.ConversationTree`](/api/ConversationTree/types#conversationtree)

`Promise<get.ReturnType>`

## Error Type

`ConversationTrees.get.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/extra/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/extra/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/extra/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/extra/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/extra/Parent/errors#parentinvalidparenttypeerror)