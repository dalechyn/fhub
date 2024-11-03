import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import type { Reaction } from '../Reaction/types.js'
import { ReactionAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function ReactionAdd_toHex(
  cast: ReactionAdd_toHex.ParametersType,
): ReactionAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      ReactionAdd_toMessageDataProtobuf(cast),
    ),
  )
}

export declare namespace ReactionAdd_toHex {
  type ParametersType = Omit<Reaction, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

ReactionAdd_toHex.parseError = (error: unknown) =>
  error as ReactionAdd_toHex.ErrorType
