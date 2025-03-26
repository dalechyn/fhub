# Watch.watchCastsMentioningUsername

## Imports

:::code-group
```ts [Named]
import { Watch } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Watch from 'fhub/actions/Watch'
```
:::

## Definition

```ts
function watchCastsMentioningUsername(
  client: Client.Client,
  parameters: watchCastsMentioningUsername.ParametersType,
  options?: CallOptions,
): watchCastsMentioningUsername.ReturnType
```

**Source:** [src/actions/Watch.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Watch.ts#L93)

## Parameters

### client

- **Type:** `Client.Client`

#### client.connectRpcClient

- **Type:** `Connect.Client`

#### client.transport

- **Type:** `Connect.Transport`

The gRPC transport

### parameters

- **Type:** `watchCastsMentioningUsername.ParametersType`

#### parameters.username

- **Type:** `string`

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`watchCastsMentioningUsername.ReturnType`

## Error Type

`Watch.watchCastsMentioningUsername.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)