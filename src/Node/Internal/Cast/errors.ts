import { BaseError } from 'ox/Errors'

export class Cast_InvalidEmbedsError extends BaseError {
  override readonly name = 'Cast.InvalidEmbedsError'

  constructor({ hash }: { hash: string }) {
    super(`Embeds "${hash}" has undefined.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
