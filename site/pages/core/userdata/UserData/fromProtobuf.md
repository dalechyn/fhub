# UserData.fromProtobuf

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
function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/UserData.ts](https://github.com/dalechyn/fhub/blob/main/src/core/UserData.ts#L205)

## Parameters

### parameters

- **Type:** `fromProtobuf.ParametersType`

#### parameters.body

- **Type:** `MessageProtobuf.UserDataBody`

#### parameters.fid

- **Type:** `bigint`

#### parameters.meta

- **Type:** `Meta`

#### parameters.timestamp

- **Type:** `number`

## Return Type

`fromProtobuf.ReturnType`