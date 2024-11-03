import { create } from '@bufbuild/protobuf'
import type { Types } from 'ox'
import type { Omit } from 'ox/Internal'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Meta_create } from '../Meta/create.js'
import { Meta_toProtobuf } from '../Meta/toProtobuf.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'
import type { Verification } from '../Verification/types.js'
import { VerificationAdd_toHex } from './toHex.js'
import { VerificationAdd_toMessageDataProtobuf } from './toMessageDataProtobuf.js'

export function VerificationAdd_toMessageProtobuf(
  parameters: VerificationAdd_toMessageProtobuf.ParametersType,
): VerificationAdd_toMessageProtobuf.ReturnType {
  return create(MessageProtobuf.MessageSchema, {
    ...Meta_toProtobuf(
      Meta_create({
        dataBytes: VerificationAdd_toHex(parameters.verification),
        privateKey: parameters.privateKey,
      }),
    ),
    data: VerificationAdd_toMessageDataProtobuf(parameters.verification),
  })
}

export declare namespace VerificationAdd_toMessageProtobuf {
  type ParametersType = {
    verification: Omit<Verification, 'meta'>
    privateKey: Types.Hex
  }
  type ReturnType = MessageProtobuf.Message

  // @TODO: errors
  type ErrorType = GlobalErrorType
}

VerificationAdd_toMessageProtobuf.parseError = (error: unknown) =>
  error as VerificationAdd_toMessageProtobuf.ErrorType
