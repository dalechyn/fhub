# UserData.toMessageProtobuf

## Imports

:::code-group
```ts [Named]
import { UserData } from 'fhub/core'
```
```ts [Entrypoint]
import * as UserData from 'fhub/core/UserData'
```
:::

## Definition

```ts
function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType
```

**Source:** [src/core/UserData.ts](https://github.com/dalechyn/fhub/blob/main/src/core/UserData.ts#L215)

## Parameters

### parameters

- **Type:** `toMessageProtobuf.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.data

- **Type:** `Omit`

## Return Type

`toMessageProtobuf.ReturnType`