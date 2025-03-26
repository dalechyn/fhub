# Cast.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Cast } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Cast from 'fhub/fhub/Actions/Cast'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/fhub/actions/Cast.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Cast.ts#L219)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

## Return Type

`Promise<createPreconstruct.ReturnType>`