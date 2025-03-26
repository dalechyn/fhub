# Follow.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Follow } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Follow from 'fhub/actions/Follow'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/actions/Follow.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Follow.ts#L102)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit`

## Return Type

`Promise<createPreconstruct.ReturnType>`