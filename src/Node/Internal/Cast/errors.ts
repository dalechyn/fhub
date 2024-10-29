import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class Cast_InvalidMessageTypeError extends BaseError {
  override readonly name = 'Cast.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class Cast_InvalidEmbedsError extends BaseError {
  override readonly name = 'Cast.InvalidEmbedsError'

  constructor({ hash }: { hash: string }) {
    super(`Embeds "${hash}" has undefined.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
