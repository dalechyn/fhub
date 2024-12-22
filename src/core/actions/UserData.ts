import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as Pagination from '../Pagination.js'
import * as UserData from '../UserData.js'
import * as MessageProtobuf from '../protobufs/message_pb.js'

export declare namespace get {
  type ParametersType = {
    fid: bigint
    userDataType: MessageProtobuf.UserDataType
  }
  type ReturnType = UserData.UserData
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}

export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const message = await client.connectRpcClient.getUserData(parameters, options)
  return UserData.fromProtobuf(message)
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
  type ErrorType = UserData.fromProtobuf.ErrorType | GlobalErrorType
}
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
    datas: message.messages.map(UserData.fromProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getAllUserDataMessagesByFid.parseError = (error: unknown) =>
  error as getAllUserDataMessagesByFid.ErrorType

export declare namespace getBio {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  // @TODO: proper error handling
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getBio(
  client: Client.Client,
  parameters: getBio.ParametersType,
  options?: CallOptions,
): Promise<getBio.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.BIO,
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
  type ErrorType = UserData.fromProtobuf.ErrorType | GlobalErrorType
}
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
    datas: message.messages.map(UserData.fromProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getDisplay {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getDisplay(
  client: Client.Client,
  parameters: getDisplay.ParametersType,
  options?: CallOptions,
): Promise<getDisplay.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.DISPLAY,
    },
    options,
  )
  return data.value
}

getDisplay.parseError = (error: unknown) => error as getDisplay.ErrorType

export declare namespace getLocation {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getLocation(
  client: Client.Client,
  parameters: getLocation.ParametersType,
  options?: CallOptions,
): Promise<getLocation.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.LOCATION,
    },
    options,
  )
  return data.value
}

getLocation.parseError = (error: unknown) => error as getLocation.ErrorType

export declare namespace getPfp {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getPfp(
  client: Client.Client,
  parameters: getPfp.ParametersType,
  options?: CallOptions,
): Promise<getPfp.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.PFP,
    },
    options,
  )
  return data.value
}

getPfp.parseError = (error: unknown) => error as getPfp.ErrorType

export declare namespace getUrl {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getUrl(
  client: Client.Client,
  parameters: getUrl.ParametersType,
  options?: CallOptions,
): Promise<getUrl.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.URL,
    },
    options,
  )
  return data.value
}

getUrl.parseError = (error: unknown) => error as getUrl.ErrorType

export declare namespace getUsername {
  type ParametersType = { fid: bigint }
  type ReturnType = get.ReturnType['value']
  type ErrorType = get.ErrorType | GlobalErrorType
}

export async function getUsername(
  client: Client.Client,
  parameters: getUsername.ParametersType,
  options?: CallOptions,
): Promise<getUsername.ReturnType> {
  const data = await get(
    client,
    {
      ...parameters,
      userDataType: MessageProtobuf.UserDataType.USERNAME,
    },
    options,
  )
  return data.value
}

getUsername.parseError = (error: unknown) => error as getUsername.ErrorType
