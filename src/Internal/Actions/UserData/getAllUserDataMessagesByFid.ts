import type { CallOptions } from '@connectrpc/connect'
import { Hex, type Types } from 'ox'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { UserData_fromMessage } from '../../UserData/fromMessage.js'
import type { UserData } from '../../UserData/types.js'

export declare namespace Actions_UserData_GetAllUserDataMessagesByFid {
  type ReturnType = UserData[]
  // @TODO: proper error handling
  type ErrorType = UserData_fromMessage.ErrorType | GlobalErrorType
}
export async function Actions_UserData_getAllUserDataMessagesByFid(
  client: Client,
  parameters: {
    fid: bigint
    pageSize?: number | undefined
    pageToken?: Types.Hex | undefined
    reverse?: boolean | undefined
  },
  options?: CallOptions,
): Promise<Actions_UserData_GetAllUserDataMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllUserDataMessagesByFid(
    {
      fid: parameters.fid,
      ...(parameters.pageSize ? { pageSize: parameters.pageSize } : {}),
      ...(parameters.pageToken
        ? { pageToken: Hex.toBytes(parameters.pageToken) }
        : {}),
      ...(parameters.reverse ? { reverse: parameters.reverse } : {}),
    },
    options,
  )
  return message.messages.map(UserData_fromMessage)
}

Actions_UserData_getAllUserDataMessagesByFid.parseError = (error: unknown) =>
  error as Actions_UserData_GetAllUserDataMessagesByFid.ErrorType
