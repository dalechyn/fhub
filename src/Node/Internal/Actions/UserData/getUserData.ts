import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import type { UserDataType } from '../../Protobufs/message_pb.js'
import { UserData_fromProtobuf } from '../../UserData/fromProtobuf.js'
import type { UserData } from '../../UserData/types.js'

export declare namespace Actions_UserData_getUserData {
  type ParametersType = {
    fid: bigint
    userDataType: UserDataType
  }
  type ReturnType = UserData
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}

export async function Actions_UserData_getUserData(
  client: Client,
  parameters: Actions_UserData_getUserData.ParametersType,
  options?: CallOptions,
): Promise<Actions_UserData_getUserData.ReturnType> {
  const message = await client.connectRpcClient.getUserData(parameters, options)
  return UserData_fromProtobuf(message)
}

Actions_UserData_getUserData.parseError = (error: unknown) =>
  error as Actions_UserData_getUserData.ErrorType
