import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Link } from '../Link/types.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { LinkRemove_toHex } from './toHex.js'
import { LinkRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkRemove_toMessageProtobuf(
  parameters: LinkRemove_toMessageProtobuf.ParametersType,
): LinkRemove_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: LinkRemove_toHex(parameters.link),
        privateKey: parameters.privateKey,
      }),
    ),
    data: LinkRemove_toMessageDataProtobuf(parameters.link),
  })
}

export declare namespace LinkRemove_toMessageProtobuf {
  type ParametersType = {
    link: Omit<Link, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

LinkRemove_toMessageProtobuf.parseError = (error: unknown) =>
  error as LinkRemove_toMessageProtobuf.ErrorType
