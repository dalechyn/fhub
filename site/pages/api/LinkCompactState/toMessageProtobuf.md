# LinkCompactState.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { LinkCompactState } from 'fhub/core'
```
```ts [Entrypoint]
import * as LinkCompactState from 'fhub/core/LinkCompactState'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/LinkCompactState.ts](https://github.com/dalechyn/fhub/blob/main/src/core/LinkCompactState.ts#L116)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.link

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`