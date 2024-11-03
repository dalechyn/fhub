import { BaseError } from 'ox/Errors'

export class Link_InvalidMessageTypeError extends BaseError {
  override readonly name = 'Link.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
