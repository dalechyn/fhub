import type * as Cast from './Cast.js'
import * as CastAdd from './CastAdd.js'
import * as CastRemove from './CastRemove.js'
import type { GlobalErrorType } from './Error.js'
import * as FrameActionBody from './FrameActionBody.js'
import * as Link from './Link.js'
import * as LinkCompactState from './LinkCompactState.js'
import * as Reaction from './Reaction.js'
import * as UserData from './UserData.js'
import * as UsernameProof from './UsernameProof.js'
import type * as Verification from './Verification.js'
import * as VerificationAdd from './VerificationAdd.js'
import * as VerificationRemove from './VerificationRemoval.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

export type Message =
  | {
      type: 'castAdd'
      data: Cast.Cast
    }
  | {
      type: 'castRemove'
      data: CastRemove.CastRemove
    }
  | {
      type: 'reactionAdd' | 'reactionRemove'
      data: Reaction.Reaction
    }
  | {
      type: 'userDataAdd'
      data: UserData.UserData
    }
  | {
      type: 'linkAdd' | 'linkRemove'
      data: Link.Link
    }
  | {
      type: 'verificationAdd'
      data: Verification.Verification
    }
  | {
      type: 'verificationRemove'
      data: VerificationRemove.VerificationRemove
    }
  | {
      type: 'usernameProof'
      data: UsernameProof.UsernameProof
    }
  | {
      type: 'frameAction'
      data: FrameActionBody.FrameActionBody
    }
  | {
      type: 'linkCompactState'
      data: LinkCompactState.LinkCompactState
    }

export function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Message message.')
  if (message.data.type === MessageProtobuf.MessageType.CAST_ADD)
    return { type: 'castAdd', data: CastAdd.fromMessageProtobuf(message) }
  if (
    message.data.type === MessageProtobuf.MessageType.CAST_REMOVE &&
    message.data.body.case === 'castRemoveBody'
  )
    return {
      type: 'castRemove',
      data: CastRemove.fromMessageProtobuf(message),
    }

  if (message.data.type === MessageProtobuf.MessageType.REACTION_ADD)
    return {
      type: 'reactionAdd',
      data: Reaction.fromMessageProtobuf(message),
    }
  if (message.data.type === MessageProtobuf.MessageType.REACTION_REMOVE)
    return {
      type: 'reactionRemove',
      data: Reaction.fromMessageProtobuf(message),
    }
  if (message.data.type === MessageProtobuf.MessageType.LINK_ADD)
    return { type: 'linkAdd', data: Link.fromMessageProtobuf(message) }
  if (message.data.type === MessageProtobuf.MessageType.LINK_REMOVE)
    return { type: 'linkRemove', data: Link.fromMessageProtobuf(message) }
  if (
    message.data.type ===
    MessageProtobuf.MessageType.VERIFICATION_ADD_ETH_ADDRESS
  ) {
    return {
      type: 'verificationAdd',
      data: VerificationAdd.fromMessageProtobuf(message),
    }
  }
  if (message.data.type === MessageProtobuf.MessageType.VERIFICATION_REMOVE) {
    return {
      type: 'verificationRemove',
      data: VerificationRemove.fromMessageProtobuf(message),
    }
  }
  // TODO: REFACTOR

  ///
  ///
  ///
  if (message.data.type === MessageProtobuf.MessageType.USER_DATA_ADD)
    return { type: 'userDataAdd', data: UserData.fromMessageProtobuf(message) }
  if (message.data.type === MessageProtobuf.MessageType.USERNAME_PROOF)
    return {
      type: 'usernameProof',
      data: UsernameProof.fromMessageProtobuf(message),
    }
  if (message.data.type === MessageProtobuf.MessageType.FRAME_ACTION)
    return { type: 'frameAction', data: FrameActionBody.fromProtobuf(message) }

  ///
  /////
  /////
  /////
  /////
  if (message.data.type === MessageProtobuf.MessageType.LINK_COMPACT_STATE)
    return {
      type: 'linkCompactState',
      data: LinkCompactState.fromMessageProtobuf(message),
    }
  throw new Error('Not expected')
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Message
  // @TODO: errors
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType
