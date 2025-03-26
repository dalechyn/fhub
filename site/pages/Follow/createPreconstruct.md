# Follow.createPreconstruct

## Imports

:::code-group
```ts [Named]
import { Follow } from 'fhub/fhub/Actions.ts'
```
```ts [Entrypoint]
import * as Follow from 'fhub/fhub/Actions.ts/Follow'
```
:::

## Definition

```ts
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/fhub/actions/Follow.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/actions/Follow.ts#L98)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit`

## Return Type

`Promise<createPreconstruct.ReturnType>`