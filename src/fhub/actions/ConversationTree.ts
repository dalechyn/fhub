import type { CallOptions } from '@connectrpc/connect'
import type { GlobalErrorType } from '../../core/Error.js'
import * as Core from '../../core/index.js'
import type * as Client from '../Client.js'
import type * as ConversationTree from '../ConversationTree.js'
import * as Cast from './Cast.js'

export declare namespace get {
  type ParametersType = Core.Actions.Cast.get.ParametersType
  type ReturnType = ConversationTree.ConversationTree
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const cast = await Core.Actions.Cast.get(client, parameters, options)
  // @TODO: proper error
  if (cast.parent !== undefined && cast.parent.type === 'cast')
    throw new Error(
      'You can get conversations by only specifying root cast using this method.',
    )

  async function getChildren(
    cast: Core.Cast.Cast,
    parent: ConversationTree.ConversationTree | null,
  ): Promise<get.ReturnType> {
    const children = await (async () => {
      let nextPageToken: Core.Pagination.NextPageToken | undefined = undefined
      const casts: Core.Cast.Cast[] = []

      do {
        const getByParentResult: Core.Actions.Cast.getByParent.ReturnType =
          await Core.Actions.Cast.getByParent(
            client,
            {
              parent: { type: 'cast', fid: cast.fid, hash: cast.meta.hash },
              // @TODO: consider exporting this as params
              reverse: true,
              pageSize: 100,
              pageToken: nextPageToken,
            },
            options,
          )
        casts.push(...getByParentResult.casts)
        nextPageToken = getByParentResult.nextPageToken
      } while (nextPageToken !== null)

      return casts
    })()
    const tree = {
      node: cast,
      parent: parent,
      path: [...(parent?.path ?? []), cast.meta.hash],
      children: [],
    } as ConversationTree.ConversationTree
    tree.children = await Promise.all(
      children.map((child) => getChildren(child, tree)),
    )
    return tree
  }
  return getChildren(cast, null)
}

get.parseError = (error: unknown) => error as get.ErrorType

export declare namespace getByFid {
  type ParametersType = {
    fid: bigint
    excludedRoots: Set<Core.Cast.Cast['meta']['hash']>
  } & Core.Pagination.Pagination
  type ReturnType = {
    conversationsTrees: get.ReturnType[]
    excludedRoots: Set<Core.Cast.Cast['meta']['hash']>
    nextPageToken: Core.Pagination.NextPageToken
  }
  type ErrorType = Core.Actions.Cast.get.ErrorType | GlobalErrorType
}
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  const getByFidResult = await Core.Actions.Cast.getByFid(
    client,
    parameters,
    options,
  )

  const rootCasts = await (async () => {
    const res = await Promise.all(
      getByFidResult.casts.map(async (cast) => {
        try {
          return await Cast.getRoot(client, cast)
        } catch {
          return null
        }
      }),
    )
    return res.filter(
      (cast, i, casts): cast is Core.Cast.Cast =>
        cast !== null &&
        casts.findIndex(
          (castToFind) => castToFind?.meta.hash === cast.meta.hash,
        ) === i,
    )
  })()

  const conversationsTrees = await Promise.all(
    rootCasts
      .filter((rootCast) => !parameters.excludedRoots.has(rootCast.meta.hash))
      .map((rootCast) => {
        return get(
          client,
          { fid: rootCast.fid, hash: rootCast.meta.hash },
          options,
        )
      }),
  )

  const excludedRoots = parameters.excludedRoots.union(
    new Set([...rootCasts].map((cast) => cast.meta.hash)),
  )

  return {
    conversationsTrees,
    excludedRoots,
    nextPageToken: getByFidResult.nextPageToken,
  }
}

getByFid.parseError = (error: unknown) => error as getByFid.ErrorType
