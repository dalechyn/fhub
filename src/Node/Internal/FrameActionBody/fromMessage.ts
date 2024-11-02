import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastId_fromMessage } from '../CastId/fromMessage.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import type { Message as Protobufs_Message } from '../Protobufs/message_pb.js'
import type { FrameActionBody } from './types.js'

export function FrameActionBody_fromMessage(
  message: Protobufs_Message,
): FrameActionBody_fromMessage.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'frameActionBody') throw new Error('bad case')

  return {
    meta: Meta_fromMessage(message),
    url: message.data.body.value.url.toString(),
    buttonIndex: message.data.body.value.buttonIndex as 1 | 2 | 3 | 4,
    castId: message.data.body.value.castId
      ? CastId_fromMessage(message.data.body.value.castId)
      : undefined,
    inputText: message.data.body.value.inputText.toString(),
    state: message.data.body.value.state.toString(),
    transactionId: message.data.body.value.transactionId.toString(),
    address: message.data.body.value.address.toString(),
  } as const
}

export declare namespace FrameActionBody_fromMessage {
  type ReturnType = FrameActionBody

  type ErrorType = GlobalErrorType
}

FrameActionBody_fromMessage.parseError = (error: unknown) =>
  error as FrameActionBody_fromMessage.ErrorType
