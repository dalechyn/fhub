import { Hex } from 'ox'
import type { Types } from 'ox'
import type { GlobalErrorType } from '../core/Error.js'

export type Account = {
  privateKey: Types.Hex
  fid: bigint
}

export function fromString(
  value: fromString.ParametersType,
): fromString.ReturnType {
  const [fidRaw, privateKey] = value.split(':')
  const fid = BigInt(fidRaw)
  Hex.assert(privateKey)
  return {
    fid,
    privateKey,
  } as const
}

export declare namespace fromString {
  type ParametersType = string
  type ReturnType = Account
  type ErrorType = Hex.InvalidHexValueError | GlobalErrorType
}

fromString.parseError = (error: unknown) => error as fromString.ErrorType

export function toString(
  account: toString.ParametersType,
): toString.ReturnType {
  return `${account.fid}:${account.privateKey}`
}

export declare namespace toString {
  type ParametersType = Account
  type ReturnType = `${bigint}:${Types.Hex}`
  type ErrorType = GlobalErrorType
}

toString.parseError = (error: unknown) => error as toString.ErrorType
