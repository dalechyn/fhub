# Recast.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Recast } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Recast from 'fhub/fhub/Actions/Recast'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/fhub/actions/Recast.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Recast.ts#L75)

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