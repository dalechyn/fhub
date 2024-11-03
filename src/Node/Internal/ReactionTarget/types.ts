import type { CastId } from '../CastId/types.js'

export type ReactionTarget =
  | ({
      type: 'cast'
    } & CastId)
  | {
      type: 'url'
      url: string
    }
