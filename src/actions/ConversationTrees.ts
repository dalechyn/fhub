import type { CallOptions } from '@connectrpc/connect'
import type * as Cast from '../core/Cast.js'
import type * as Client from '../core/Client.js'
import type * as ConversationTree from '../core/ConversationTree.js'
import type { GlobalErrorType } from '../core/Error.js'
import type * as Pagination from '../core/Pagination.js'
import * as Casts from './Casts.js'

export declare namespace get {
  type ParametersType = Casts.get.ParametersType
  type ReturnType = ConversationTree.ConversationTree
  type ErrorType = Casts.get.ErrorType | GlobalErrorType
}
/**
 * Get a {@link fhub#ConversationTree.ConversationTree} by a given root {@link fhub#CastId.CastId}.
 *
 * :::note
 *
 * You will most likely be rate-limited unless you're using a paid Hub RPC.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { ConversationTrees } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const tree = await ConversationTrees.get(client, { fid: 11517n, hash: '0x93534c81d5bb02b3f753be6478bc1d69ccb71d24' })
 *
 * tree
 * // ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}.
 * @returns {@link fhub#ConversationTree.ConversationTree}
 */
export async function get(
  client: Client.Client,
  parameters: get.ParametersType,
  options?: CallOptions,
): Promise<get.ReturnType> {
  const cast = await Casts.get(client, parameters, options)
  // @TODO: proper error
  if (cast.parent !== undefined && cast.parent.type === 'cast')
    throw new Error(
      'You can get conversations by only specifying root cast using this method.',
    )

  async function getChildren(
    cast: Cast.Cast,
    parent: ConversationTree.ConversationTree | null,
  ): Promise<get.ReturnType> {
    const children = await (async () => {
      let nextPageToken: Pagination.NextPageToken | undefined = undefined
      const casts: Cast.Cast[] = []

      do {
        const getByParentResult: Casts.getByParent.ReturnType =
          await Casts.getByParent(
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
    excludedRoots?: Set<Cast.Cast['meta']['hash']>
  } & Pagination.Pagination
  type ReturnType = {
    conversationsTrees: get.ReturnType[]
    excludedRoots: Set<Cast.Cast['meta']['hash']>
    nextPageToken: Pagination.NextPageToken
  }
  type ErrorType = Casts.get.ErrorType | GlobalErrorType
}
/**
 * Get a {@link fhub#ConversationTree.ConversationTree} by a given creator `fid`.
 *
 * :::note
 *
 * Involves pagination.
 *
 * :::
 *
 * :::note
 *
 * You will most likely be rate-limited unless you're using a paid Hub RPC.
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Client, Transport } from 'fhub'
 * import { ConversationTrees } from 'fhub/actions'
 *
 * const client = Client.create(Transport.grpcNode({ baseUrl: 'https://hub-grpc.pinata.cloud' }))
 * const { conversationsTrees, nextPageToken } = await ConversationTrees.getByFid(client, { fid: 11517n })
 *
 * conversationsTrees
 * //               ^?
 *
 *
 *
 * ```
 *
 * @param client - Fhub Client.
 * @param parameters - {@link fhub#CastId.CastId}.
 * @returns {@link fhub#ConversationTree.ConversationTree}
 */
export async function getByFid(
  client: Client.Client,
  parameters: getByFid.ParametersType,
  options?: CallOptions,
): Promise<getByFid.ReturnType> {
  parameters.excludedRoots ??= new Set()
  const getByFidResult = await Casts.getByFid(client, parameters, options)

  const rootCasts = await (async () => {
    const res = await Promise.all(
      getByFidResult.casts.map(async (cast) => {
        try {
          return await Casts.getRoot(client, cast)
        } catch {
          return null
        }
      }),
    )
    return res.filter(
      (cast, i, casts): cast is Cast.Cast =>
        cast !== null &&
        casts.findIndex(
          (castToFind) => castToFind?.meta.hash === cast.meta.hash,
        ) === i,
    )
  })()

  const conversationsTrees = await Promise.all(
    rootCasts
      .filter((rootCast) => !parameters.excludedRoots!.has(rootCast.meta.hash))
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
