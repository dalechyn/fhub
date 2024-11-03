import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class VerificationAdd_InvalidMessageTypeError extends BaseError {
  override readonly name = 'VerificationAdd.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
