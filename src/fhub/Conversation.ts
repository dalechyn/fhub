import type * as Core from '../core/index.js'

/**
 * Conversation is a type that represents a list of casts that are
 * linked together via `parentUrl`s.
 * Methods that return `Conversation` guarantee the ordering,
 * meaning that the root cast comes first.
 */
export type Conversation = Core.Cast.Cast[]
