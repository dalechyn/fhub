# Casts.createPreconstruct

Preconstructs [`Cast.Cast`](/api/Cast/types#cast) creation message without submitting it to Hub.

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

const message = await Casts.createPreconstruct({
  cast: {
    text: {
      value: 'Hi!',
    },
    isLong: false,
  },
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
function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType>
```

**Source:** [src/actions/Casts.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/Casts.ts#L1244)

## Parameters

### parameters

- **Type:** `createPreconstruct.ParametersType`

[`Cast.Cast`](/api/Cast/types#cast), and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.cast

- **Type:** `Omit`

## Return Type

Cast creation message.

`Promise<createPreconstruct.ReturnType>`