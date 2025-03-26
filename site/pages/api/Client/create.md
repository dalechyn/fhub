# Client.create

## Imports

:::code-group
```ts [Named]
import { Client } from 'fhub/core'
```
```ts [Entrypoint]
import * as Client from 'fhub/core/Client'
```
:::

## Definition

```ts
function create(
  transport: Connect.Transport,
): Client
```

**Source:** [src/core/Client.ts](https://github.com/dalechyn/fhub/blob/main/src/core/Client.ts#L28)

## Parameters

### transport

- **Type:** `Connect.Transport`

## Return Type

`Client.Client`