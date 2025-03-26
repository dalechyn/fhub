# Recast.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Recast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Recast from 'fhub/actions/Recast'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/actions/Recast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Recast.ts#L78)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.recast

- **Type:** `Omit`

#### parameters.type

- **Type:** `"cast"`

## Return Type

`Promise<createPreconstruct.ReturnType>`