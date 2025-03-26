# Like.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Like } from 'fhub/fhub/Actions'
```
```ts [Entrypoint]
import * as Like from 'fhub/fhub/Actions/Like'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/fhub/actions/Like.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Like.ts#L75)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.like

- **Type:** `Omit`

#### parameters.type

- **Type:** `"cast"`

## Return Type

`Promise<createPreconstruct.ReturnType>`