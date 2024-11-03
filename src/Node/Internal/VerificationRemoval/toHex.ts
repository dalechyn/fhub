import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { VerificationRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'
import type { VerificationRemove } from './types.js'

export function VerificationRemove_toHex(
  cast: VerificationRemove_toHex.ParametersType,
): VerificationRemove_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      VerificationRemove_toMessageDataProtobuf(cast),
    ),
  )
}

export declare namespace VerificationRemove_toHex {
  type ParametersType = Omit<VerificationRemove, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

VerificationRemove_toHex.parseError = (error: unknown) =>
  error as VerificationRemove_toHex.ErrorType
