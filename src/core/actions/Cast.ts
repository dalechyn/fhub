import type { CallOptions } from '@connectrpc/connect'
import { Hex } from 'ox'
import type * as Client from '../../fhub/Client.js'
import type * as Cast from '../Cast.js'
import * as CastAdd from '../CastAdd.js'
import type * as CastId from '../CastId.js'
import * as CastRemove from '../CastRemove.js'
import type { GlobalErrorType } from '../Error.js'
import * as Pagination from '../Pagination.js'
import * as Parent from '../Parent.js'
import * as MessageProtobuf from '../protobufs/message_pb.js'

export declare namespace get {
  type ParametersType = CastId.CastId
  type ReturnType = Cast.Cast
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    { fid: parameters.fid, hash: Hex.toBytes(parameters.hash) },
    options,
  )

  return CastAdd.fromMessageProtobuf(message)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getAllCastMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    messages: (
      | { type: 'casted'; cast: Cast.Cast }
      | { type: 'removed'; cast: CastRemove.CastRemove }
    )[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function getAllCastMessagesByFid(
  client: Client.Client,
  parameters: getAllCastMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllCastMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllCastMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map((message) => {
      if (
        message.data?.type === MessageProtobuf.MessageType.CAST_REMOVE &&
        message.data.body.case === 'castRemoveBody'
      )
        return {
          type: 'removed' as const,
          cast: CastRemove.fromMessageProtobuf(message),
        }
      return { type: 'casted', cast: CastAdd.fromMessageProtobuf(message) }
    }),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getAllCastMessagesByFid.parseError = (error: unknown) =>
  error as getAllCastMessagesByFid.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.PaginationWithTimestamps
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const message = await client.connectRpcClient.getCastsByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getByMention {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = CastAdd.fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function getByMention(
  client: Client.Client,
  parameters: getByMention.ParametersType,
  options?: CallOptions,
): Promise<getByMention.ReturnType> {
  const message = await client.connectRpcClient.getCastsByMention(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByMention.parseError = (error: unknown) => error as getByMention.ErrorType

export declare namespace getByParent {
  type ParametersType = {
    parent: Parent.Parent
  } & Pagination.Pagination
  type ReturnType = {
    casts: Cast.Cast[]
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType =
    | CastAdd.fromMessageProtobuf.ErrorType
    | Parent.toProtobuf.ErrorType
    | GlobalErrorType
}
export async function getByParent(
  client: Client.Client,
  parameters: getByParent.ParametersType,
  options?: CallOptions,
): Promise<getByParent.ReturnType> {
  const message = await client.connectRpcClient.getCastsByParent(
    {
      parent: Parent.toProtobuf(parameters.parent),
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    casts: message.messages.map((message) =>
      CastAdd.fromMessageProtobuf(message),
    ),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}
getByParent.parseError = (error: unknown) => error as getByParent.ErrorType
