import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import type { UserDataType } from '../../Protobufs/message_pb.js'
import { UserData_fromMessage } from '../../UserData/fromMessage.js'
import type { UserData } from '../../UserData/types.js'

export declare namespace Actions_UserData_GetUserData {
  type ReturnType = UserData
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}

export async function Actions_UserData_getUserData(
  client: Client,
  parameters: {
    fid: bigint
    userDataType: UserDataType
  },
  options?: CallOptions,
): Promise<Actions_UserData_GetUserData.ReturnType> {
  const message = await client.connectRpcClient.getUserData(parameters, options)
  return UserData_fromMessage(message)
}

Actions_UserData_getUserData.parseError = (error: unknown) =>
  error as Actions_UserData_GetUserData.ErrorType
