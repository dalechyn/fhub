import type { CallOptions } from '@connectrpc/connect'
import type { Types } from 'ox'
import { type GlobalErrorType, UnexpectedError } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Client from '../Client.js'

export declare namespace getCastIdFromUrl {
  type ParametersType = { url: string }
  type ReturnType = Core.CastId.CastId
  type ErrorType = GlobalErrorType
}
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
  ][0].groups?.castHash
  if (!castHash)
    throw new UnexpectedError(
      'Expected Warpcast to have og:image meta tag with full cast hash.',
    )
  const username = parameters.url.match(
    /https:\/\/warpcast\.com\/(?<username>\S+)\/0x[0-9a-f]{8,}/i,
  )?.groups?.username
  if (!username) throw new UnexpectedError('Expected url to have username.')

  const proof = await Core.Actions.UsernameProof.get(
    client,
    {
      name: username,
    },
    options,
  )

  return { hash: castHash as Types.Hex, fid: proof.fid }
}

getCastIdFromUrl.parseError = (error: unknown) =>
  error as getCastIdFromUrl.ErrorType
