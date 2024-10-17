import { BaseError } from 'ox/Errors'

export class Parent_InvalidParentTypeError extends BaseError {
  override readonly name = 'Parent.InvalidParentTypeError'

  constructor({ parent }: { parent: any }) {
    super(`Parent is invalid: ${JSON.stringify(parent, null, 2)}`, {
      docsPath: '/errors#invalidparenttypeerror',
    })
  }
}
