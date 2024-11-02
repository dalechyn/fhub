import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type { NextPageToken, Pagination } from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { UserData_fromMessage } from '../../UserData/fromMessage.js'
import type { UserData } from '../../UserData/types.js'

export declare namespace Actions_UserData_getAllUserDataMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination
  type ReturnType = { datas: UserData[]; nextPageToken: NextPageToken }
  // @TODO: proper error handling
  type ErrorType = UserData_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_UserData_getAllUserDataMessagesByFid(
  client: Client,
  parameters: Actions_UserData_getAllUserDataMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_UserData_getAllUserDataMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllUserDataMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    datas: message.messages.map(UserData_fromMessage),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_UserData_getAllUserDataMessagesByFid.parseError = (error: unknown) =>
  error as Actions_UserData_getAllUserDataMessagesByFid.ErrorType
