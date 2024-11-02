import type { Types } from 'ox'
import type { Cast } from '../Cast/types.js'
import type { FrameActionBody } from '../FrameActionBody/types.js'
import type { Link } from '../Link/types.js'
import type { LinkCompactState } from '../LinkCompactState/types.js'
import type { Reaction } from '../Reaction/types.js'
import type { UserData } from '../UserData/types.js'
import type { UsernameProof } from '../UsernameProof/types.js'
import type { Verification } from '../Verification/types.js'
import type { VerificationRemoval } from '../VerificationRemoval/types.js'

export type Message =
  | {
      type: 'castAdd'
      cast: Cast
    }
  | {
      type: 'castRemove'
      hash: Types.Hex
    }
  | {
      type: 'reactionAdd' | 'reactionRemove'
      reaction: Reaction
    }
  | {
      type: 'userData'
      data: UserData
    }
  | {
      type: 'userDataRemove'
      data: UserData
    }
  | {
      type: 'linkAdd'
      link: Link
    }
  | {
      type: 'linkRemove'
      link: Link
    }
  | {
      type: 'verificationAdd'
      verification: Verification
    }
  | {
      type: 'verificationRemove'
      verification: VerificationRemoval
    }
  | {
      type: 'usernameProof'
      proof: UsernameProof
    }
  | {
      type: 'frameAction'
      action: FrameActionBody
    }
  | {
      type: 'linkCompactState'
      state: LinkCompactState
    }
