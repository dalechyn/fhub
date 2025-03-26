# VerificationAdd.toMessageDataProtobuf

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
function toMessageDataProtobuf(
  verification: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/VerificationAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationAdd.ts#L124)

## Parameters

### verification

- **Type:** `toMessageDataProtobuf.ParametersType`

#### verification.address

- **Type:** `string`

#### verification.blockHash

- **Type:** `Hex.Hex`

#### verification.chainId

- **Type:** `number`

#### verification.claimSignature

- **Type:** `Hex.Hex`

#### verification.fid

- **Type:** `bigint`

#### verification.meta

- **Type:** `Meta`

#### verification.protocol

- **Type:** `"ethereum" | "solana"`

#### verification.timestamp

- **Type:** `number`

#### verification.type

- **Type:** `"eoa" | "contract"`

## Return Type

`toMessageDataProtobuf.ReturnType`