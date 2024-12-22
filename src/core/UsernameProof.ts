import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from './Error.js'
import * as Meta from './Meta.js'
import type * as MessageProtobuf from './protobufs/message_pb.js'
import * as UsernameProofProtobuf from './protobufs/username_proof_pb.js'

export type UsernameProof = {
  meta: Meta.Meta
  timestamp: bigint
  name: string
  owner: string
  signature: Types.Hex
  fid: bigint
  type: 'fname' | 'ensL1'
}

export function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
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

export declare namespace fromProtobuf {
  type ParametersType = UsernameProofProtobuf.UserNameProof
  type ReturnType = Omit<UsernameProof, 'meta'>
  type ErrorType = GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function fromMessageProtobuf(
  message: fromMessageProtobuf.ParametersType,
): fromMessageProtobuf.ReturnType {
  // @TODO: error here
  if (message.data?.body.case !== 'usernameProofBody')
    throw new Error('invalid type')
  return {
    meta: Meta.fromProtobuf(message),
    ...fromProtobuf(message.data.body.value),
  }
}

export declare namespace fromMessageProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = UsernameProof
  type ErrorType = GlobalErrorType
}

fromMessageProtobuf.parseError = (error: unknown) =>
  error as fromMessageProtobuf.ErrorType
