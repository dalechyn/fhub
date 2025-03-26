# SuperCast.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { SuperCast } from 'fhub/actions'
```
```ts [Entrypoint]
import * as SuperCast from 'fhub/actions/SuperCast'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/actions/SuperCast.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/SuperCast.ts#L244)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

## Return Type

`Promise<createPreconstruct.ReturnType>`