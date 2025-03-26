# Casts.fromString

Creates an partial [`Cast.Cast`](/api/Cast/types#cast) from raw string.

## Imports

:::code-group
```ts [Named]
import { Casts } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Casts from 'fhub/actions/Casts'
```
:::

## Examples

```ts twoslash
import { Client, Transport } from 'fhub'
import { Casts } from 'fhub/actions'

const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
const cast = await Casts.fromString(client, {
  text: 'Hey @v, look at this cute kitty!',
  embeds: [{ type: 'url', url: 'https://cool-kitty.jpeg' }],
})

cast
// ^?



```

## Definition

```ts
function fromString(
  client: Client.Client,
  parameters: fromString.ParametersType,
  options?: CallOptions,
): Promise<fromString.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L1244)

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

- **Type:** `fromString.ParametersType`

Text of the cast and optional embeds

#### parameters.embeds

- **Type:** `Embed[]`
- **Optional**

#### parameters.text

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

Partial cast with parsed mentions.

`Promise<fromString.ReturnType>`