import type { Types } from 'ox'

export type Pagination = {
  pageSize?: number | undefined
  pageToken?: Types.Hex | undefined
  reverse?: boolean | undefined
}

export type PaginationWithTimestamps = Pagination & {
  startTimestamp?: bigint | undefined
  stopTimestamp?: bigint | undefined
}

export type NextPageToken = Types.Hex | null
