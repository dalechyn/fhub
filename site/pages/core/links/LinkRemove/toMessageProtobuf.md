# LinkRemove.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { LinkRemove } from 'fhub/core'
```
```ts [Entrypoint]
import * as LinkRemove from 'fhub/core/LinkRemove'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/LinkRemove.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkRemove.ts#L80)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.link

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`