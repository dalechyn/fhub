# Account.fromEd25519Signer

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
function fromEd25519Signer(
  parameters: fromEd25519Signer.ParametersType,
): fromEd25519Signer.ReturnType
```

**Source:** [src/fhub/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromEd25519Signer.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.signer

- **Type:** `{ getSignerKey(): Promise; }`

## Return Type

`fromEd25519Signer.ReturnType`