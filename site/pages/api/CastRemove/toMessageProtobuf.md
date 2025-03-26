# CastRemove.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { CastRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as CastRemove from 'fhub/core/CastRemove'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/CastRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastRemove.ts#L118)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.castRemove

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`