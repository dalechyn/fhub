import type * as Cast from '../core/Cast.js'
import type * as Reaction from '../core/Reaction.js'

/**
 * `SuperCast` is a cast that has the text with unwrapped mentions,
 * recasts and relikes data
 */
export type SuperCast = Cast.Cast & {
  recasts: Reaction.Reaction[]
  likes: Reaction.Reaction[]
  text: {
    unwrapped: string
  }
}
