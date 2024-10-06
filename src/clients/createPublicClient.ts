import type { ErrorType } from '../errors/utils.js'
import type { Prettify } from '../types/utils.js'
import {
  type Client,
  type ClientConfig,
  type CreateClientErrorType,
  createClient,
} from './createClient.js'
import { type PublicActions, publicActions } from './decorators/public.js'

export type PublicClientConfig = Prettify<
  Pick<ClientConfig, 'key' | 'name' | 'transport'>
>

export type PublicClient = Prettify<Client<PublicActions>>

export type CreatePublicClientErrorType = CreateClientErrorType | ErrorType

export function createPublicClient(
  parameters: PublicClientConfig,
): PublicClient {
  const { key = 'public', name = 'Public Client' } = parameters
  const client = createClient({
    ...parameters,
    key,
    name,
    type: 'publicClient',
  })
  return client.extend(publicActions) as any
}
