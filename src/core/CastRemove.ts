import { Hex, type Types } from 'ox'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

import { create, toBinary } from '@bufbuild/protobuf'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'

export type CastRemove = {
  meta: Meta.Meta
  hash: Types.Hex
  fid: bigint
  timestamp: number
}

export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  const meta = Meta.fromProtobuf(message)

  // @TODO: separate error here
  if (!message.data) throw new Error('`data` must be defined in Cast message.')
  if (message.data.body.case !== 'castRemoveBody')
    throw new Error('no cast remove body')

  return {
    meta,
    hash: Hex.fromBytes(message.data.body.value.targetHash),
    fid: message.data.fid,
    timestamp: FARCASTER_EPOCH_TIMESTAMP + message.data.timestamp,
  }
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = CastRemove
  type ErrorType = Meta.fromProtobuf.ErrorType | GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function toHex(cast: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(cast)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<CastRemove, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageDataProtobuf(
  castRemoval: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: castRemoval.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.CAST_REMOVE,
    fid: castRemoval.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'castRemoveBody',
      value: create(MessageProtobuf.CastRemoveBodySchema, {
        targetHash: Hex.toBytes(castRemoval.hash),
      }),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<CastRemove, 'meta'>
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
        dataBytes: toHex(parameters.castRemove),
        privateKey: parameters.privateKey,
      }),
    ),
    data: toMessageDataProtobuf(parameters.castRemove),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    castRemove: Omit<CastRemove, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
