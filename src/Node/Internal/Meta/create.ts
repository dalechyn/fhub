import * as ed from '@noble/ed25519'
import { blake3 } from '@noble/hashes/blake3'
import { Hex, type Types } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import type { Meta } from './types.js'

export function Meta_create(
  parameters: Meta_create.ParametersType,
): Meta_create.ReturnType {
  const hash = blake3(Hex.toBytes(parameters.dataBytes), { dkLen: 20 })
  const signature = ed.sign(hash, parameters.privateKey.slice(2))
  return {
    hash: Hex.fromBytes(hash),
    hashScheme: 'blake3',
    signature: Hex.fromBytes(signature),
    signatureScheme: 'ed25519',
    signer: Hex.fromBytes(ed.getPublicKey(parameters.privateKey.slice(2))),
    dataBytes: parameters.dataBytes,
  } as const
}

export declare namespace Meta_create {
  type ParametersType = {
    dataBytes: Types.Hex
    privateKey: Types.Hex
  }
  type ReturnType = Meta

  type ErrorType = GlobalErrorType
}

Meta_create.parseError = (error: unknown) => error as Meta_create.ErrorType
