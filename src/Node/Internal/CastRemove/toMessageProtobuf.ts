import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { CastRemove_toHex } from './toHex.js'
import { CastRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'
import type { CastRemove } from './types.js'

export function CastRemove_toMessageProtobuf(
  parameters: CastRemove_toMessageProtobuf.ParametersType,
): CastRemove_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: CastRemove_toHex(parameters.castRemove),
        privateKey: parameters.privateKey,
      }),
    ),
    data: CastRemove_toMessageDataProtobuf(parameters.castRemove),
  })
}

export declare namespace CastRemove_toMessageProtobuf {
  type ParametersType = {
    castRemove: Omit<CastRemove, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

CastRemove_toMessageProtobuf.parseError = (error: unknown) =>
  error as CastRemove_toMessageProtobuf.ErrorType
