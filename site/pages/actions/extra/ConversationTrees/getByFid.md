# ConversationTrees.getByFid

Get a [`ConversationTree.ConversationTree`](/api/ConversationTree/types#conversationtree) by a given creator `fid`.

:::note

Involves pagination.

:::

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
const { conversationsTrees, nextPageToken } = await ConversationTrees.getByFid(client, { fid: 11517n })

conversationsTrees
//               ^?



```

## Definition

```ts
function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType>
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

- **Type:** `getByFid.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid).

#### parameters.excludedRoots

- **Type:** `Set`
- **Optional**

#### parameters.fid

- **Type:** `bigint`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

[`ConversationTree.ConversationTree`](/api/ConversationTree/types#conversationtree)

`Promise<getByFid.ReturnType>`

## Error Type

`ConversationTrees.getByFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/extra/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/extra/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/extra/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/extra/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/extra/Parent/errors#parentinvalidparenttypeerror)