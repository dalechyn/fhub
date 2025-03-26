# Embed.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { Embed } from 'fhub/core'
```
```ts [Entrypoint]
import * as Embed from 'fhub/core/Embed'
```
:::

## Definition

```ts
function fromProtobuf(
  embed: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType
```

**Source:** [src/core/Embed.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Embed.ts#L77)

## Parameters

### embed

- **Type:** `fromProtobuf.ParametersType`

#### embed.case

- **Type:** `"castId"`

#### embed.embed

- **Type:** `{ value: string; case: "url"; } | { value: any; case: "castId"; } | { case: undefined; value?: undefined; }`

#### embed.value

- **Type:** `CastId`

## Return Type

`fromProtobuf.ReturnType`

## Error Type

`Embed.fromProtobuf.ErrorType`

- [`Embed.InvalidEmbedTypeError`](/api/Embed/errors#embedinvalidembedtypeerror)