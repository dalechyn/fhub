import { create, toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as Reaction from './Reaction.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export function toHex(cast: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(cast)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<Reaction.Reaction, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageDataProtobuf(
  cast: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: cast.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.REACTION_REMOVE,
    fid: cast.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'reactionBody',
      value: Reaction.toProtobuf(cast),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<Reaction.Reaction, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

toMessageDataProtobuf.parseError = (error: unknown) =>
  error as toMessageDataProtobuf.ErrorType

export function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta.toProtobuf(
      Meta.create({
        dataBytes: toHex(parameters.reaction),
        privateKey: parameters.privateKey,
      }),
    ),
    data: toMessageDataProtobuf(parameters.reaction),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    reaction: Omit<Reaction.Reaction, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
