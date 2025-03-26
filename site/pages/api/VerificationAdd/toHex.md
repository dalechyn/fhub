# VerificationAdd.toHex

## Imports

:::code-group
```ts [Named]
import { VerificationAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as VerificationAdd from 'fhub/core/VerificationAdd'
```
:::

## Definition

```ts
function toHex(
  cast: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/VerificationAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationAdd.ts#L124)

## Parameters

### cast

- **Type:** `toHex.ParametersType`

#### cast.address

- **Type:** `string`

#### cast.blockHash

- **Type:** `Hex.Hex`

#### cast.chainId

- **Type:** `number`

#### cast.claimSignature

- **Type:** `Hex.Hex`

#### cast.fid

- **Type:** `bigint`

#### cast.meta

- **Type:** `Meta`

#### cast.protocol

- **Type:** `"ethereum" | "solana"`

#### cast.timestamp

- **Type:** `number`

#### cast.type

- **Type:** `"eoa" | "contract"`

## Return Type

`toHex.ReturnType`