import type { CastId } from '../CastId/types.js'

export type Embed =
  | ({
      type: 'cast'
    } & CastId)
  | {
      type: 'url'
      url: string
    }
