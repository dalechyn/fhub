import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Link } from '../Link/types.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { LinkAdd_toHex } from './toHex.js'
import { LinkAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkAdd_toMessageProtobuf(
  parameters: LinkAdd_toMessageProtobuf.ParametersType,
): LinkAdd_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: LinkAdd_toHex(parameters.link),
        privateKey: parameters.privateKey,
      }),
    ),
    data: LinkAdd_toMessageDataProtobuf(parameters.link),
  })
}

export declare namespace LinkAdd_toMessageProtobuf {
  type ParametersType = {
    link: Omit<Link, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

LinkAdd_toMessageProtobuf.parseError = (error: unknown) =>
  error as LinkAdd_toMessageProtobuf.ErrorType
