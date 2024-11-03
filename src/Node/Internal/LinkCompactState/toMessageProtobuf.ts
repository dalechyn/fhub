import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { LinkCompactState } from '../LinkCompactState/types.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { LinkCompactStateAdd_toHex } from './toHex.js'
import { LinkCompactStateAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkCompactStateAdd_toMessageProtobuf(
  parameters: LinkCompactStateAdd_toMessageProtobuf.ParametersType,
): LinkCompactStateAdd_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: LinkCompactStateAdd_toHex(parameters.link),
        privateKey: parameters.privateKey,
      }),
    ),
    data: LinkCompactStateAdd_toMessageDataProtobuf(parameters.link),
  })
}

export declare namespace LinkCompactStateAdd_toMessageProtobuf {
  type ParametersType = {
    link: Omit<LinkCompactState, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

LinkCompactStateAdd_toMessageProtobuf.parseError = (error: unknown) =>
  error as LinkCompactStateAdd_toMessageProtobuf.ErrorType
