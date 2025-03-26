# SuperCast.getByParent

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
function getByParent(
  client: Client.Client,
  parameters: getByParent.ParametersType,
  options?: CallOptions,
): Promise<getByParent.ReturnType>
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

- **Type:** `getByParent.ParametersType`



### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByParent.ReturnType>`

## Error Type

`SuperCast.getByParent.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/actions/casts/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/actions/casts/Parent/errors#parentinvalidparenttypeerror)