import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../core/Client.js'
import type { GlobalErrorType } from '../core/Error.js'
import * as Link from '../core/Link.js'
import * as LinkCompactState from '../core/LinkCompactState.js'
import * as Pagination from '../core/Pagination.js'

export declare namespace get {
  type ParametersType = {
    sourceFid: bigint
    targetFid: bigint
    type: 'follow'
  }
  type ReturnType = Link.Link
  type ErrorType = Link.fromMessageProtobuf.ErrorType | GlobalErrorType
}
/**
 * Get the {@link fhub#Link.Link} data between `sourceFid` and `targetFid` by it's `type`.
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { Links } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const link = await Links.get(client, { sourceFid: 11517n, targetFid: 1n, type: 'follow' })
 *
 * link
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `sourceFid` of the person who created the link, it's `targetFid` and `type`.
 * @returns {@link fhub#Link.Link}
 */
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
/**
 * Get all {@link fhub#Link.Link} messages data originated from `sourceFid`.
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
 * import { Links } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { links, nextPageToken } = await Links.getAllLinkMessagesByFid(client, { sourceFid: 11517n })
 *
 * links
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `sourceFid` of the person who created the link, it's `targetFid` and `type`.
 * @returns {@link fhub#Link.Link}s with the `nextPageToken`
 */
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
    type: 'follow'
  } & Pagination.Pagination
  type ReturnType = {
    links: Link.Link[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
/**
 * Get all {@link fhub#Link.Link}s data originated from `sourceFid`.
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
 * import { Links } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { links, nextPageToken } = await Links.getByFid(client, { sourceFid: 11517n, type: 'follow' })
 *
 * links
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `sourceFid` of the person who created links
 * @returns {@link fhub#Link.Link}s with the `nextPageToken`
 */
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
    type: 'follow'
  } & Pagination.Pagination
  type ReturnType = {
    links: Link.Link[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
/**
 * Get all {@link fhub#Link.Link}s data targeted at `targetFid` by `type`.
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
 * import { Links } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { links, nextPageToken } = await Links.getByTarget(client, { targetFid: 11517n, type: 'follow' })
 *
 * links
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `targetFid` of the person with whom links were created
 * @returns {@link fhub#Link.Link}s with the `nextPageToken`
 */
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
/**
 * Get all {@link fhub#LinkCompactState.LinkCompactState}s data originated from `fid`.
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
 * import { Links } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { links, nextPageToken } = await Links.getCompactStateMessageByFid(client, { fid: 11517n })
 *
 * links
 * //  ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - `targetFid` of the person with whom links were created
 * @returns {@link fhub#LinkCompactState.LinkCompactState}s with the `nextPageToken`
 */
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
