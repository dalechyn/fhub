import { create, toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type VerificationRemove = {
  meta: Meta.Meta
  address: string
  protocol: 'ethereum' | 'solana'
  fid: bigint
  timestamp: number
}

export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'verificationRemoveBody')
    throw new Error('bad case')

  return {
    fid: message.data.fid,
    timestamp: message.data.timestamp,
    meta: Meta.fromProtobuf(message),
    address: message.data.body.value.address.toString(),
    protocol:
      message.data.body.value.protocol === MessageProtobuf.Protocol.SOLANA
        ? 'solana'
        : 'ethereum',
  } as const
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = VerificationRemove
  type ErrorType = GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function toHex(cast: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(cast)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<VerificationRemove, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageDataProtobuf(
  verificationRemove: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: verificationRemove.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.VERIFICATION_REMOVE,
    fid: verificationRemove.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'verificationRemoveBody',
      value: create(MessageProtobuf.VerificationRemoveBodySchema, {
        address: Hex.toBytes(Hex.fromString(verificationRemove.address)),
        protocol:
          verificationRemove.protocol === 'solana'
            ? MessageProtobuf.Protocol.SOLANA
            : MessageProtobuf.Protocol.ETHEREUM,
      }),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<VerificationRemove, 'meta'>
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
    castRemove: Omit<VerificationRemove, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
