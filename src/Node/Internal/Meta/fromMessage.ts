import * as ed from '@noble/ed25519'
import * as sha from '@noble/hashes/sha512'
import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import {
  HashScheme,
  type Message,
  SignatureScheme,
} from '../Protobufs/message_pb.js'
import {
  Meta_InvalidHashSchemeTypeError,
  Meta_InvalidSignatureError,
  Meta_InvalidSignatureSchemeTypeError,
} from './errors.js'
import type { Meta } from './types.js'

ed.etc.sha512Sync = (...m) => sha.sha512(ed.etc.concatBytes(...m))

export function Meta_fromMessage(
  message: Message,
): Meta_fromMessage.ReturnType {
  const hash = Hex.fromBytes(message.hash)
  const signer = Hex.fromBytes(message.signer)
  const signature = Hex.fromBytes(message.signature)
  const hashScheme = (() => {
    if (message.hashScheme === HashScheme.NONE) return null
    if (message.hashScheme === HashScheme.BLAKE3) return 'blake3'
    throw new Meta_InvalidHashSchemeTypeError({ hash })
  })()
  const signatureScheme = (() => {
    if (message.signatureScheme === SignatureScheme.NONE) return null
    if (message.signatureScheme === SignatureScheme.EIP712) return 'eip712'
    if (message.signatureScheme === SignatureScheme.ED25519) return 'ed25519'

    throw new Meta_InvalidSignatureSchemeTypeError({ hash })
  })()

  const verified = (() => {
    if (!signatureScheme) return null
    if (signatureScheme === 'ed25519')
      return ed.verify(message.signature, message.hash, message.signer)
    if (signatureScheme === 'eip712') throw new Error('not implemented')
    throw new Meta_InvalidSignatureSchemeTypeError({ hash })
  })()

  if (verified === false) throw new Meta_InvalidSignatureError({ hash })

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

export declare namespace Meta_fromMessage {
  type ReturnType = Meta

  type ErrorType =
    | Meta_InvalidHashSchemeTypeError
    | Meta_InvalidSignatureSchemeTypeError
    | Meta_InvalidSignatureError
    | GlobalErrorType
}

Meta_fromMessage.parseError = (error: unknown) =>
  error as Meta_fromMessage.ErrorType
