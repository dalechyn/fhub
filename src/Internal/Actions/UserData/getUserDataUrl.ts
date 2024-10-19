import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { UserDataType } from '../../Protobufs/message_pb.js'
import {
  type Actions_UserData_GetUserData,
  Actions_UserData_getUserData,
} from './getUserData.js'

export declare namespace Actions_UserData_GetUserDataUrl {
  type ReturnType = Actions_UserData_GetUserData.ReturnType['value']
  type ErrorType = Actions_UserData_GetUserData.ErrorType | GlobalErrorType
}

export async function Actions_UserData_getUserDataUrl(
  client: Client,
  parameters: { fid: bigint },
  options?: CallOptions,
): Promise<Actions_UserData_GetUserDataUrl.ReturnType> {
  const data = await Actions_UserData_getUserData(
    client,
    {
      ...parameters,
      userDataType: UserDataType.URL,
    },
    options,
  )
  return data.value
}

Actions_UserData_getUserDataUrl.parseError = (error: unknown) =>
  error as Actions_UserData_GetUserDataUrl.ErrorType
