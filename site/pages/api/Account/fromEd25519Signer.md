# Account.fromEd25519Signer

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
function fromEd25519Signer(
  parameters: fromEd25519Signer.ParametersType,
): fromEd25519Signer.ReturnType
```

**Source:** [src/core/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromEd25519Signer.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.signer

- **Type:** `{ getSignerKey(): Promise; }`

## Return Type

`fromEd25519Signer.ReturnType`