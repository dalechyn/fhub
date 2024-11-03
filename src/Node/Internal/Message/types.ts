import type { Cast } from '../Cast/types.js'
import type { CastRemove } from '../CastRemove/types.js'
import type { FrameActionBody } from '../FrameActionBody/types.js'
import type { Link } from '../Link/types.js'
import type { LinkCompactState } from '../LinkCompactState/types.js'
import type { Reaction } from '../Reaction/types.js'
import type { UserData } from '../UserData/types.js'
import type { UsernameProof } from '../UsernameProof/types.js'
import type { Verification } from '../Verification/types.js'
import type { VerificationRemove } from '../VerificationRemoval/types.js'

export type Message =
  | {
      type: 'castAdd'
      data: Cast
    }
  | {
      type: 'castRemove'
      data: CastRemove
    }
  | {
      type: 'reactionAdd' | 'reactionRemove'
      data: Reaction
    }
  | {
      type: 'userDataAdd'
      data: UserData
    }
  | {
      type: 'linkAdd' | 'linkRemove'
      data: Link
    }
  | {
      type: 'verificationAdd'
      data: Verification
    }
  | {
      type: 'verificationRemove'
      data: VerificationRemove
    }
  | {
      type: 'usernameProof'
      data: UsernameProof
    }
  | {
      type: 'frameAction'
      data: FrameActionBody
    }
  | {
      type: 'linkCompactState'
      data: LinkCompactState
    }
