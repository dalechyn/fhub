import type { CallOptions } from '@connectrpc/connect'
import { Actions as NodeActions } from '../../../Node/index.js'
import type { Account } from '../../Account/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'
import { Actions_Follow_create } from './create.js'

export declare namespace Actions_Follow_createByUsername {
  type ParametersType = {
    follow: Omit<
      Actions_Follow_create.ParametersType['follow'],
      'targetFid'
    > & { username: string }

    account: Account
  }
  type ReturnType = Actions_Follow_create.ReturnType
  type ErrorType = Actions_Follow_create.ErrorType | GlobalErrorType
}
export async function Actions_Follow_createByUsername(
  client: Client,
  parameters: Actions_Follow_createByUsername.ParametersType,
  options?: CallOptions,
): Promise<Actions_Follow_createByUsername.ReturnType> {
  const { fid } = await NodeActions.UsernameProof.getUsernameProof(client, {
    name: parameters.follow.username,
  })
  return Actions_Follow_create(
    client,
    {
      follow: { ...parameters.follow, targetFid: fid },
      account: parameters.account,
    },
    options,
  )
}

Actions_Follow_createByUsername.parseError = (error: unknown) =>
  error as Actions_Follow_createByUsername.ErrorType
