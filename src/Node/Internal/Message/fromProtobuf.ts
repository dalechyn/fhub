import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { CastAdd_fromMessageProtobuf } from '../CastAdd/fromMessageProtobuf.js'
import { CastRemove_fromMessageProtobuf } from '../CastRemove/fromMessageProtobuf.js'
import { FrameActionBody_fromProtobuf } from '../FrameActionBody/fromProtobuf.js'
import { Link_fromMessageProtobuf } from '../Link/fromMessageProtobuf.js'
import { LinkCompactState_fromMessageProtobuf } from '../LinkCompactState/fromMessageProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import { Reaction_fromMessageProtobuf } from '../Reaction/fromMessageProtobuf.js'
import { UserData_fromProtobuf } from '../UserData/fromProtobuf.js'
import { UsernameProof_fromProtobuf } from '../UsernameProof/fromProtobuf.js'
import { VerificationAdd_fromMessageProtobuf } from '../VerificationAdd/fromMessageProtobuf.js'
import { VerificationRemove_fromMessageProtobuf } from '../VerificationRemoval/fromMessageProtobuf.js'
import type { Message } from './types.js'

export function Message_fromProtobuf(
  message: Message_fromProtobuf.ParametersType,
): Message_fromProtobuf.ReturnType {
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Message message.')
  if (message.data.type === MessageProtobuf.MessageType.CAST_ADD)
    return { type: 'castAdd', data: CastAdd_fromMessageProtobuf(message) }
  if (
    message.data.type === MessageProtobuf.MessageType.CAST_REMOVE &&
    message.data.body.case === 'castRemoveBody'
  )
    return {
      type: 'castRemove',
      data: CastRemove_fromMessageProtobuf(message),
    }

  if (message.data.type === MessageProtobuf.MessageType.REACTION_ADD)
    return {
      type: 'reactionAdd',
      data: Reaction_fromMessageProtobuf(message),
    }
  if (message.data.type === MessageProtobuf.MessageType.REACTION_REMOVE)
    return {
      type: 'reactionRemove',
      data: Reaction_fromMessageProtobuf(message),
    }
  if (message.data.type === MessageProtobuf.MessageType.LINK_ADD)
    return { type: 'linkAdd', data: Link_fromMessageProtobuf(message) }
  if (message.data.type === MessageProtobuf.MessageType.LINK_REMOVE)
    return { type: 'linkRemove', data: Link_fromMessageProtobuf(message) }
  if (
    message.data.type ===
    MessageProtobuf.MessageType.VERIFICATION_ADD_ETH_ADDRESS
  ) {
    return {
      type: 'verificationAdd',
      data: VerificationAdd_fromMessageProtobuf(message),
    }
  }
  if (message.data.type === MessageProtobuf.MessageType.VERIFICATION_REMOVE) {
    return {
      type: 'verificationRemove',
      data: VerificationRemove_fromMessageProtobuf(message),
    }
  }
  // TODO: REFACTOR

  ///
  ///
  ///
  if (message.data.type === MessageProtobuf.MessageType.USER_DATA_ADD)
    return { type: 'userDataAdd', data: UserData_fromProtobuf(message) }
  if (message.data.type === MessageProtobuf.MessageType.USERNAME_PROOF)
    return { type: 'usernameProof', data: UsernameProof_fromProtobuf(message) }
  if (message.data.type === MessageProtobuf.MessageType.FRAME_ACTION)
    return { type: 'frameAction', data: FrameActionBody_fromProtobuf(message) }

  ///
  /////
  /////
  /////
  /////
  if (message.data.type === MessageProtobuf.MessageType.LINK_COMPACT_STATE)
    return {
      type: 'linkCompactState',
      data: LinkCompactState_fromMessageProtobuf(message),
    }
  throw new Error('Not expected')
}

export declare namespace Message_fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Message
  // @TODO: errors
  type ErrorType = GlobalErrorType
}

Message_fromProtobuf.parseError = (error: unknown) =>
  error as Message_fromProtobuf.ErrorType
