import { BaseError } from 'ox/Errors'

export class Embed_InvalidEmbedTypeError extends BaseError {
  override readonly name = 'Embed.InvalidEmbedTypeError'

  constructor({ embed }: { embed: any }) {
    super(`Embed is invalid: ${JSON.stringify(embed, null, 2)}`, {
      docsPath: '/errors#invalidembedtypeerror',
    })
  }
}
