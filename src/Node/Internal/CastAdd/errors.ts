import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class CastAdd_InvalidMessageTypeError extends BaseError {
  override readonly name = 'CastAdd.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
