# Link.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Link } from 'fhub/core'
```
```ts [Entrypoint]
import * as Link from 'fhub/core/Link'
```
:::

## Definition

```ts
function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Link.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Link.ts#L102)

## Parameters

### parameters

- **Type:** `fromProtobuf.ParametersType`

#### parameters.body

- **Type:** `MessageProtobuf.LinkBody`

#### parameters.fid

- **Type:** `bigint`

#### parameters.meta

- **Type:** `Meta`

#### parameters.timestamp

- **Type:** `number`

## Return Type

`fromProtobuf.ReturnType`