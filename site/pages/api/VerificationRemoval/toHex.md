# VerificationRemoval.toHex

## Imports

:::code-group
```ts [Named]
import { VerificationRemoval } from 'fhub/core'
```
```ts [Entrypoint]
import * as VerificationRemoval from 'fhub/core/VerificationRemoval'
```
:::

## Definition

```ts
function toHex(
  cast: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/VerificationRemoval.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationRemoval.ts#L124)

## Parameters

### cast

- **Type:** `toHex.ParametersType`

#### cast.address

- **Type:** `string`

#### cast.fid

- **Type:** `bigint`

#### cast.meta

- **Type:** `Meta`

#### cast.protocol

- **Type:** `"ethereum" | "solana"`

#### cast.timestamp

- **Type:** `number`

## Return Type

`toHex.ReturnType`