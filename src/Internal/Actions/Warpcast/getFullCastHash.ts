import type { CallOptions } from '@connectrpc/connect'
import type { Types } from 'ox'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import { type GlobalErrorType, UnexpectedError } from '../../Errors/error.js'

export declare namespace Actions_Warpcast_getCastIdFromUrl {
  type ParametersType = { url: string }
  type ReturnType = NodeTypes.CastId
  type ErrorType = GlobalErrorType
}
export async function Actions_Warpcast_getCastIdFromUrl(
  client: Client,
  parameters: Actions_Warpcast_getCastIdFromUrl.ParametersType,
  options?: CallOptions,
): Promise<Actions_Warpcast_getCastIdFromUrl.ReturnType> {
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

  const proof = await NodeActions.UsernameProof.getUsernameProof(
    client,
    {
      name: username,
    },
    options,
  )

  return { hash: castHash as Types.Hex, fid: proof.fid }
}

Actions_Warpcast_getCastIdFromUrl.parseError = (error: unknown) =>
  error as Actions_Warpcast_getCastIdFromUrl.ErrorType
