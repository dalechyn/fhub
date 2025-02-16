import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as MessageProtobuf from '../../core/protobufs/message_pb.js'
import type * as Account from '../Account.js'
import type * as Client from '../Client.js'

export declare namespace get {
  type ParametersType = { fid: bigint }
  type ReturnType = {
    pfp: string | null
    displayName: string | null
    bio: string | null
    url: string | null
    username: string | null
    location: string | null
  }
  type ErrorType = Core.Actions.UserData.getByFid.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  let nextPageToken: Core.Pagination.NextPageToken = null
  const userDatas = await (async () => {
    const datas: Core.UserData.UserData[] = []
    do {
      const result = await Core.Actions.UserData.getByFid(
        client,
        { fid: parameters.fid },
        options,
      )
      datas.push(...result.datas)
      nextPageToken = result.nextPageToken
    } while (nextPageToken !== null)
    return datas
  })()
  return {
    pfp: userDatas.find((data) => data.type === 'pfp')?.value ?? null,
    displayName:
      userDatas.find((data) => data.type === 'display')?.value ?? null,
    bio: userDatas.find((data) => data.type === 'bio')?.value ?? null,
    url: userDatas.find((data) => data.type === 'url')?.value ?? null,
    username: userDatas.find((data) => data.type === 'username')?.value ?? null,
    location: userDatas.find((data) => data.type === 'location')?.value ?? null,
  }
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace updatePreconstruct {
  type ParametersType = {
    data: Omit<Core.UserData.UserData, 'meta' | 'fid' | 'timestamp'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}
export async function updatePreconstruct(
  parameters: updatePreconstruct.ParametersType,
): Promise<updatePreconstruct.ReturnType> {
  const message = await Core.UserData.toMessageProtobuf({
    data: {
      ...parameters.data,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

updatePreconstruct.parseError = (error: unknown) =>
  error as updatePreconstruct.ErrorType

export declare namespace update {
  type ParametersType =
    | {
        data: Omit<Core.UserData.UserData, 'meta' | 'fid' | 'timestamp'>
        account: Account.Account
      }
    | { message: updatePreconstruct.ReturnType }
  type ReturnType = Core.Message.Message
  type ErrorType = GlobalErrorType
}
export async function update(
  client: Client.Client,
  parameters: update.ParametersType,
  options?: CallOptions,
): Promise<update.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await Core.UserData.toMessageProtobuf({
          data: {
            ...parameters.data,
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Core.Actions.Submit.submitMessage(client, message, options)
}

update.parseError = (error: unknown) => error as update.ErrorType
