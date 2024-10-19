import { BaseError } from 'ox/Errors'

// @TODO: replace by our own BaseError
export class UserData_InvalidMessageTypeError extends BaseError {
  override readonly name = 'UserData.InvalidMessageTypeError'

  constructor({ hash }: { hash: string }) {
    super(`Message "${hash}" has type other than USER_DATA_ADD.`, {
      docsPath: '/errors#invalidmessagetypeerror',
    })
  }
}
