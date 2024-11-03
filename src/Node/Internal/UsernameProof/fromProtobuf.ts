import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromProtobuf } from '../Meta/fromProtobuf.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import * as UsernameProofProtobuf from '../Protobufs/username_proof_pb.js'
import type { UsernameProof } from './types.js'

export function UsernameProof_fromProtobuf(
  message: UsernameProof_fromProtobuf.ParametersType,
): UsernameProof_fromProtobuf.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'usernameProofBody')
    throw new Error('invalid type')
  return {
    meta: Meta_fromProtobuf(message),
    type:
      message.data.body.value.type ===
      UsernameProofProtobuf.UserNameType.USERNAME_TYPE_FNAME
        ? 'fname'
        : 'ensL1',
    name: message.data.body.value.name.toString(),
    owner: message.data.body.value.owner.toString(),
    signature: Hex.fromBytes(message.data.body.value.signature),
    timestamp: message.data.body.value.timestamp,
    fid: message.data.body.value.fid,
  }
}

export declare namespace UsernameProof_fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = UsernameProof
  type ErrorType = GlobalErrorType
}

UsernameProof_fromProtobuf.parseError = (error: unknown) =>
  error as UsernameProof_fromProtobuf.ErrorType
