import type { CastId } from '../CastId/types.js'

export type Parent =
  | ({
      type: 'cast'
    } & CastId)
  | {
      type: 'url'
      url: string
    }
