import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Pagination_getPageToken } from '../../Pagination/getPageToken.js'
import type {
  NextPageToken,
  PaginationWithTimestamps,
} from '../../Pagination/types.js'
import { Pagination_unwrap } from '../../Pagination/unwrap.js'
import { UserData_fromProtobuf } from '../../UserData/fromProtobuf.js'
import type { UserData } from '../../UserData/types.js'

export declare namespace Actions_UserData_getUserDataByFid {
  type ParametersType = {
    fid: bigint
  } & PaginationWithTimestamps
  type ReturnType = { datas: UserData[]; nextPageToken: NextPageToken }
  type ErrorType = UserData_fromProtobuf.ErrorType | GlobalErrorType
}
export async function Actions_UserData_getUserDataByFid(
  client: Client,
  parameters: Actions_UserData_getUserDataByFid.ParametersType,
  options?: CallOptions,
): Promise<Actions_UserData_getUserDataByFid.ReturnType> {
  const message = await client.connectRpcClient.getUserDataByFid(
    {
      fid: parameters.fid,
      ...Pagination_unwrap(parameters),
    },
    options,
  )
  return {
    datas: message.messages.map(UserData_fromProtobuf),
    nextPageToken: Pagination_getPageToken(message.nextPageToken),
  }
}

Actions_UserData_getUserDataByFid.parseError = (error: unknown) =>
  error as Actions_UserData_getUserDataByFid.ErrorType
