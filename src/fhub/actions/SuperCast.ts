import type { CallOptions } from '@connectrpc/connect'
import type { Types } from 'ox'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as MessageProtobuf from '../../core/protobufs/message_pb.js'
import type * as Account from '../Account.js'
import type * as Client from '../Client.js'
import type * as SuperCast from '../SuperCast.js'
import * as Cast from './Cast.js'

export declare namespace createPreconstruct {
  type ParametersType = {
    cast: Omit<Core.Cast.Cast, 'meta' | 'fid' | 'timestamp'>
    account: Account.Account
  }
  type ReturnType = MessageProtobuf.Message
  type ErrorType = GlobalErrorType
}
export async function createPreconstruct(
  parameters: createPreconstruct.ParametersType,
): Promise<createPreconstruct.ReturnType> {
  const message = await Core.CastAdd.toMessageProtobuf({
    cast: {
      ...parameters.cast,
      timestamp: Math.floor(Date.now() / 1000),
    },
    account: parameters.account,
  })
  return message
}

createPreconstruct.parseError = (error: unknown) =>
  error as createPreconstruct.ErrorType

export declare namespace create {
  type ParametersType =
    | {
        cast: Omit<Core.Cast.Cast, 'meta' | 'fid' | 'timestamp'>
        account: Account.Account
      }
    | { message: createPreconstruct.ReturnType }
  type ReturnType = Core.Message.Message
  type ErrorType = GlobalErrorType
}
export async function create(
  client: Client.Client,
  parameters: create.ParametersType,
  options?: CallOptions,
): Promise<create.ReturnType> {
  const message =
    'message' in parameters
      ? parameters.message
      : await Core.CastAdd.toMessageProtobuf({
          cast: {
            ...parameters.cast,
            timestamp: Math.floor(Date.now() / 1000),
          },
          account: parameters.account,
        })
  return Core.Actions.Submit.submitMessage(client, message, options)
}

create.parseError = (error: unknown) => error as create.ErrorType

export declare namespace get {
  type ParametersType = Core.Actions.Cast.get.ParametersType
  type ReturnType = SuperCast.SuperCast
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const cast = await Core.Actions.Cast.get(client, parameters, options)

  const reactions = await (async () => {
    const reactions: Core.Reaction.Reaction[] = []
    let reactionsPageToken: Types.Hex | null = null
    do {
      const { nextPageToken, messages } = await Core.Actions.Reaction.getByCast(
        client,
        {
          ...parameters,
          pageToken: reactionsPageToken ? reactionsPageToken : undefined,
        },
      )
      reactionsPageToken = nextPageToken as any
      reactions.push(...messages)
    } while (reactionsPageToken)
    return reactions
  })()

  const likes = reactions.filter((reaction) => reaction.type === 'like')
  const recasts = reactions.filter((reaction) => reaction.type === 'recast')

  return {
    ...cast,
    text: {
      ...cast.text,
      unwrapped: await Cast.toString(client, cast),
    },
    likes,
    recasts,
  }
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getByFid {
  type ParametersType = Core.Actions.Cast.getByFid.ParametersType
  type ReturnType = {
    nextPageToken: Core.Pagination.NextPageToken
    casts: SuperCast.SuperCast[]
  }
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const casts: getByFid.ReturnType['casts'] = []
  const getCastsByFidResult: Core.Actions.Cast.getByFid.ReturnType =
    await Core.Actions.Cast.getByFid(client, parameters, options)

  casts.push(
    ...(await Promise.all(
      getCastsByFidResult.casts.map(async (cast) => {
        const reactions = await (async () => {
          const reactions: Core.Reaction.Reaction[] = []
          let reactionsPageToken: Types.Hex | null = null
          do {
            const { nextPageToken, messages } =
              await Core.Actions.Reaction.getByCast(client, {
                fid: cast.fid,
                hash: cast.meta.hash,
                pageToken: reactionsPageToken ? reactionsPageToken : undefined,
              })
            reactionsPageToken = nextPageToken as any
            reactions.push(...messages)
          } while (reactionsPageToken)
          return reactions
        })()

        const likes = reactions.filter((reaction) => reaction.type === 'like')
        const recasts = reactions.filter(
          (reaction) => reaction.type === 'recast',
        )

        return {
          ...cast,
          text: {
            ...cast.text,
            unwrapped: await Cast.toString(client, cast),
          },
          likes,
          recasts,
        }
      }),
    )),
  )
  return { ...getCastsByFidResult, casts }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType

export declare namespace getByParent {
  type ParametersType = Core.Actions.Cast.getByParent.ParametersType
  type ReturnType = SuperCast.SuperCast[]
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function getByParent(
  client: Client.Client,
  parameters: getByParent.ParametersType,
  options?: CallOptions,
): Promise<getByParent.ReturnType> {
  let castsPageToken: Types.Hex | null = null
  const casts: getByParent.ReturnType = []
  do {
    const getCastsByParentResult: Core.Actions.Cast.getByParent.ReturnType =
      await Core.Actions.Cast.getByParent(
        client,
        {
          pageToken: castsPageToken ?? undefined,
          ...parameters,
        },
        options,
      )
    casts.push(
      ...(await Promise.all(
        getCastsByParentResult.casts.map(async (cast) => {
          const reactions = await (async () => {
            const reactions: Core.Reaction.Reaction[] = []
            let reactionsPageToken: Types.Hex | null = null
            do {
              const { nextPageToken, messages } =
                await Core.Actions.Reaction.getByCast(client, {
                  fid: cast.fid,
                  hash: cast.meta.hash,
                  pageToken: reactionsPageToken
                    ? reactionsPageToken
                    : undefined,
                })
              reactionsPageToken = nextPageToken as any
              reactions.push(...messages)
            } while (reactionsPageToken)
            return reactions
          })()

          const likes = reactions.filter((reaction) => reaction.type === 'like')
          const recasts = reactions.filter(
            (reaction) => reaction.type === 'recast',
          )

          return {
            ...cast,
            text: {
              ...cast.text,
              unwrapped: await Cast.toString(client, cast),
            },
            likes,
            recasts,
          }
        }),
      )),
    )
    castsPageToken = getCastsByParentResult.nextPageToken
  } while (castsPageToken !== null)
  return casts
}

getByParent.parseError = (error: unknown) => error as getByParent.ErrorType
