# CastAdd.toMessageDataProtobuf

## Imports

:::code-group
```ts [Named]
import { CastAdd } from 'fhub/core'
```
```ts [Entrypoint]
import * as CastAdd from 'fhub/core/CastAdd'
```
:::

## Definition

```ts
function toMessageDataProtobuf(
  cast: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType
```

**Source:** [src/core/CastAdd.ts](https://github.com/dalechyn/fhub/blob/main/src/core/CastAdd.ts#L122)

## Parameters

### cast

- **Type:** `toMessageDataProtobuf.ParametersType`

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

`toMessageDataProtobuf.ReturnType`