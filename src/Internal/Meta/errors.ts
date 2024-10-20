import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class Meta_InvalidHashSchemeTypeError extends BaseError {
  override readonly name = 'Meta.InvalidHashSchemeTypeError'

  constructor({ hash }: { hash: string }) {
    super(`HashScheme of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class Meta_InvalidSignatureSchemeTypeError extends BaseError {
  override readonly name = 'Meta.InvalidSignatureSchemeTypeError'

  constructor({ hash }: { hash: string }) {
    super(`SignatureScheme of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class Meta_InvalidSignatureError extends BaseError {
  override readonly name = 'Meta.InvalidSignatureTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Signature of "${hash}" is invalid.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
