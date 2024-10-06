import { type GetCast, getCast } from '../../actions/casts/getCast.js'
import {
  type GetCastsByFid,
  getCastsByFid,
} from '../../actions/casts/getCastsByFid.js'
import type { Client } from '../createClient.js'

export type PublicActions = {
  /**
   * Returns a cast by it's hash or fid.
   *
   * - Docs: https://hubbie.sh/docs/actions/public/getCast
   * - gRPC Cast Service Methods: [`GetCast`](https://www.thehubble.xyz/docs/api.html#_3-cast-service)
   *
   * @param client - Client to use
   * @param parameters - {@link GetCast.(Parameters)}
   * @returns Matched cast. {@link GetCast.(ReturnType)}
   *
   * @example
   * import { createPublicClient, web } from 'hubbie'
   *
   * const client = createPublicClient({
   *   transport: web(),
   * })
   * const cast = await client.getCast(client, {
   *  fid: '1',
   *  hash: '0x0000000000000000000000000000000000000000000000000000000000000000'
   * })
   */
  getCast(parameters: GetCast.Parameters): Promise<GetCast.ReturnType>
  getCastsByFid(
    parameters: GetCastsByFid.Parameters,
  ): Promise<GetCastsByFid.ReturnType>
}

export function publicActions(client: Client): PublicActions {
  return {
    getCast: (parameters) => getCast(client, parameters),
    getCastsByFid: (parameters) => getCastsByFid(client, parameters),
  }
}
