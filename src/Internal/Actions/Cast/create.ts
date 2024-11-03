import type { CallOptions } from '@connectrpc/connect'
import { CastAdd_toMessageProtobuf } from '../../../Node/Internal/CastAdd/toMessageProtobuf.js'
import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Account } from '../../Account/types.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_create {
  type ParametersType = {
    cast: Omit<NodeTypes.Cast, 'meta' | 'fid' | 'timestamp'>
    account: Account
  }
  type ReturnType = NodeTypes.Message
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_create(
  client: Client,
  parameters: Actions_Cast_create.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_create.ReturnType> {
  const message = CastAdd_toMessageProtobuf({
    cast: {
      ...parameters.cast,
      fid: parameters.account.fid,
      timestamp: Math.floor(Date.now() / 1000),
    },
    privateKey: parameters.account.privateKey,
  })
  return NodeActions.Submit.submitMessage(client, message, options)
}

Actions_Cast_create.parseError = (error: unknown) =>
  error as Actions_Cast_create.ErrorType
