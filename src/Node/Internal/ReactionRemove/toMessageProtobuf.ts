import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Reaction } from '../Reaction/types.js'
import { ReactionRemove_toHex } from './toHex.js'
import { ReactionRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function ReactionRemove_toMessageProtobuf(
  parameters: ReactionRemove_toMessageProtobuf.ParametersType,
): ReactionRemove_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: ReactionRemove_toHex(parameters.reaction),
        privateKey: parameters.privateKey,
      }),
    ),
    data: ReactionRemove_toMessageDataProtobuf(parameters.reaction),
  })
}

export declare namespace ReactionRemove_toMessageProtobuf {
  type ParametersType = {
    reaction: Omit<Reaction, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

ReactionRemove_toMessageProtobuf.parseError = (error: unknown) =>
  error as ReactionRemove_toMessageProtobuf.ErrorType
