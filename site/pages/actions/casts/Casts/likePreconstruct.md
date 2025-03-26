# Casts.likePreconstruct

Preconstructs [`Reaction.Reaction`](/api/Reaction/types#reaction) creation like message without submitting it to Hub.

:::note

Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.

:::

## Imports

:::code-group
```ts [Named]
import { Casts } from 'fhub/actions'
```
```ts [Entrypoint]
import * as Casts from 'fhub/actions/Casts'
```
:::

## Examples

```ts twoslash
import { Account } from 'fhub'
import { Casts } from 'fhub/actions'

const message = await Casts.likePreconstruct({
  cast: { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' },
  account: Account.fromPrivateKeyAndFid({
    fid: 11517n,
    privateKey:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  }),
})

message
//    ^?



```

## Definition

```ts
function likePreconstruct(
  parameters: likePreconstruct.ParametersType,
): Promise<likePreconstruct.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L1244)

## Parameters

### parameters

- **Type:** `likePreconstruct.ParametersType`

[`CastId.CastId`](/api/CastId/types#castid), and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

#### parameters.type

- **Type:** `"cast"`

## Return Type

Like creation message.

`Promise<likePreconstruct.ReturnType>`