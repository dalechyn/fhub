# SuperCast.getByFid

## Imports

:::code-group
```ts [Named]
import { SuperCast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as SuperCast from 'fhub/actions/SuperCast'
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

**Source:** [src/actions/SuperCast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/SuperCast.ts#L244)

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



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByFid.ReturnType>`

## Error Type

`SuperCast.getByFid.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)