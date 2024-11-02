import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { PaginationWithTimestamps } from './types.js'

export function Pagination_unwrap(
  parameters: Pagination_unwrap.ParametersType,
): Pagination_unwrap.ReturnType {
  return {
    ...(parameters.pageSize ? { pageSize: parameters.pageSize } : {}),
    ...(parameters.pageToken
      ? { pageToken: Hex.toBytes(parameters.pageToken) }
      : {}),
    ...(parameters.reverse ? { reverse: parameters.reverse } : {}),
    ...(parameters.startTimestamp
      ? { startTimestamp: parameters.startTimestamp }
      : {}),
    ...(parameters.stopTimestamp
      ? { stopTimestamp: parameters.stopTimestamp }
      : {}),
  }
}

export declare namespace Pagination_unwrap {
  type ParametersType = PaginationWithTimestamps
  type ReturnType = {
    stopTimestamp?: bigint
    startTimestamp?: bigint
    reverse?: true
    pageToken?: any
    pageSize?: number
  }
  type ErrorType = GlobalErrorType
}
