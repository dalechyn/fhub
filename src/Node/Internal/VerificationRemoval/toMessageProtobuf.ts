import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { VerificationRemove_toHex } from './toHex.js'
import { VerificationRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'
import type { VerificationRemove } from './types.js'

export function VerificationRemove_toMessageProtobuf(
  parameters: VerificationRemove_toMessageProtobuf.ParametersType,
): VerificationRemove_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: VerificationRemove_toHex(parameters.castRemove),
        privateKey: parameters.privateKey,
      }),
    ),
    data: VerificationRemove_toMessageDataProtobuf(parameters.castRemove),
  })
}

export declare namespace VerificationRemove_toMessageProtobuf {
  type ParametersType = {
    castRemove: Omit<VerificationRemove, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

VerificationRemove_toMessageProtobuf.parseError = (error: unknown) =>
  error as VerificationRemove_toMessageProtobuf.ErrorType
