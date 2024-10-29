import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { UserDataType } from '../../Protobufs/message_pb.js'
import { Actions_UserData_getUserData } from './getUserData.js'

export declare namespace Actions_UserData_getUserDataLocation {
  type ParametersType = { fid: bigint }
  type ReturnType = Actions_UserData_getUserData.ReturnType['value']
  type ErrorType = Actions_UserData_getUserData.ErrorType | GlobalErrorType
}

export async function Actions_UserData_getUserDataLocation(
  client: Client,
  parameters: Actions_UserData_getUserDataLocation.ParametersType,
  options?: CallOptions,
): Promise<Actions_UserData_getUserDataLocation.ReturnType> {
  const data = await Actions_UserData_getUserData(
    client,
    {
      ...parameters,
      userDataType: UserDataType.LOCATION,
    },
    options,
  )
  return data.value
}

Actions_UserData_getUserDataLocation.parseError = (error: unknown) =>
  error as Actions_UserData_getUserDataLocation.ErrorType
