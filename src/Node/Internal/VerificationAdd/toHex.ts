import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import type { Verification } from '../Verification/types.js'
import { VerificationAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function VerificationAdd_toHex(
  cast: VerificationAdd_toHex.ParametersType,
): VerificationAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      VerificationAdd_toMessageDataProtobuf(cast),
    ),
  )
}

export declare namespace VerificationAdd_toHex {
  type ParametersType = Omit<Verification, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

VerificationAdd_toHex.parseError = (error: unknown) =>
  error as VerificationAdd_toHex.ErrorType
