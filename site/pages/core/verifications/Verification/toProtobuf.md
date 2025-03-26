# Verification.toProtobuf

## Imports

:::code-group
```ts [Named]
import { Verification } from 'fhub/core'
```
```ts [Entrypoint]
import * as Verification from 'fhub/core/Verification'
```
:::

## Definition

```ts
function toProtobuf(
  verification: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/Verification.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Verification.ts#L76)

## Parameters

### verification

- **Type:** `toProtobuf.ParametersType`

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

`toProtobuf.ReturnType`