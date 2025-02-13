import { toBinary } from '@bufbuild/protobuf'
import { create } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { Account } from '../fhub/Account.js'
import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import type { GlobalErrorType } from './Error.js'
import * as Link from './Link.js'
import * as Meta from './Meta.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export function toMessageDataProtobuf(
  link: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: link.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.LINK_REMOVE,
    fid: link.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'linkBody',
      value: Link.toProtobuf(link),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<Link.Link, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

toMessageDataProtobuf.parseError = (error: unknown) =>
  error as toMessageDataProtobuf.ErrorType

export function toHex(link: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(link)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<Link.Link, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export async function toMessageProtobuf(
  parameters: toMessageProtobuf.ParametersType,
): toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta.toProtobuf(
      await Meta.create({
        dataBytes: toHex({ fid: parameters.account.fid, ...parameters.link }),
        ...parameters.account,
      }),
    ),
    data: toMessageDataProtobuf({
      fid: parameters.account.fid,
      ...parameters.link,
    }),
  })
}

export declare namespace toMessageProtobuf {
  type ParametersType = {
    link: Omit<Link.Link, 'meta' | 'fid'>
    account: Account
  }
  type ReturnType = Promise<MessageProtobuf.Message>

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
