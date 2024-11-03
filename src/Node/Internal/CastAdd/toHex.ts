import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Cast } from '../Cast/types.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { CastAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function CastAdd_toHex(
  cast: CastAdd_toHex.ParametersType,
): CastAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(Protobuf.MessageDataSchema, CastAdd_toMessageDataProtobuf(cast)),
  )
}

export declare namespace CastAdd_toHex {
  type ParametersType = Omit<Cast, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

CastAdd_toHex.parseError = (error: unknown) => error as CastAdd_toHex.ErrorType
