# Account.fromPrivateKeyAndFid

## Imports

:::code-group
```ts [Named]
import { Account } from 'fhub/core'
```
```ts [Entrypoint]
import * as Account from 'fhub/core/Account'
```
:::

## Definition

```ts
function fromPrivateKeyAndFid(
  parameters: fromPrivateKeyAndFid.ParametersType,
): fromPrivateKeyAndFid.ReturnType
```

**Source:** [src/core/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromPrivateKeyAndFid.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.privateKey

- **Type:** `Hex.Hex`

## Return Type

`fromPrivateKeyAndFid.ReturnType`