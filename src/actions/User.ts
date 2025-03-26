import type { CallOptions } from '@connectrpc/connect'
import type * as Account from '../core/Account.js'
import type * as Client from '../core/Client.js'
import type { GlobalErrorType } from '../core/Error.js'
import type * as Link from '../core/Link.js'
import * as LinkAdd from '../core/LinkAdd.js'
import type * as Message from '../core/Message.js'
import * as Pagination from '../core/Pagination.js'
import * as UserData from '../core/UserData.js'
import * as MessageProtobuf from '../core/protobufs/message_pb.js'
import * as Submit from './Submit.js'
import * as UsernameProof from './UsernameProof.js'

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
  type ErrorType = getByFid.ErrorType | GlobalErrorType
}
/**
 * Get all User data by `fid`
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const user = await User.get(client, { fid: 11517n })
 *
 * user
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns `pfp`, `displayName`, `bio`, `url`, `username`, `location`.
 */
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  let nextPageToken: Pagination.NextPageToken = null
  const userDatas = await (async () => {
    const datas: UserData.UserData[] = []
    do {
      const result = await getByFid(client, { fid: parameters.fid }, options)
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
    data: Omit<UserData.UserData, 'meta' | 'fid' | 'timestamp'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}

/**
 * Preconstructs {@link fhub#UserData.UserData} update message without submitting it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const message = await User.updatePreconstruct({
 *   data: {
 *     type: 'bio',
 *     value: 'believe in somETHing'
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `type` of data to update with `value`, and {@link fhub#Account.Account} to sign the message.
 * @returns User data update message.
 */
export async function updatePreconstruct(
  parameters: updatePreconstruct.ParametersType,
): Promise<updatePreconstruct.ReturnType> {
  const message = await UserData.toMessageProtobuf({
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
        data: Omit<UserData.UserData, 'meta' | 'fid' | 'timestamp'>
        account: Account.Account
      }
    | { message: updatePreconstruct.ReturnType }
  type ReturnType = Message.Message
  type ErrorType = GlobalErrorType
}
/**
 * Creates {@link fhub#UserData.UserData} update message and sends it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await User.update(client, {
 *   data: {
 *     type: 'bio',
 *     value: 'believe in somETHing'
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `type` of data to update with `value`, and {@link fhub#Account.Account} to sign the message.
 * @returns Submited User data update message.
 */
export async function update(
  client: Client.Client,
  parameters: update.ParametersType,
  options?: CallOptions,
): Promise<update.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await UserData.toMessageProtobuf({
          data: {
            ...parameters.data,
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Submit.submitMessage(client, message, options)
}

update.parseError = (error: unknown) => error as update.ErrorType

export declare namespace getData {
  type ParametersType = {
    fid: bigint
    type: UserData.UserData['type']
  }
  type ReturnType = UserData.UserData
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}

/**
 * Get a {@link fhub#UserData.UserData} by `fid` and `type`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const data = await User.getData(client, { fid: 11517n, type: 'bio' })
 *
 * data
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid` and `type`.
 * @returns {@link fhub#UserData.UserData}.
 */
export async function getData(
  client: Client.Client,
  parameters: getData.ParametersType,
  options?: CallOptions,
): Promise<getData.ReturnType> {
  MessageProtobuf.UserDataType
  const message = await client.connectRpcClient.getUserData(
    {
      ...parameters,
      userDataType: UserData.EnumMapping[parameters.type],
    },
    options,
  )
  return UserData.fromMessageProtobuf(message)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getAllUserDataMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    datas: UserData.UserData[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = UserData.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Gets all {@link fhub#UserData.UserData} messages by `fid`.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { datas, nextPageToken } = await User.getAllUserDataMessagesByFid(client, { fid: 11517n })
 *
 * datas
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns {@link fhub#UserData.UserData}s with `nextPageToken`.
 */
export async function getAllUserDataMessagesByFid(
  client: Client.Client,
  parameters: getAllUserDataMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllUserDataMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllUserDataMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    datas: message.messages.map(UserData.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getAllUserDataMessagesByFid.parseError = (error: unknown) =>
  error as getAllUserDataMessagesByFid.ErrorType

export declare namespace getBio {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  // @TODO: proper error handling
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get a bio of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const bio = await User.getBio(client, { fid: 11517n })
 *
 * bio
 * //^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getBio(
  client: Client.Client,
  parameters: getBio.ParametersType,
  options?: CallOptions,
): Promise<getBio.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'bio',
    },
    options,
  )
  return data.value
}

getBio.parseError = (error: unknown) => error as getBio.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.PaginationWithTimestamps
  type ReturnType = {
    datas: UserData.UserData[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = UserData.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Gets all {@link fhub#UserData.UserData}s by `fid`.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { datas, nextPageToken } = await User.getByFid(client, { fid: 11517n })
 *
 * datas
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns {@link fhub#UserData.UserData}s with `nextPageToken`.
 */
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const message = await client.connectRpcClient.getUserDataByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    datas: message.messages.map(UserData.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getDisplay {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get a display name of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const display = await User.getDisplay(client, { fid: 11517n })
 *
 * display
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getDisplay(
  client: Client.Client,
  parameters: getDisplay.ParametersType,
  options?: CallOptions,
): Promise<getDisplay.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'display',
    },
    options,
  )
  return data.value
}

getDisplay.parseError = (error: unknown) => error as getDisplay.ErrorType

export declare namespace getLocation {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get location of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const location = await User.getLocation(client, { fid: 11517n })
 *
 * location
 * //     ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getLocation(
  client: Client.Client,
  parameters: getLocation.ParametersType,
  options?: CallOptions,
): Promise<getLocation.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'location',
    },
    options,
  )
  return data.value
}

getLocation.parseError = (error: unknown) => error as getLocation.ErrorType

export declare namespace getPfp {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get pfp url of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const pfpUrl = await User.getPfp(client, { fid: 11517n })
 *
 * pfpUrl
 * //   ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getPfp(
  client: Client.Client,
  parameters: getPfp.ParametersType,
  options?: CallOptions,
): Promise<getPfp.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'pfp',
    },
    options,
  )
  return data.value
}

getPfp.parseError = (error: unknown) => error as getPfp.ErrorType

export declare namespace getUrl {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get associated url of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const url = await User.getUrl(client, { fid: 11517n })
 *
 * url
 * //^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getUrl(
  client: Client.Client,
  parameters: getUrl.ParametersType,
  options?: CallOptions,
): Promise<getUrl.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'url',
    },
    options,
  )
  return data.value
}

getUrl.parseError = (error: unknown) => error as getUrl.ErrorType

export declare namespace getUsername {
  type ParametersType = { fid: bigint }
  type ReturnType = getData.ReturnType['value']
  type ErrorType = getData.ErrorType | GlobalErrorType
}

/**
 * Get username of a user by `fid`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const username = await User.getUsername(client, { fid: 11517n })
 *
 * username
 * //     ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `fid`.
 * @returns string
 */
export async function getUsername(
  client: Client.Client,
  parameters: getUsername.ParametersType,
  options?: CallOptions,
): Promise<getUsername.ReturnType> {
  const data = await getData(
    client,
    {
      ...parameters,
      type: 'username',
    },
    options,
  )
  return data.value
}

getUsername.parseError = (error: unknown) => error as getUsername.ErrorType

export declare namespace followPreconstruct {
  type ParametersType = {
    follow: Omit<Link.Link, 'meta' | 'fid' | 'timestamp' | 'type'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}
/**
 * Preconstructs {@link fhub#Link.Link} follow creation message without submitting it to Hub.
 *
 * :::note
 *
 * Mainly used in `fhub/cli` to serve frontends as sending a message over http2 can't be done in a browser.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Account } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const message = await User.followPreconstruct({
 *   follow: {
 *     targetFid: 11517n
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `targetFid`, and {@link fhub#Account.Account} to sign the message.
 * @returns Follow creation message.
 */
export async function followPreconstruct(
  parameters: followPreconstruct.ParametersType,
): Promise<followPreconstruct.ReturnType> {
  const message = await LinkAdd.toMessageProtobuf({
    link: {
      type: 'follow',
      ...parameters.follow,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

followPreconstruct.parseError = (error: unknown) =>
  error as followPreconstruct.ErrorType

export declare namespace follow {
  type ParametersType =
    | {
        follow: Omit<Link.Link, 'meta' | 'fid' | 'timestamp' | 'type'>
        account: Account.Account
      }
    | { message: followPreconstruct.ReturnType }
  type ReturnType = Message.Message
  type ErrorType = GlobalErrorType
}
/**
 * Creates {@link fhub#Link.Link} follow creation message and sends it to Hub.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await User.follow(client, {
 *   follow: {
 *     targetFid: 11517n
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `targetFid`, and {@link fhub#Account.Account} to sign the message.
 * @returns Submitted Follow creation message.
 */
export async function follow(
  client: Client.Client,
  parameters: follow.ParametersType,
  options?: CallOptions,
): Promise<follow.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await LinkAdd.toMessageProtobuf({
          link: {
            type: 'follow',
            ...parameters.follow,
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Submit.submitMessage(client, message, options)
}

follow.parseError = (error: unknown) => error as follow.ErrorType

export declare namespace followByUsername {
  type ParametersType = {
    follow: Omit<
      Link.Link,
      'meta' | 'fid' | 'timestamp' | 'type' | 'targetFid'
    > & {
      username: string
    }

    account: Account.Account
  }
  type ReturnType = follow.ReturnType
  type ErrorType = follow.ErrorType | GlobalErrorType
}
/**
 * Creates {@link fhub#Link.Link} follow creation message and sends it to Hub.
 *
 * @example
 * ```ts twoslash
 * import { Account, Client, Transport } from 'fhub'
 * import { User } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const message = await User.followByUsername(client, {
 *   follow: {
 *     username: 'dalechyn.eth'
 *   },
 *   account: Account.fromPrivateKeyAndFid({
 *     fid: 11517n,
 *     privateKey:
 *       '0x0000000000000000000000000000000000000000000000000000000000000000',
 *   }),
 * })
 *
 * message
 * //    ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `username`, and {@link fhub#Account.Account} to sign the message.
 * @returns Submitted Follow creation message.
 */
export async function followByUsername(
  client: Client.Client,
  parameters: followByUsername.ParametersType,
  options?: CallOptions,
): Promise<followByUsername.ReturnType> {
  const { fid } = await UsernameProof.get(client, {
    name: parameters.follow.username,
  })
  return follow(
    client,
    {
      follow: { ...parameters.follow, targetFid: fid },
      account: parameters.account,
    },
    options,
  )
}

followByUsername.parseError = (error: unknown) =>
  error as followByUsername.ErrorType
