# Casts.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Casts } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Casts from 'fhub/actions/Casts'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L387)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

## Return Type

`Promise<createPreconstruct.ReturnType>`