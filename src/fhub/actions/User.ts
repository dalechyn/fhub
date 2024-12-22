import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Client from '../Client.js'

export declare namespace get {
  type ParametersType = { fid: bigint }
  type ReturnType = {
    pfp: string | null
    displayName: string | null
    bio: string | null
    url: string | null
    username: string | null
    location: string | null
  }
  type ErrorType = Core.Actions.UserData.getByFid.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  let nextPageToken: Core.Pagination.NextPageToken = null
  const userDatas = await (async () => {
    const datas: Core.UserData.UserData[] = []
    do {
      const result = await Core.Actions.UserData.getByFid(
        client,
        { fid: parameters.fid },
        options,
      )
      datas.push(...result.datas)
      nextPageToken = result.nextPageToken
    } while (nextPageToken !== null)
    return datas
  })()
  return {
    pfp: userDatas.find((data) => data.type === 'pfp')?.value ?? null,
    displayName:
      userDatas.find((data) => data.type === 'display')?.value ?? null,
    bio: userDatas.find((data) => data.type === 'bio')?.value ?? null,
    url: userDatas.find((data) => data.type === 'url')?.value ?? null,
    username: userDatas.find((data) => data.type === 'username')?.value ?? null,
    location: userDatas.find((data) => data.type === 'location')?.value ?? null,
  }
}

get.parseError = (error: unknown) => error as get.ErrorType
