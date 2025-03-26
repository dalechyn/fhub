# UserData.toHex

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
function toHex(
  body: toHex.ParametersType,
): toHex.ReturnType
```

**Source:** [src/core/UserData.ts](https://github.com/dalechyn/fhub/blob/main/src/core/UserData.ts#L215)

## Parameters

### body

- **Type:** `toHex.ParametersType`

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

`toHex.ReturnType`