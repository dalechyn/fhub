import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Cast_fromMessage } from '../Cast/fromMessage.js'
import { FrameActionBody_fromMessage } from '../FrameActionBody/fromMessage.js'
import { Link_fromMessage } from '../Link/fromMessage.js'
import { LinkCompactState_fromMessage } from '../LinkCompactState/fromMessage.js'
import {
  MessageType,
  type Message as ProtobufMessage,
} from '../Protobufs/message_pb.js'
import { Reaction_fromMessage } from '../Reaction/fromMessage.js'
import { UserData_fromMessage } from '../UserData/fromMessage.js'
import { UsernameProof_fromMessage } from '../UsernameProof/fromMessage.js'
import { Verification_fromMessage } from '../Verification/fromMessage.js'
import { VerificationRemoval_fromMessage } from '../VerificationRemoval/fromMessage.js'
import type { Message } from './types.js'

export function Message_fromMessage(
  message: ProtobufMessage,
): Message_fromMessage.ReturnType {
  // @TODO: separate error here
  if (!message.data)
    throw new Error('`data` must be defined in Message message.')
  if (message.data.type === MessageType.CAST_ADD)
    return { type: 'castAdd', cast: Cast_fromMessage(message) }
  if (
    message.data.type === MessageType.CAST_REMOVE &&
    message.data.body.case === 'castRemoveBody'
  )
    return {
      type: 'castRemove',
      hash: Hex.fromBytes(message.data.body.value.targetHash),
    }

  if (message.data.type === MessageType.REACTION_ADD)
    return { type: 'reactionAdd', reaction: Reaction_fromMessage(message) }
  if (message.data.type === MessageType.REACTION_REMOVE)
    return { type: 'reactionRemove', reaction: Reaction_fromMessage(message) }
  if (message.data.type === MessageType.LINK_ADD)
    return { type: 'linkAdd', link: Link_fromMessage(message) }
  if (message.data.type === MessageType.LINK_REMOVE)
    return { type: 'linkRemove', link: Link_fromMessage(message) }
  if (message.data.type === MessageType.VERIFICATION_ADD_ETH_ADDRESS) {
    return {
      type: 'verificationAdd',
      verification: Verification_fromMessage(message),
    }
  }
  if (message.data.type === MessageType.VERIFICATION_REMOVE) {
    return {
      type: 'verificationRemove',
      verification: VerificationRemoval_fromMessage(message),
    }
  }
  if (message.data.type === MessageType.USER_DATA_ADD)
    return { type: 'userData', data: UserData_fromMessage(message) }
  if (message.data.type === MessageType.USERNAME_PROOF)
    return { type: 'usernameProof', proof: UsernameProof_fromMessage(message) }
  if (message.data.type === MessageType.FRAME_ACTION)
    return { type: 'frameAction', action: FrameActionBody_fromMessage(message) }
  if (message.data.type === MessageType.LINK_COMPACT_STATE)
    return {
      type: 'linkCompactState',
      state: LinkCompactState_fromMessage(message),
    }
  throw new Error('Not expected')
}

export declare namespace Message_fromMessage {
  type ReturnType = Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

Message_fromMessage.parseError = (error: unknown) =>
  error as Message_fromMessage.ErrorType
