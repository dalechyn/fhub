import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Reaction } from '../Reaction/types.js'
import { ReactionAdd_toHex } from './toHex.js'
import { ReactionAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function ReactionAdd_toMessageProtobuf(
  parameters: ReactionAdd_toMessageProtobuf.ParametersType,
): ReactionAdd_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: ReactionAdd_toHex(parameters.reaction),
        privateKey: parameters.privateKey,
      }),
    ),
    data: ReactionAdd_toMessageDataProtobuf(parameters.reaction),
  })
}

export declare namespace ReactionAdd_toMessageProtobuf {
  type ParametersType = {
    reaction: Omit<Reaction, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

ReactionAdd_toMessageProtobuf.parseError = (error: unknown) =>
  error as ReactionAdd_toMessageProtobuf.ErrorType
