# Parent.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Parent } from 'fhub/core'
```
```ts [Entrypoint]
import * as Parent from 'fhub/core/Parent'
```
:::

## Definition

```ts
function fromProtobuf(
  parent: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Parent.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Parent.ts#L80)

## Parameters

### parent

- **Type:** `fromProtobuf.ParametersType`

#### parent.case

- **Type:** `"parentUrl"`

#### parent.embeds

- **Type:** `any[]`

URLs or cast ids to be embedded in the cast

#### parent.embedsDeprecated

- **Type:** `string[]`

URLs to be embedded in the cast

#### parent.mentions

- **Type:** `bigint[]`

Fids mentioned in the cast

#### parent.mentionsPositions

- **Type:** `number[]`

Positions of the mentions in the text

#### parent.parent

- **Type:** `{ value: any; case: "parentCastId"; } | { value: string; case: "parentUrl"; } | { case: undefined; value?: undefined; }`

#### parent.text

- **Type:** `string`

Text of the cast

#### parent.type

- **Type:** `CastType`

Type of cast

#### parent.value

- **Type:** `string`

Parent URL

## Return Type

`fromProtobuf.ReturnType`

## Error Type

`Parent.fromProtobuf.ErrorType`

- [`Parent.InvalidParentTypeError`](/core/casts/Parent/errors#parentinvalidparenttypeerror)