import { toBinary } from '@bufbuild/protobuf'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { LinkCompactState } from '../LinkCompactState/types.js'
import * as Protobuf from '../Protobufs/message_pb.js'
import { LinkCompactStateAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function LinkCompactStateAdd_toHex(
  link: LinkCompactStateAdd_toHex.ParametersType,
): LinkCompactStateAdd_toHex.ReturnType {
  return Hex.fromBytes(
    toBinary(
      Protobuf.MessageDataSchema,
      LinkCompactStateAdd_toMessageDataProtobuf(link),
    ),
  )
}

export declare namespace LinkCompactStateAdd_toHex {
  type ParametersType = Omit<LinkCompactState, 'meta'>
  type ReturnType = Types.Hex
  type ErrorType = GlobalErrorType
}

LinkCompactStateAdd_toHex.parseError = (error: unknown) =>
  error as LinkCompactStateAdd_toHex.ErrorType
