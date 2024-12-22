import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Account from '../Account.js'
import type * as Client from '../Client.js'

export declare namespace create {
  type ParametersType = {
    recast: Omit<
      Extract<Core.ReactionTarget.ReactionTarget, { type: 'cast' }>,
      'type'
    >
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
  parameters.recast
  const message = Core.ReactionAdd.toMessageProtobuf({
    reaction: {
      type: 'recast',
      target: {
        type: 'cast',
        ...parameters.recast,
      },
      fid: parameters.account.fid,
      timestamp: Math.floor(Date.now() / 1000),
    },
    privateKey: parameters.account.privateKey,
  })
  return Core.Actions.Submit.submitMessage(client, message, options)
}

create.parseError = (error: unknown) => error as create.ErrorType