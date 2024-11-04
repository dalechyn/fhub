import type { CallOptions } from '@connectrpc/connect'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_User_get {
  type ParametersType = { fid: bigint }
  type ReturnType = {
    pfp: string | null
    displayName: string | null
    bio: string | null
    url: string | null
    username: string | null
    location: string | null
  }
  type ErrorType =
    | NodeActions.UserData.getUserDataByFid.ErrorType
    | GlobalErrorType
}
export async function Actions_User_get(
  client: Client,
  parameters: Actions_User_get.ParametersType,
  options?: CallOptions,
): Promise<Actions_User_get.ReturnType> {
  let nextPageToken: NodeTypes.NextPageToken = null
  const userDatas = await (async () => {
    const datas: NodeTypes.UserData[] = []
    do {
      const result = await NodeActions.UserData.getUserDataByFid(
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

Actions_User_get.parseError = (error: unknown) =>
  error as Actions_User_get.ErrorType
