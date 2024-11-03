import type { Types } from 'ox'
import type { GlobalErrorType } from '../Errors/error.js'
import type { Account } from './types.js'

export function Account_toString(
  account: Account_toString.ParametersType,
): Account_toString.ReturnType {
  return `${account.fid}:${account.privateKey}`
}

export declare namespace Account_toString {
  type ParametersType = Account
  type ReturnType = `${bigint}:${Types.Hex}`
  type ErrorType = GlobalErrorType
}

Account_toString.parseError = (error: unknown) =>
  error as Account_toString.ErrorType
