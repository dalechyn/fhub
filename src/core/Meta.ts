import * as ed from '@noble/ed25519'
import { blake3 } from '@noble/hashes/blake3'
import * as sha from '@noble/hashes/sha512'
import { Hex, type Types } from 'ox'
import { BaseError } from 'ox/Errors'
import type { GlobalErrorType } from './Error.js'
import * as MessageProtobuf from './protobufs/message_pb.js'

// @TODO: replace by our own BaseError
export class InvalidHashSchemeTypeError extends BaseError {
  override readonly name = 'Meta.InvalidHashSchemeTypeError'

  constructor({ hash }: { hash: string }) {
    super(`HashScheme of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class InvalidSignatureSchemeTypeError extends BaseError {
  override readonly name = 'Meta.InvalidSignatureSchemeTypeError'

  constructor({ hash }: { hash: string }) {
    super(`SignatureScheme of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class InvalidSignatureError extends BaseError {
  override readonly name = 'Meta.InvalidSignatureTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Signature of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export type Meta = {
  hash: Types.Hex
  signer: Types.Hex
  signature: Types.Hex
  hashScheme: 'blake3'
  signatureScheme: 'ed25519' | 'eip712'
  dataBytes: Types.Hex | undefined
}

export function create(parameters: create.ParametersType): create.ReturnType {
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

export declare namespace create {
  type ParametersType = {
    dataBytes: Types.Hex
    privateKey: Types.Hex
  }
  type ReturnType = Meta

  type ErrorType = GlobalErrorType
}

create.parseError = (error: unknown) => error as create.ErrorType

ed.etc.sha512Sync = (...m) => sha.sha512(ed.etc.concatBytes(...m))

export function fromProtobuf(
  message: fromProtobuf.ParametersType,
): fromProtobuf.ReturnType {
  //@TODO: error
  if (!message.data) throw new Error('')
  const hash = Hex.fromBytes(message.hash)
  const signer = Hex.fromBytes(message.signer)
  const signature = Hex.fromBytes(message.signature)
  const hashScheme = (() => {
    if (message.hashScheme === MessageProtobuf.HashScheme.BLAKE3)
      return 'blake3' as const
    throw new InvalidHashSchemeTypeError({ hash })
  })()
  const signatureScheme = (() => {
    if (message.signatureScheme === MessageProtobuf.SignatureScheme.EIP712)
      return 'eip712'
    if (message.signatureScheme === MessageProtobuf.SignatureScheme.ED25519)
      return 'ed25519'

    throw new InvalidSignatureSchemeTypeError({ hash })
  })()

  const verified = (() => {
    if (!signatureScheme) return null
    if (signatureScheme === 'ed25519')
      return ed.verify(message.signature, message.hash, message.signer)
    if (signatureScheme === 'eip712') throw new Error('not implemented')
    throw new InvalidSignatureSchemeTypeError({ hash })
  })()

  if (verified === false) throw new InvalidSignatureError({ hash })

  const dataBytes = message.dataBytes
    ? Hex.fromBytes(message.dataBytes)
    : undefined

  return {
    hash,
    signer,
    signature,
    hashScheme,
    signatureScheme,
    dataBytes,
  } as const
}

export declare namespace fromProtobuf {
  type ParametersType = MessageProtobuf.Message
  type ReturnType = Meta

  type ErrorType =
    | InvalidHashSchemeTypeError
    | InvalidSignatureSchemeTypeError
    | InvalidSignatureError
    | GlobalErrorType
}

fromProtobuf.parseError = (error: unknown) => error as fromProtobuf.ErrorType

export function toProtobuf(
  meta: toProtobuf.ParametersType,
): toProtobuf.ReturnType {
  return {
    hash: Hex.toBytes(meta.hash),
    signer: Hex.toBytes(meta.signer),
    signature: Hex.toBytes(meta.signature),
    hashScheme: MessageProtobuf.HashScheme.BLAKE3,
    signatureScheme: MessageProtobuf.SignatureScheme.ED25519,
    ...(meta.dataBytes ? { dataBytes: Hex.toBytes(meta.dataBytes) } : {}),
  } as const
}

export declare namespace toProtobuf {
  type ParametersType = Meta
  type ReturnType = Pick<
    MessageProtobuf.Message,
    | 'hash'
    | 'hashScheme'
    | 'dataBytes'
    | 'signatureScheme'
    | 'signature'
    | 'signer'
  >

  type ErrorType = GlobalErrorType
}

toProtobuf.parseError = (error: unknown) => error as toProtobuf.ErrorType
