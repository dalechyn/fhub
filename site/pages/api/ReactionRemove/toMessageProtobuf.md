# ReactionRemove.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { ReactionRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as ReactionRemove from 'fhub/core/ReactionRemove'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/ReactionRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/ReactionRemove.ts#L82)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.reaction

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`