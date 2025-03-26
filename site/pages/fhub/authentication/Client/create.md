# Client.create

## Imports

:::code-group
```ts [Named]
import { Client } from 'fhub/fhub'
```
```ts [Entrypoint]
import * as Client from 'fhub/fhub/Client'
```
:::

## Definition

```ts
function create(
  transport: Connect.Transport,
): Client
```

**Source:** [src/fhub/Client.ts](https://github.com/dalechyn/fhub/blob/main/src/fhub/Client.ts#L28)

## Parameters

### transport

- **Type:** `Connect.Transport`

## Return Type

`Client`