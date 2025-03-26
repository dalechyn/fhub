# User.followPreconstruct

Preconstructs [`Link.Link`](/api/Link/types#link) follow creation message without submitting it to Hub.

:::note

Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.

:::

## Imports

:::code-group
```ts [Named]
import { User } from 'fhub/actions'
```
```ts [Entrypoint]
import * as User from 'fhub/actions/User'
```
:::

## Examples

```ts twoslash
import { Account } from 'fhub'
import { User } from 'fhub/actions'

const message = await User.followPreconstruct({
  follow: {
    targetFid: 11517n
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
function followPreconstruct(
  parameters: followPreconstruct.ParametersType,
): Promise<followPreconstruct.ReturnType>
```

**Source:** [src/actions/User.ts](https://github.com/dalechyn/fhub/blob/main/src/actions/User.ts#L839)

## Parameters

### parameters

- **Type:** `followPreconstruct.ParametersType`

`targetFid`, and [`Account.Account`](/api/Account/types#account) to sign the message.

#### parameters.account

- **Type:** `Account`

#### parameters.follow

- **Type:** `Omit`

## Return Type

Follow creation message.

`Promise<followPreconstruct.ReturnType>`