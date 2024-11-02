import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import type { Message } from '../Protobufs/message_pb.js'
import { UserNameType } from '../Protobufs/username_proof_pb.js'
import type { UsernameProof } from './types.js'

export function UsernameProof_fromMessage(
  message: Message,
): UsernameProof_fromMessage.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'usernameProofBody')
    throw new Error('invalid type')
  return {
    meta: Meta_fromMessage(message),
    type:
      message.data.body.value.type === UserNameType.USERNAME_TYPE_FNAME
        ? 'fname'
        : 'ensL1',
    name: message.data.body.value.name.toString(),
    owner: message.data.body.value.owner.toString(),
    signature: Hex.fromBytes(message.data.body.value.signature),
    timestamp: message.data.body.value.timestamp,
    fid: message.data.body.value.fid,
  }
}

export declare namespace UsernameProof_fromMessage {
  type ReturnType = UsernameProof

  type ErrorType = GlobalErrorType
}

UsernameProof_fromMessage.parseError = (error: unknown) =>
  error as UsernameProof_fromMessage.ErrorType
