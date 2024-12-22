import type * as Core from '../core/index.js'

/**
 * `ConversationTree` is a type that represents a tree of conversations.
 * It is different from `Conversation` in a way that it uses a tree-like
 * structure.
 */
export type ConversationTree<cast extends Core.Cast.Cast = Core.Cast.Cast> = {
  parent?: ConversationTree<cast> | null
  path: cast['meta']['hash'][]
  node: cast
  children: ConversationTree<cast>[]
}

export function filter({
  tree,
  fids,
}: filter.ParametersType): filter.ReturnType {
  const newTree: ConversationTree = {
    path: [...tree.path],
    parent: null,
    node: tree.node,
    children: [],
  }

  const uniquePaths = (() => {
    const paths: `0x${string}`[][] = []
    ;(function recursivelyFindApplicablePaths(tree: ConversationTree) {
      if (fids.includes(tree.node.fid)) {
        paths.push(tree.path)
      }
      for (const child of tree.children) {
        recursivelyFindApplicablePaths(child)
      }
    })(tree)
    return paths.filter(
      (pathA) =>
        // Keep pathA only if there isn't a longer path that contains it
        !paths.some(
          (pathB) =>
            pathB.length > pathA.length &&
            // Check if pathA is a subset of pathB
            pathA.every((node, index) => node === pathB[index]),
        ),
    )
  })()

  for (const uniquePath of uniquePaths) {
    let currentTree = newTree
    let searchTree = tree

    // Skip first hash since it's the root
    for (const hash of uniquePath.slice(1)) {
      // Find matching subtree in original tree
      const originalSubTree = searchTree.children.find(
        (childTree) => childTree.node.meta.hash === hash,
      )!

      // Update the search tree for next iteration
      searchTree = originalSubTree

      // Check if branch already exists in new tree
      let subTree = currentTree.children.find(
        (childTree) => childTree.node.meta.hash === hash,
      )

      if (!subTree) {
        // Create new branch if it doesn't exist
        subTree = {
          path: [...originalSubTree.path],
          parent: currentTree,
          node: originalSubTree.node,
          children: [],
        }
        currentTree.children.push(subTree)
      }
      currentTree = subTree
    }
  }

  return newTree
}

export declare namespace filter {
  type ParametersType = { tree: ConversationTree; fids: bigint[] }
  type ReturnType = ConversationTree
}

export function linearize<cast extends Core.Cast.Cast = Core.Cast.Cast>({
  tree,
}: linearize.ParametersType<cast>): linearize.ReturnType {
  const result: Core.Cast.Cast[][] = []

  function linearizeRecursively(
    tree: ConversationTree<cast>,
    currentPath: Core.Cast.Cast[] = [],
  ) {
    // Add current node to the path
    currentPath.push(tree.node)

    if (tree.children.length === 0) {
      // If it's a leaf node, add the complete path to results
      result.push([...currentPath])
    } else {
      // Process each child with a copy of the current path
      for (const child of tree.children) {
        linearizeRecursively(child, [...currentPath])
      }
    }
  }

  linearizeRecursively(tree, [])
  return result
}

export declare namespace linearize {
  type ParametersType<cast extends Core.Cast.Cast = Core.Cast.Cast> = {
    tree: ConversationTree<cast>
  }
  type ReturnType = Core.Cast.Cast[][]
}

export function log<cast extends Core.Cast.Cast = Core.Cast.Cast>({
  tree,
}: log.ParametersType<cast>): log.ReturnType {
  ;(function logConversation(value: ConversationTree<cast>) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(
      '|\x1b[25m%s\x1b[0m: \x1b[35m%s\x1b[0m',
      value.node.fid,
      (() => {
        if ('unwrapped' in value.node.text)
          return (value.node.text.unwrapped as string).replaceAll('\n', ' ')
        return value.node.text.value.replaceAll('\n', ' ')
      })(),
    )
    if (value.children.length > 0) console.group('|-|')
    for (const child of value.children) {
      logConversation(child)
    }
    if (value.children.length > 0) console.groupEnd()
  })(tree)
}

export declare namespace log {
  type ParametersType<cast extends Core.Cast.Cast = Core.Cast.Cast> = {
    tree: ConversationTree<cast>
  }
  type ReturnType = void
}
