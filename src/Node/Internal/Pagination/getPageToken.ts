import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { NextPageToken } from './types.js'

export function Pagination_getPageToken(
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
