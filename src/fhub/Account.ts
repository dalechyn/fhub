import * as ed from '@noble/ed25519'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../core/Error.js'
import type { Signer } from './Signer.js'

export type Account = {
  getSigner(): Promise<Hex.Hex>
  signHash(hash: Hex.Hex): Promise<Hex.Hex>
  fid: bigint
}

export function fromFarcasterEd25519Signer(
  parameters: fromFarcasterEd25519Signer.ParametersType,
): fromFarcasterEd25519Signer.ReturnType {
  return {
    fid: parameters.fid,
    async getSigner() {
      const signerKeyBytes = (await parameters.signer.getSignerKey()).unwrapOr(
        new Uint8Array(),
      )
      if (signerKeyBytes.length === 0)
        throw new Error('Failed to get signer key')

      return Hex.fromBytes(signerKeyBytes)
    },
    async signHash(hash) {
      const signature = (
        await parameters.signer.signMessageHash(Hex.toBytes(hash))
      ).unwrapOr(new Uint8Array())
      if (signature.length === 0) throw new Error('Failed to get sign')

      return Hex.fromBytes(signature)
    },
  } as const
}

export declare namespace fromFarcasterEd25519Signer {
  type ParametersType = {
    signer: {
      getSignerKey(): Promise<{ unwrapOr(val: Uint8Array): Uint8Array }>
      signMessageHash(
        hash: Uint8Array,
      ): Promise<{ unwrapOr(val: Uint8Array): Uint8Array }>
    }
    fid: bigint
  }
  type ReturnType = Account
  type ErrorType = Hex.InvalidHexValueError | GlobalErrorType
}

export function fromString(
  value: fromString.ParametersType,
): fromString.ReturnType {
  const [fidRaw, privateKey] = value.split(':')
  const fid = BigInt(fidRaw)
  Hex.assert(privateKey)
  return fromPrivateKeyAndFid({ fid, privateKey })
}

export declare namespace fromString {
  type ParametersType = string
  type ReturnType = Account
  type ErrorType = Hex.InvalidHexValueError | GlobalErrorType
}

fromString.parseError = (error: unknown) => error as fromString.ErrorType

export function fromPrivateKeyAndFid(
  parameters: fromPrivateKeyAndFid.ParametersType,
): fromPrivateKeyAndFid.ReturnType {
  Hex.assert(parameters.privateKey)
  return {
    fid: parameters.fid,
    getSigner() {
      return Promise.resolve(
        Hex.fromBytes(ed.getPublicKey(parameters.privateKey.slice(2))),
      )
    },
    signHash(hash) {
      return Promise.resolve(
        Hex.fromBytes(
          ed.sign(Hex.toBytes(hash), parameters.privateKey.slice(2)),
        ),
      )
    },
  } as const
}

export declare namespace fromPrivateKeyAndFid {
  type ParametersType = { privateKey: Hex.Hex; fid: bigint }
  type ReturnType = Account
  type ErrorType = Hex.InvalidHexValueError | GlobalErrorType
}

fromPrivateKeyAndFid.parseError = (error: unknown) =>
  error as fromString.ErrorType
