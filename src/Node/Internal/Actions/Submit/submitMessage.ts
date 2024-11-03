import type { CallOptions } from '@connectrpc/connect'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import { Message_fromProtobuf } from '../../Message/fromProtobuf.js'
import type { Message } from '../../Message/types.js'
import type * as MessageProtobuf from '../../Protobufs/message_pb.js'

export declare namespace Actions_Submit_submitMessage {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Message
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function Actions_Submit_submitMessage(
  client: Client,
  parameters: Actions_Submit_submitMessage.ParametersType,
  options?: CallOptions,
): Promise<Actions_Submit_submitMessage.ReturnType> {
  const message = await client.connectRpcClient.submitMessage(
    parameters,
    options,
  )
  return Message_fromProtobuf(message)
}

Actions_Submit_submitMessage.parseError = (error: unknown) =>
  error as Actions_Submit_submitMessage.ErrorType
