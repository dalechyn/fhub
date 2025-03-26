# Cast.toProtobuf

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
function toProtobuf(
  cast: toProtobuf.ParametersType,
): toProtobuf.ReturnType
```

**Source:** [src/core/Cast.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Cast.ts#L125)

## Parameters

### cast

- **Type:** `toProtobuf.ParametersType`

#### cast.embeds

- **Type:** `Embed[]`
- **Optional**

#### cast.fid

- **Type:** `bigint`

#### cast.isLong

- **Type:** `boolean`

#### cast.mentions

- **Type:** `{ fid: bigint; position: number; }[]`
- **Optional**

#### cast.meta

- **Type:** `Meta`

#### cast.parent

- **Type:** `Parent`
- **Optional**

#### cast.position

- **Type:** `number`

#### cast.text

- **Type:** `{ value: string; embeds?: Embed[]; mentions?: { fid: bigint; position: number; }[]; }`

#### cast.timestamp

- **Type:** `number`

#### cast.value

- **Type:** `string`

## Return Type

`toProtobuf.ReturnType`