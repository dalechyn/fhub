# VerificationRemoval.toMessageProtobuf

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
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/VerificationRemoval.ts](https://github.com/dalechyn/fhub/blob/main/src/core/VerificationRemoval.ts#L124)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.verificationRemove

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`