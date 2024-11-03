import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_fromProtobuf } from '../CastId/fromProtobuf.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { FrameActionBody } from './types.js'

export function FrameActionBody_fromProtobuf(
  message: FrameActionBody_fromProtobuf.ParametersType,
): FrameActionBody_fromProtobuf.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'frameActionBody') throw new Error('bad case')

  return {
    meta: Meta_fromProtobuf(message),
    url: message.data.body.value.url.toString(),
    buttonIndex: message.data.body.value.buttonIndex as 1 | 2 | 3 | 4,
    castId: message.data.body.value.castId
      ? CastId_fromProtobuf(message.data.body.value.castId)
      : undefined,
    inputText: message.data.body.value.inputText.toString(),
    state: message.data.body.value.state.toString(),
    transactionId: message.data.body.value.transactionId.toString(),
    address: message.data.body.value.address.toString(),
  } as const
}

export declare namespace FrameActionBody_fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = FrameActionBody
  type ErrorType = GlobalErrorType
}

FrameActionBody_fromProtobuf.parseError = (error: unknown) =>
  error as FrameActionBody_fromProtobuf.ErrorType
