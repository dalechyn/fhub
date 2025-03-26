# VerificationRemoval.toMessageDataProtobuf

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
function toMessageDataProtobuf(
  verificationRemove: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/VerificationRemoval.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationRemoval.ts#L124)

## Parameters

### verificationRemove

- **Type:** `toMessageDataProtobuf.ParametersType`

#### verificationRemove.address

- **Type:** `string`

#### verificationRemove.fid

- **Type:** `bigint`

#### verificationRemove.meta

- **Type:** `Meta`

#### verificationRemove.protocol

- **Type:** `"ethereum" | "solana"`

#### verificationRemove.timestamp

- **Type:** `number`

## Return Type

`toMessageDataProtobuf.ReturnType`