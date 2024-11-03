import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Meta } from '../Meta/types.js'
import type * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Link } from './types.js'

//@TODO: errors
export function Link_fromProtobuf(
  parameters: Link_fromProtobuf.ParametersType,
): Link_fromProtobuf.ReturnType {
  if (parameters.body.target.case !== 'targetFid')
    throw new Error('Invalid target')

  return {
    meta: parameters.meta,
    type: parameters.body.type,
    displayTimestamp: parameters.body.displayTimestamp,
    fid: parameters.body.target.value,
    timestamp: parameters.timestamp,
  }
}

export declare namespace Link_fromProtobuf {
  type ParametersType = {
    body: MessageProtobuf.LinkBody
    meta: Meta
    fid: bigint
    timestamp: number
  }
  type ReturnType = Link
  type ErrorType = GlobalErrorType
}
Link_fromProtobuf.parseError = (error: unknown) =>
  error as Link_fromProtobuf.ErrorType
