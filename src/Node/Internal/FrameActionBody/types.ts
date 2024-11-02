import type { CastId } from '../CastId/types.js'
import type { Meta } from '../Meta/types.js'

export type FrameActionBody = {
  meta: Meta
  url: string
  buttonIndex: 1 | 2 | 3 | 4
  castId: CastId | undefined
  inputText: string
  state: string
  transactionId: string
  address: string
}
