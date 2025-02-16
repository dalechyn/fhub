import { FARCASTER_EPOCH_TIMESTAMP } from './Constants.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

import { create, toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { Account } from '../fhub/Account.js'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'

export type LinkCompactState = {
  meta: Meta.Meta
  type: string
  fids: bigint[]
  fid: bigint
  timestamp: number
}

//@TODO: errors
export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  if (!message.data) throw new Error('Link must have data')

  if (message.data.body.case !== 'linkCompactStateBody')
    throw new Error('Not linkCompactStateBody message')

  return {
    meta: Meta.fromProtobuf(message),
    type: message.data.body.value.type,
    fids: message.data.body.value.targetFids,
    fid: message.data.fid,
    timestamp: message.data.timestamp,
  }
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = LinkCompactState
  type ErrorType = GlobalErrorType
}
fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType

export function toHex(link: toHex.ParametersType): toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(MessageProtobuf.MessageDataSchema, toMessageDataProtobuf(link)),
  )
}

export declare namespace toHex {
  type ParametersType = Omit<LinkCompactState, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

toHex.parseError = (error: unknown) => error as toHex.ErrorType

export function toMessageDataProtobuf(
  link: toMessageDataProtobuf.ParametersType,
): toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: link.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.LINK_COMPACT_STATE,
    fid: link.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'linkCompactStateBody',
      value: create(MessageProtobuf.LinkCompactStateBodySchema, {
        type: link.type,
        targetFids: link.fids,
      }),
    },
  })
}

export declare namespace toMessageDataProtobuf {
  type ParametersType = Omit<LinkCompactState, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

toMessageDataProtobuf.parseError = (error: unknown) =>
  error as toMessageDataProtobuf.ErrorType

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
    link: Omit<LinkCompactState, 'meta' | 'fid'>
    account: Account
  }
  type ReturnType = Promise<MessageProtobuf.Message>

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

toMessageProtobuf.parseError = (error: unknown) =>
  error as toMessageProtobuf.ErrorType
