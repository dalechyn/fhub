import type { ErrorType } from '../errors/utils.js'
import type {
  EIP1193RequestFn,
  EIP1474Methods,
  RpcSchema,
} from '../types/eip1193.js'
import type { ExactPartial, Prettify } from '../types/utils.js'
import { uid } from '../utils/uid.js'
import type { PublicActions } from './decorators/public.js'

export type ClientConfig = {
  /**
   * Time (in ms) that cached data will remain in memory.
   * @default 4_000
   */
  cacheTime?: number | undefined
  /** A key for the client. */
  key?: string | undefined
  /** A name for the client. */
  name?: string | undefined
  /**
   * Frequency (in ms) for polling enabled actions & events.
   * @default 4_000
   */
  pollingInterval?: number | undefined
  /** The RPC transport */
  transport: null
  /** The type of client. */
  type?: string | undefined
}

// Actions that are used internally by other Actions (ie. `call` is used by `readContract`).
// They are allowed to be extended, but must conform to their parameter & return type interfaces.
// Example: an extended `call` action must accept `CallParameters` as parameters,
// and conform to the `CallReturnType` return type.
type ExtendableProtectedActions = Pick<PublicActions, ''>

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
  /** Time (in ms) that cached data will remain in memory. */
  cacheTime: number
  /** A key for the client. */
  key: string
  /** A name for the client. */
  name: string
  /** Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds. */
  pollingInterval: number
  /** Request function wrapped with friendly error handling */
  request: EIP1193RequestFn<
    rpcSchema extends undefined ? EIP1474Methods : rpcSchema
  >
  /** The RPC transport */
  transport: null
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
    cacheTime = parameters.pollingInterval ?? 4_000,
    key = 'base',
    name = 'Base Client',
    pollingInterval = 4_000,
    type = 'base',
  } = parameters

  const { config, request, value } = parameters.transport({
    pollingInterval,
  })
  const transport = { ...config, ...value }

  const client = {
    cacheTime,
    key,
    name,
    pollingInterval,
    request,
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
