import type { CallOptions } from '@connectrpc/connect'
import { LinkAdd_toMessageProtobuf } from '../../../Node/Internal/LinkAdd/toMessageProtobuf.js'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Account } from '../../Account/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Follow_create {
  type ParametersType = {
    follow: Omit<NodeTypes.Link, 'meta' | 'fid' | 'timestamp' | 'type'>
    account: Account
  }
  type ReturnType = NodeTypes.Message
  type ErrorType = GlobalErrorType
}
export async function Actions_Follow_create(
  client: Client,
  parameters: Actions_Follow_create.ParametersType,
  options?: CallOptions,
): Promise<Actions_Follow_create.ReturnType> {
  const message = LinkAdd_toMessageProtobuf({
    link: {
      type: 'follow',
      ...parameters.follow,
      fid: parameters.account.fid,
      timestamp: Math.floor(Date.now() / 1000),
    },
    privateKey: parameters.account.privateKey,
  })
  return NodeActions.Submit.submitMessage(client, message, options)
}

Actions_Follow_create.parseError = (error: unknown) =>
  error as Actions_Follow_create.ErrorType
