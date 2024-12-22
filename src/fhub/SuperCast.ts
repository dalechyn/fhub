import type * as Core from '../core/index.js'

/**
 * `SuperCast` is a cast that has the text with unwrapped mentions,
 * recasts and relikes data
 */
export type SuperCast = Core.Cast.Cast & {
  recasts: Core.Reaction.Reaction[]
  likes: Core.Reaction.Reaction[]
  text: {
    unwrapped: string
  }
}
