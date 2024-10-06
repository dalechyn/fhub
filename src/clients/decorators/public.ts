import type { Client } from '../createClient.js'

export type PublicActions = {}

export function publicActions(_client: Client): PublicActions {
  return {}
}
