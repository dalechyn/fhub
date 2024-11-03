import type { CallOptions } from '@connectrpc/connect'
import { ReactionAdd_toMessageProtobuf } from '../../../Node/Internal/ReactionAdd/toMessageProtobuf.js'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Account } from '../../Account/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Like_create {
  type ParametersType = {
    like: Omit<Extract<NodeTypes.ReactionTarget, { type: 'cast' }>, 'type'>
    account: Account
  }
  type ReturnType = NodeTypes.Message
  type ErrorType = GlobalErrorType
}
export async function Actions_Like_create(
  client: Client,
  parameters: Actions_Like_create.ParametersType,
  options?: CallOptions,
): Promise<Actions_Like_create.ReturnType> {
  parameters.like
  const message = ReactionAdd_toMessageProtobuf({
    reaction: {
      type: 'like',
      target: {
        type: 'cast',
        ...parameters.like,
      },
      fid: parameters.account.fid,
      timestamp: Math.floor(Date.now() / 1000),
    },
    privateKey: parameters.account.privateKey,
  })
  return NodeActions.Submit.submitMessage(client, message, options)
}

Actions_Like_create.parseError = (error: unknown) =>
  error as Actions_Like_create.ErrorType
