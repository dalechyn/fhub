import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import type { Reaction } from '../Reaction/types.js'
import { ReactionRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function ReactionRemove_toHex(
  cast: ReactionRemove_toHex.ParametersType,
): ReactionRemove_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      ReactionRemove_toMessageDataProtobuf(cast),
    ),
  )
}

export declare namespace ReactionRemove_toHex {
  type ParametersType = Omit<Reaction, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

ReactionRemove_toHex.parseError = (error: unknown) =>
  error as ReactionRemove_toHex.ErrorType
