# User.updatePreconstruct

## Imports

:::code-group
```ts [Named]
import { User } from 'fhub/actions'
```
```ts [Entrypoint]
import * as User from 'fhub/actions/User'
```
:::

## Definition

```ts
function updatePreconstruct(
  parameters: updatePreconstruct.ParametersType,
): Promise<updatePreconstruct.ReturnType>
```

**Source:** [src/actions/User.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/User.ts#L332)

## Parameters

### parameters

- **Type:** `updatePreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.data

- **Type:** `Omit`

## Return Type

`Promise<updatePreconstruct.ReturnType>`