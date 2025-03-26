# Account.fromPrivateKeyAndFid

## Imports

:::code-group
```ts [Named]
import { Account } from 'fhub/fhub'
```
```ts [Entrypoint]
import * as Account from 'fhub/fhub/Account'
```
:::

## Definition

```ts
function fromPrivateKeyAndFid(
  parameters: fromPrivateKeyAndFid.ParametersType,
): fromPrivateKeyAndFid.ReturnType
```

**Source:** [src/fhub/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromPrivateKeyAndFid.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.privateKey

- **Type:** `Hex.Hex`

## Return Type

`fromPrivateKeyAndFid.ReturnType`