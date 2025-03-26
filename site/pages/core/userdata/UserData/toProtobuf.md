# UserData.toProtobuf

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
function toProtobuf(
  body: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/UserData.ts](https://github.com/dalechyn/fhub/blob/main/src/core/UserData.ts#L205)

## Parameters

### body

- **Type:** `toProtobuf.ParametersType`

#### body.fid

- **Type:** `bigint`

#### body.meta

- **Type:** `Meta`

#### body.timestamp

- **Type:** `number`

#### body.type

- **Type:** `"url" | "none" | "pfp" | "display" | "bio" | "username" | "location"`

#### body.value

- **Type:** `string`

## Return Type

`toProtobuf.ReturnType`