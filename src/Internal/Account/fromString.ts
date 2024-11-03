import { Hex } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import type { Account } from './types.js'

export function Account_fromString(
  value: Account_fromString.ParametersType,
): Account_fromString.ReturnType {
  const [fidRaw, privateKey] = value.split(':')
  const fid = BigInt(fidRaw)
  Hex.assert(privateKey)
  return {
    fid,
    privateKey,
  } as const
}

export declare namespace Account_fromString {
  type ParametersType = string
  type ReturnType = Account
  type ErrorType = Hex.InvalidHexValueError | GlobalErrorType
}

Account_fromString.parseError = (error: unknown) =>
  error as Account_fromString.ErrorType
