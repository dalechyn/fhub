import * as CastId from './CastId.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import type * as MessageProtobuf from './protobufs/message_pb.js'

export type FrameActionBody = {
  meta: Meta.Meta
  url: string
  buttonIndex: 1 | 2 | 3 | 4
  castId: CastId.CastId | undefined
  inputText: string
  state: string
  transactionId: string
  address: string
}

export function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'frameActionBody') throw new Error('bad case')

  return {
    meta: Meta.fromProtobuf(message),
    url: message.data.body.value.url.toString(),
    buttonIndex: message.data.body.value.buttonIndex as 1 | 2 | 3 | 4,
    castId: message.data.body.value.castId
      ? CastId.fromProtobuf(message.data.body.value.castId)
      : undefined,
    inputText: message.data.body.value.inputText.toString(),
    state: message.data.body.value.state.toString(),
    transactionId: message.data.body.value.transactionId.toString(),
    address: message.data.body.value.address.toString(),
  } as const
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = FrameActionBody
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType
