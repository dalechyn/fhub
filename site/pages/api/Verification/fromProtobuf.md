# Verification.fromProtobuf

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
function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Verification.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Verification.ts#L76)

## Parameters

### parameters

- **Type:** `fromProtobuf.ParametersType`

#### parameters.body

- **Type:** `MessageProtobuf.VerificationAddAddressBody`

#### parameters.fid

- **Type:** `bigint`

#### parameters.meta

- **Type:** `Meta`

#### parameters.timestamp

- **Type:** `number`

## Return Type

`fromProtobuf.ReturnType`