import {
  type Transport,
  type Client as connectRpc_Client,
  createClient as connectRpc_createClient,
} from '@connectrpc/connect'
import type { ErrorType } from '../errors/utils.js'
import { HubService } from '../protobufs/rpc_pb.js'
import type { ExactPartial, Prettify } from '../types/utils.js'
import { uid } from '../utils/uid.js'
import type { PublicActions } from './decorators/public.js'

export type ClientConfig = {
  /** A key for the client. */
  key?: string | undefined
  /** A name for the client. */
  name?: string | undefined
  /** The gRPC transport */
  transport: Transport
  /** The type of client. */
  type?: string | undefined
}

// Actions that are used internally by other Actions (ie. `call` is used by `readContract`).
// They are allowed to be extended, but must conform to their parameter & return type interfaces.
// Example: an extended `call` action must accept `CallParameters` as parameters,
// and conform to the `CallReturnType` return type.
type ExtendableProtectedActions = Pick<PublicActions, 'getCast'>

export type Client<
  extended extends Extended | undefined = Extended | undefined,
> = Client_Base &
  (extended extends Extended ? extended : unknown) & {
    extend: <
      const client extends Extended & ExactPartial<ExtendableProtectedActions>,
    >(
      fn: (client: Client<extended>) => client,
    ) => Client<
      Prettify<client> & (extended extends Extended ? extended : unknown)
    >
  }

type Client_Base = {
  /** A key for the client. */
  key: string
  /** A name for the client. */
  name: string
  connectRpcClient: connectRpc_Client<typeof HubService>
  /** The gRPC transport */
  transport: Transport
  /** The type of client. */
  type: string
  /** A unique ID for the client. */
  uid: string
}

type Extended = Prettify<
  // disallow redefining base properties
  { [_ in keyof Client_Base]?: undefined } & {
    [key: string]: unknown
  }
>

export type MulticallBatchOptions = {
  /** The maximum size (in bytes) for each calldata chunk. @default 1_024 */
  batchSize?: number | undefined
  /** The maximum number of milliseconds to wait before sending a batch. @default 0 */
  wait?: number | undefined
}

export type CreateClientErrorType = ErrorType

export function createClient(parameters: ClientConfig): Prettify<Client>

export function createClient(parameters: ClientConfig): Client {
  const {
    key = 'base',
    name = 'Base Client',
    type = 'base',
    transport,
  } = parameters

  const connectRpcClient = connectRpc_createClient(HubService, transport)
  const client = {
    key,
    name,
    connectRpcClient,
    transport,
    type,
    uid: uid(),
  }

  function extend(base: typeof client) {
    type ExtendFn = (base: typeof client) => unknown
    return (extendFn: ExtendFn) => {
      const extended = extendFn(base) as Extended
      for (const key in client) delete extended[key]
      const combined = { ...base, ...extended }
      return Object.assign(combined, { extend: extend(combined as any) })
    }
  }

  return Object.assign(client, { extend: extend(client) as any })
}
