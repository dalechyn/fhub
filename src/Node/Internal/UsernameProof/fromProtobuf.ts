import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as UsernameProofProtobuf from '../Protobufs/username_proof_pb.js'
import type { UsernameProof } from './types.js'

export function UsernameProof_fromProtobuf(
  message: UsernameProof_fromProtobuf.ParametersType,
): UsernameProof_fromProtobuf.ReturnType {
  // @TODO: error here
  return {
    type:
      message.type === UsernameProofProtobuf.UserNameType.USERNAME_TYPE_FNAME
        ? 'fname'
        : 'ensL1',
    name: Buffer.from(message.name).toString(),
    owner: Hex.fromBytes(message.owner).toString(),
    signature: Hex.fromBytes(message.signature),
    timestamp: message.timestamp,
    fid: message.fid,
  }
}

export declare namespace UsernameProof_fromProtobuf {
  type ParametersType = UsernameProofProtobuf.UserNameProof
  type ReturnType = Omit<UsernameProof, 'meta'>
  type ErrorType = GlobalErrorType
}

UsernameProof_fromProtobuf.parseError = (error: unknown) =>
  error as UsernameProof_fromProtobuf.ErrorType
