import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Cast } from '../Cast/types.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { CastAdd_toHex } from './toHex.js'
import { CastAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function CastAdd_toMessageProtobuf(
  parameters: CastAdd_toMessageProtobuf.ParametersType,
): CastAdd_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: CastAdd_toHex(parameters.cast),
        privateKey: parameters.privateKey,
      }),
    ),
    data: CastAdd_toMessageDataProtobuf(parameters.cast),
  })
}

export declare namespace CastAdd_toMessageProtobuf {
  type ParametersType = {
    cast: Omit<Cast, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

CastAdd_toMessageProtobuf.parseError = (error: unknown) =>
  error as CastAdd_toMessageProtobuf.ErrorType
