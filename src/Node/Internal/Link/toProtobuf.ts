import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Link } from './types.js'

export function Link_toProtobuf(
  link: Link_toProtobuf.ParametersType,
): Link_toProtobuf.ReturnType {
  return create(MessageProtobuf.LinkBodySchema, {
    type: link.type,
    ...(link.displayTimestamp
      ? { displayTimestamp: link.displayTimestamp }
      : {}),
    target: { case: 'targetFid', value: link.targetFid },
  })
}

export declare namespace Link_toProtobuf {
  type ParametersType = Omit<Link, 'meta'>
  type ReturnType = MessageProtobuf.LinkBody

  type ErrorType = GlobalErrorType
}

Link_toProtobuf.parseError = (error: unknown) =>
  error as Link_toProtobuf.ErrorType
