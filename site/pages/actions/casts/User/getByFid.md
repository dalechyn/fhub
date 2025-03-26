# User.getByFid

## Imports

:::code-group
```ts [Named]
import { User } from 'fhub/actions'
```
```ts [Entrypoint]
import * as User from 'fhub/actions/User'
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

**Source:** [src/actions/User.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/User.ts#L332)

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

#### parameters.fid

- **Type:** `bigint`

#### parameters.pageSize

- **Type:** `number`
- **Optional**

#### parameters.pageToken

- **Type:** `Hex.Hex | undefined`
- **Optional**

#### parameters.reverse

- **Type:** `boolean`
- **Optional**

#### parameters.startTimestamp

- **Type:** `bigint`
- **Optional**

#### parameters.stopTimestamp

- **Type:** `bigint`
- **Optional**

### options

- **Type:** `CallOptions`
- **Optional**

## Return Type

`Promise<getByFid.ReturnType>`

## Error Type

`User.getByFid.ErrorType`

- [`Meta.InvalidHashSchemeTypeError`](/actions/casts/Meta/errors#metainvalidhashschemetypeerror)
- [`Meta.InvalidSignatureError`](/actions/casts/Meta/errors#metainvalidsignatureerror)
- [`Meta.InvalidSignatureSchemeTypeError`](/actions/casts/Meta/errors#metainvalidsignatureschemetypeerror)