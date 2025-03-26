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

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)
- [`Meta.InvalidHashSchemeTypeError`](/api/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/api/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/api/Meta/errors#metainvalidsignatureschemetypeerror)
- [`Parent.InvalidParentTypeError`](/api/Parent/errors#parentinvalidparenttypeerror)