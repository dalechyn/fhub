import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Link } from '../Link/types.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { LinkRemove_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkRemove_toHex(
  link: LinkRemove_toHex.ParametersType,
): LinkRemove_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      LinkRemove_toMessageDataProtobuf(link),
    ),
  )
}

export declare namespace LinkRemove_toHex {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

LinkRemove_toHex.parseError = (error: unknown) =>
  error as LinkRemove_toHex.ErrorType
