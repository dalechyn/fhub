# Cast.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Cast } from 'fhub/core'
```
```ts [Entrypoint]
import * as Cast from 'fhub/core/Cast'
```
:::

## Definition

```ts
function fromProtobuf(
  parameters: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Cast.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Cast.ts#L125)

## Parameters

### parameters

- **Type:** `fromProtobuf.ParametersType`

#### parameters.body

- **Type:** `MessageProtobuf.CastAddBody`

#### parameters.fid

- **Type:** `bigint`

#### parameters.meta

- **Type:** `Meta`

#### parameters.timestamp

- **Type:** `number`

## Return Type

`fromProtobuf.ReturnType`

## Error Type

`Cast.fromProtobuf.ErrorType`

- [`Embed.InvalidEmbedTypeError`](//Embed/errors#embedinvalidembedtypeerror)
- [`Parent.InvalidParentTypeError`](//Parent/errors#parentinvalidparenttypeerror)