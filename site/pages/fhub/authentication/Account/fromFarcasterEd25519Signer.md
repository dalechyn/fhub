# Account.fromFarcasterEd25519Signer

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
function fromFarcasterEd25519Signer(
  parameters: fromFarcasterEd25519Signer.ParametersType,
): fromFarcasterEd25519Signer.ReturnType
```

**Source:** [src/fhub/Account.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/Account.ts#L133)

## Parameters

### parameters

- **Type:** `fromFarcasterEd25519Signer.ParametersType`

#### parameters.fid

- **Type:** `bigint`

#### parameters.signer

- **Type:** `{ getSignerKey(): Promise; }`

## Return Type

`fromFarcasterEd25519Signer.ReturnType`