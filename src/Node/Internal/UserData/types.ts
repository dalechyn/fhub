import type { Meta } from '../Meta/types.js'

export type UserData = {
  meta: Meta
  type: 'none' | 'pfp' | 'display' | 'bio' | 'url' | 'username' | 'location'
  value: string
}
