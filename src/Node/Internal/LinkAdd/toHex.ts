import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Link } from '../Link/types.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { LinkAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkAdd_toHex(
  link: LinkAdd_toHex.ParametersType,
): LinkAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(Protobuf.MessageDataSchema, LinkAdd_toMessageDataProtobuf(link)),
  )
}

export declare namespace LinkAdd_toHex {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

LinkAdd_toHex.parseError = (error: unknown) => error as LinkAdd_toHex.ErrorType
