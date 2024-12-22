import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type { GlobalErrorType } from '../Error.js'
import * as Link from '../Link.js'
import * as LinkCompactState from '../LinkCompactState.js'
import * as Pagination from '../Pagination.js'

export declare namespace get {
  type ParametersType = {
    sourceFid: bigint
    targetFid: bigint
    type: string
  }
  type ReturnType = Link.Link
  type ErrorType = Link.fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const message = await client.connectRpcClient.getLink(
    {
      linkType: parameters.type,
      fid: parameters.sourceFid,
      target: {
        case: 'targetFid',
        value: parameters.targetFid,
      },
    },
    options,
  )
  return Link.fromMessageProtobuf(message)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getAllLinkMessagesByFid {
  type ParametersType = {
    sourceFid: bigint
  } & Pagination.PaginationWithTimestamps
  type ReturnType = {
    links: Link.Link[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getAllLinkMessagesByFid(
  client: Client.Client,
  parameters: getAllLinkMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllLinkMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllLinkMessagesByFid(
    { fid: parameters.sourceFid, ...Pagination.unwrap(parameters) },
    options,
  )
  return {
    links: message.messages.map(Link.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getAllLinkMessagesByFid.parseError = (error: unknown) =>
  error as getAllLinkMessagesByFid.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    sourceFid: bigint
    type: string
  } & Pagination.Pagination
  type ReturnType = {
    links: Link.Link[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinksByFid(
    {
      fid: parameters.sourceFid,
      linkType: parameters.type,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    links: message.messages.map(Link.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getByTarget {
  type ParametersType = {
    targetFid: bigint
    type: string
  } & Pagination.Pagination
  type ReturnType = {
    links: Link.Link[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getByTarget(
  client: Client.Client,
  parameters: getByTarget.ParametersType,
  options?: CallOptions,
): Promise<getByTarget.ReturnType> {
  const message = await client.connectRpcClient.getLinksByTarget(
    {
      target: { case: 'targetFid', value: parameters.targetFid },
      linkType: parameters.type,
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    links: message.messages.map(Link.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByTarget.parseError = (error: unknown) => error as getByTarget.ErrorType

export declare namespace getCompactStateMessageByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    links: LinkCompactState.LinkCompactState[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getCompactStateMessageByFid(
  client: Client.Client,
  parameters: getCompactStateMessageByFid.ParametersType,
  options?: CallOptions,
): Promise<getCompactStateMessageByFid.ReturnType> {
  const message = await client.connectRpcClient.getLinkCompactStateMessageByFid(
    { fid: parameters.fid, ...Pagination.unwrap(parameters) },
    options,
  )
  return {
    links: message.messages.map(LinkCompactState.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getCompactStateMessageByFid.parseError = (error: unknown) =>
  error as getCompactStateMessageByFid.ErrorType
