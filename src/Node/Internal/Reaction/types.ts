import type { Meta } from '../Meta/types.js'
import type { ReactionTarget } from '../ReactionTarget//types.js'
import type { ReactionType } from '../ReactionType//types.js'

export type Reaction = {
  meta: Meta
  fid: bigint
  timestamp: number
  type: ReactionType
  target: ReactionTarget
}
