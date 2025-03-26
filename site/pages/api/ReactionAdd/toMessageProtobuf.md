# ReactionAdd.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { ReactionAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as ReactionAdd from 'fhub/core/ReactionAdd'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/ReactionAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/ReactionAdd.ts#L82)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.reaction

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`