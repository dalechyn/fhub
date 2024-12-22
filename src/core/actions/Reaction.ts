import type { CallOptions } from '@connectrpc/connect'
import type * as Client from '../../fhub/Client.js'
import type * as CastId from '../CastId.js'
import type { GlobalErrorType } from '../Error.js'
import * as Pagination from '../Pagination.js'
import * as Reaction from '../Reaction.js'
import * as ReactionTarget from '../ReactionTarget.js'
import * as ReactionType from '../ReactionType.js'

export declare namespace getReaction {
  type ParametersType = {
    fid: bigint
    reactionType: ReactionType.ReactionType
    target: ReactionTarget.ReactionTarget
  }
  type ReturnType = Reaction.Reaction
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getReaction(
  client: Client.Client,
  parameters: getReaction.ParametersType,
  options?: CallOptions,
): Promise<getReaction.ReturnType> {
  const message = await client.connectRpcClient.getReaction(
    {
      fid: parameters.fid,
      reactionType: ReactionType.toProtobuf(parameters.reactionType),
      target: ReactionTarget.toProtobuf(parameters.target),
    },
    options,
  )
  return Reaction.fromMessageProtobuf(message)
}

getReaction.parseError = (error: unknown) => error as getReaction.ErrorType

export declare namespace getAllReactionMessagesByFid {
  type ParametersType = {
    fid: bigint
  } & Pagination.Pagination
  type ReturnType = {
    messages: Reaction.Reaction[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getAllReactionMessagesByFid(
  client: Client.Client,
  parameters: getAllReactionMessagesByFid.ParametersType,
  options?: CallOptions,
): Promise<getAllReactionMessagesByFid.ReturnType> {
  const message = await client.connectRpcClient.getAllReactionMessagesByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map(Reaction.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getAllReactionMessagesByFid.parseError = (error: unknown) =>
  error as getAllReactionMessagesByFid.ErrorType

export declare namespace getByCast {
  type ParametersType = CastId.CastId & Pagination.Pagination
  type ReturnType = {
    messages: Reaction.Reaction[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getByCast(
  client: Client.Client,
  parameters: getByCast.ParametersType,
  options?: CallOptions,
): Promise<getByCast.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByCast(
    {
      target: ReactionTarget.toProtobuf({ type: 'cast', ...parameters }),
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map(Reaction.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByCast.parseError = (error: unknown) => error as getByCast.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    fid: bigint
    type?: ReactionType.ReactionType
  } & Pagination.Pagination
  type ReturnType = {
    messages: Reaction.Reaction[]
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
  const message = await client.connectRpcClient.getReactionsByFid(
    {
      fid: parameters.fid,
      ...Pagination.unwrap(parameters),
    },
    options,
  )

  return {
    messages: message.messages.map(Reaction.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getByTarget {
  type ReturnType = {
    messages: Reaction.Reaction[]
    nextPageToken: Pagination.NextPageToken
  }
  // @TODO: proper error handling
  type ErrorType = GlobalErrorType
}
export async function getByTarget(
  client: Client.Client,
  parameters: ReactionTarget.ReactionTarget & Pagination.Pagination,
  options?: CallOptions,
): Promise<getByTarget.ReturnType> {
  const message = await client.connectRpcClient.getReactionsByTarget(
    {
      ...ReactionTarget.toProtobuf(parameters),
      ...Pagination.unwrap(parameters),
    },
    options,
  )
  return {
    messages: message.messages.map(Reaction.fromMessageProtobuf),
    nextPageToken: Pagination.getPageToken(message.nextPageToken),
  }
}

getByTarget.parseError = (error: unknown) => error as getByTarget.ErrorType
