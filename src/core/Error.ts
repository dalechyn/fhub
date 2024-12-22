export type GlobalErrorType<name extends string = 'Error'> = Error & {
  name: name
}

export class UnexpectedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnexpectedError'
  }
}
