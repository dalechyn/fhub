import type { CallOptions } from '@connectrpc/connect'
import type { Hex } from 'ox'
import type * as CastId from '../core/CastId.js'
import type * as Client from '../core/Client.js'
import { type GlobalErrorType, UnexpectedError } from '../core/Error.js'
import * as UsernameProof from './UsernameProof.js'

export declare namespace getCastIdFromUrl {
  type ParametersType = { url: string }
  type ReturnType = CastId.CastId
  type ErrorType = GlobalErrorType
}
/**
 * Gets a {@link fhub#CastId.CastId} from Warpcast Cast URL.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Warpcast } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const castId = await Warpcast.getCastIdFromUrl(client, { url: 'https://warpcast.com/dalechyn.eth/0x43706fe7' })
 *
 * castId
 * //   ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `url` of the cast from Warpcast client website.
 * @returns {@link fhub#CastId.CastId}.
 */
export async function getCastIdFromUrl(
  client: Client.Client,
  parameters: getCastIdFromUrl.ParametersType,
  options?: CallOptions,
): Promise<getCastIdFromUrl.ReturnType> {
  const response = await fetch(parameters.url, {
    headers: {
      'User-Agent': 'Twitter Bot',
    },
  })
  const html = await response.text()
  const castHash = [
    ...html.matchAll(
      /<meta property="og:image" content="https:\/\/client\.warpcast\.com\/v2\/og-image\?castHash=(?<castHash>0x[0-9a-f]{40})"\/>/gim,
    ),
  ][0]!.groups?.castHash
  if (!castHash)
    throw new UnexpectedError(
      'Expected Warpcast to have og:image meta tag with full cast hash.',
    )
  const username = parameters.url.match(
    /https:\/\/warpcast\.com\/(?<username>\S+)\/0x[0-9a-f]{8,}/i,
  )?.groups?.username
  if (!username) throw new UnexpectedError('Expected url to have username.')

  const proof = await UsernameProof.get(
    client,
    {
      name: username,
    },
    options,
  )

  return { hash: castHash as Hex.Hex, fid: proof.fid }
}

getCastIdFromUrl.parseError = (error: unknown) =>
  error as getCastIdFromUrl.ErrorType
