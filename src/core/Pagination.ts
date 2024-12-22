import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from './Error.js'

export type Pagination = {
  pageSize?: number | undefined
  pageToken?: Types.Hex | undefined
  reverse?: boolean | undefined
}

export type PaginationWithTimestamps = Pagination & {
  startTimestamp?: bigint | undefined
  stopTimestamp?: bigint | undefined
}

export type NextPageToken = Types.Hex | null

export function getPageToken(
  pageToken: Pagination_getPageToken.ParametersType,
): Pagination_getPageToken.ReturnType {
  if (!pageToken) return null
  const hex = Hex.fromBytes(pageToken)
  if (hex === '0x') return null
  return hex
}

export declare namespace Pagination_getPageToken {
  type ParametersType = Uint8Array | undefined
  type ReturnType = NextPageToken
  type ErrorType = GlobalErrorType
}

export function unwrap(parameters: unwrap.ParametersType): unwrap.ReturnType {
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

export declare namespace unwrap {
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
