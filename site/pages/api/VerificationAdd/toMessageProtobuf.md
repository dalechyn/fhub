# VerificationAdd.toMessageProtobuf

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
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/VerificationAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationAdd.ts#L124)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.verification

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`