import type { CastId } from '../CastId/types.js'
import type { Meta } from '../Meta/types.js'

export type ReactionType = 'like' | 'recast'
export type ReactionTarget =
  | ({
      type: 'cast'
    } & CastId)
  | {
      type: 'url'
      url: string
    }

export type Reaction = {
  meta: Meta
  fid: bigint
  timestamp: number
  type: ReactionType
  target: ReactionTarget
}
