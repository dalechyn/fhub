import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import * as Verification from './Verification.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

import { create, toBinary } from '@bufbuild/protobuf'
import { BaseError } from 'ox/Errors'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'

// @TODO: replace by our own BaseError
export class InvalidMessageTypeError extends BaseError {
  override readonly name = 'VerificationAdd.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  const meta = Meta.fromProtobuf(message)
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in VerificationAdd message.')
  if (message.data.body.case !== 'verificationAddAddressBody')
    throw new InvalidMessageTypeError({ hash: meta.hash })
  return Verification.fromProtobuf({
    body: message.data.body.value,
    meta,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  })
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Verification.Verification
  type ErrorType =
    | InvalidMessageTypeError
    | Meta.fromProtobuf.ErrorType
    | GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function VerificationAdd_toHex(
  cast: VerificationAdd_toHex.ParametersType,
): VerificationAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(cast)),
  )
}

export declare namespace VerificationAdd_toHex {
  type ParametersType = Omit<Verification.Verification, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

VerificationAdd_toHex.parseError = (error: unknown) =>
  error as VerificationAdd_toHex.ErrorType

export function toMessageDataProtobuf(
  verification: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: verification.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.VERIFICATION_ADD_ETH_ADDRESS,
    fid: verification.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'verificationAddAddressBody',
      value: Verification.toProtobuf(verification),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<Verification.Verification, 'meta'>
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
        dataBytes: VerificationAdd_toHex(parameters.verification),
        privateKey: parameters.privateKey,
      }),
    ),
    data: toMessageDataProtobuf(parameters.verification),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    verification: Omit<Verification.Verification, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType