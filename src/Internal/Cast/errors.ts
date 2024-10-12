import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class Cast_InvalidMessageError<
  cause extends
    | Cast_InvalidMessageTypeError
    | Cast_InvalidEmbedTypeError
    | Cast_InvalidParentTypeError,
> extends BaseError<cause> {
  override readonly name = 'Cast.InvalidMessageError'

  constructor({ hash, cause }: { hash: string; cause: cause }) {
    super(`Message "${hash}" is invalid.`, {
      cause,
      docsPath: '/errors#invalidmessageerror',
    })
  }
}

export class Cast_InvalidMessageTypeError extends BaseError {
  override readonly name = 'Cast.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than CAST_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}

export class Cast_InvalidEmbedTypeError extends BaseError {
  override readonly name = 'Cast.InvalidEmbedTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has invalid Embed type.`, {
      docsPath: '/errors#invalidembedtypeerror',
    })
  }
}

export class Cast_InvalidParentTypeError extends BaseError {
  override readonly name = 'Cast.InvalidParentTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has invalid Parent type.`, {
      docsPath: '/errors#invalidembedtypeerror',
    })
  }
}
