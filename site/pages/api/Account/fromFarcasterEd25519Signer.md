# Account.fromFarcasterEd25519Signer

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
function fromFarcasterEd25519Signer(
  parameters: fromFarcasterEd25519Signer.ParametersType,
): fromFarcasterEd25519Signer.ReturnType
```

**Source:** [src/core/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromFarcasterEd25519Signer.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.signer

- **Type:** `{ getSignerKey(): Promise; }`

## Return Type

`fromFarcasterEd25519Signer.ReturnType`