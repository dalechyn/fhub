import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { CastRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'
import type { CastRemove } from './types.js'

export function CastRemove_toHex(
  cast: CastRemove_toHex.ParametersType,
): CastRemove_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      CastRemove_toMessageDataProtobuf(cast),
    ),
  )
}

export declare namespace CastRemove_toHex {
  type ParametersType = Omit<CastRemove, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

CastRemove_toHex.parseError = (error: unknown) =>
  error as CastRemove_toHex.ErrorType
