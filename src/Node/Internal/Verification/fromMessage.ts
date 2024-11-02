import { Hex } from 'ox'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_fromMessage } from '../Meta/fromMessage.js'
import {
  type Message as Protobufs_Message,
  Protocol,
} from '../Protobufs/message_pb.js'
import type { Verification } from './types.js'

export function Verification_fromMessage(
  message: Protobufs_Message,
): Verification_fromMessage.ReturnType {
  //@TODO: errors
  if (!message.data) throw new Error('no data')
  if (message.data.body.case !== 'verificationAddAddressBody')
    throw new Error('bad case')

  return {
    meta: Meta_fromMessage(message),
    type: message.data.body.value.verificationType === 0 ? 'eoa' : 'contract',
    address: message.data.body.value.address.toString(),
    claimSignature: Hex.fromBytes(message.data.body.value.claimSignature),
    blockHash: Hex.fromBytes(message.data.body.value.blockHash),
    chainId: message.data.body.value.chainId,
    protocol:
      message.data.body.value.protocol === Protocol.SOLANA
        ? 'solana'
        : 'ethereum',
  } as const
}

export declare namespace Verification_fromMessage {
  type ReturnType = Verification

  type ErrorType = GlobalErrorType
}

Verification_fromMessage.parseError = (error: unknown) =>
  error as Verification_fromMessage.ErrorType
