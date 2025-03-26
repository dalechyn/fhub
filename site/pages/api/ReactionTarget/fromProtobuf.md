# ReactionTarget.fromProtobuf

## Imports

:::code-group
```ts [Named]
import { ReactionTarget } from 'fhub/core'
```
```ts [Entrypoint]
import * as ReactionTarget from 'fhub/core/ReactionTarget'
```
:::

## Definition

```ts
function fromProtobuf(
  target: MessageProtobuf.ReactionBody['target'],
): fromProtobuf.ReturnType
```

**Source:** [src/core/ReactionTarget.ts](https://github.com/dalechyn/fhub/blob/main/src/core/ReactionTarget.ts#L52)

## Parameters

### target

- **Type:** `MessageProtobuf.ReactionBody['target']`

#### target.case

- **Type:** `"targetUrl"`

#### target.target

- **Type:** `{ value: any; case: "targetCastId"; } | { value: string; case: "targetUrl"; } | { case: undefined; value?: undefined; }`

#### target.type

- **Type:** `ReactionType`

Type of reaction

#### target.value

- **Type:** `string`

URL to react to

## Return Type

`fromProtobuf.ReturnType`