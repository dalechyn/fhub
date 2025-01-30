import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Account from '../Account.js'
import type * as Client from '../Client.js'

export declare namespace create {
  type ParametersType = {
    follow: Omit<Core.Link.Link, 'meta' | 'fid' | 'timestamp' | 'type'>
    account: Account.Account
  }
  type ReturnType = Core.Message.Message
  type ErrorType = GlobalErrorType
}
export async function create(
  client: Client.Client,
  parameters: create.ParametersType,
  options?: CallOptions,
): Promise<create.ReturnType> {
  const message = await Core.LinkAdd.toMessageProtobuf({
    link: {
      type: 'follow',
      ...parameters.follow,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return Core.Actions.Submit.submitMessage(client, message, options)
}

create.parseError = (error: unknown) => error as create.ErrorType

export declare namespace createByUsername {
  type ParametersType = {
    follow: Omit<create.ParametersType['follow'], 'targetFid'> & {
      username: string
    }

    account: Account.Account
  }
  type ReturnType = create.ReturnType
  type ErrorType = create.ErrorType | GlobalErrorType
}
export async function createByUsername(
  client: Client.Client,
  parameters: createByUsername.ParametersType,
  options?: CallOptions,
): Promise<createByUsername.ReturnType> {
  const { fid } = await Core.Actions.UsernameProof.get(client, {
    name: parameters.follow.username,
  })
  return create(
    client,
    {
      follow: { ...parameters.follow, targetFid: fid },
      account: parameters.account,
    },
    options,
  )
}

createByUsername.parseError = (error: unknown) =>
  error as createByUsername.ErrorType
