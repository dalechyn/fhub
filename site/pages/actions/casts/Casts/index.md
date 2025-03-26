# Casts

Actions related to Casts, such as retrieval, creating, liking, recasting, etc.

## Functions

| Name                | Description                         |
| ------------------- | ----------------------------------- |
| [`Casts.create`](/actions/casts/Casts/create) | Creates a [`Cast.Cast`](/api/Cast/types#cast) and sends it to Hub. |
| [`Casts.createPreconstruct`](/actions/casts/Casts/createPreconstruct) | Preconstructs [`Cast.Cast`](/api/Cast/types#cast) creation message without submitting it to Hub. |
| [`Casts.fromString`](/actions/casts/Casts/fromString) | Creates an partial [`Cast.Cast`](/api/Cast/types#cast) from raw string. |
| [`Casts.get`](/actions/casts/Casts/get) | Get a [`Cast.Cast`](/api/Cast/types#cast) by it's `hash` and `fid` of the creator. |
| [`Casts.getAllCastMessagesByFid`](/actions/casts/Casts/getAllCastMessagesByFid) | Get all [`Cast.Cast`](/api/Cast/types#cast) creation and removal messages by `fid` of the creator. |
| [`Casts.getByFid`](/actions/casts/Casts/getByFid) | Get all [`Cast.Cast`](/api/Cast/types#cast)s by `fid` of the creator. |
| [`Casts.getByMention`](/actions/casts/Casts/getByMention) | Get all [`Cast.Cast`](/api/Cast/types#cast)s that mention a specific `fid`. |
| [`Casts.getByParent`](/actions/casts/Casts/getByParent) | Get all [`Cast.Cast`](/api/Cast/types#cast)s that are childs of another [`Cast.Cast`](/api/Cast/types#cast). |
| [`Casts.getRoot`](/actions/casts/Casts/getRoot) | Gets the root [`Cast.Cast`](/api/Cast/types#cast) by traversing parents. |
| [`Casts.getWithReactions`](/actions/casts/Casts/getWithReactions) | Get a [`Cast.Cast`](/api/Cast/types#cast) by it's `hash` and `fid` of the creator, with unwrapped text and reactions. |
| [`Casts.getWithReactionsByFid`](/actions/casts/Casts/getWithReactionsByFid) | Get all [`Cast.Cast`](/api/Cast/types#cast)s with reactions and unwrapped text by `fid` of the creator. |
| [`Casts.getWithReactionsByParent`](/actions/casts/Casts/getWithReactionsByParent) | Get all [`Cast.Cast`](/api/Cast/types#cast)s that are childs of another [`Cast.Cast`](/api/Cast/types#cast). |
| [`Casts.like`](/actions/casts/Casts/like) | Creates a like [`Reaction.Reaction`](/api/Reaction/types#reaction) and sends it to Hub. |
| [`Casts.likePreconstruct`](/actions/casts/Casts/likePreconstruct) | Preconstructs [`Reaction.Reaction`](/api/Reaction/types#reaction) creation like message without submitting it to Hub. |
| [`Casts.recast`](/actions/casts/Casts/recast) | Creates a recast [`Reaction.Reaction`](/api/Reaction/types#reaction) and sends it to Hub. |
| [`Casts.recastPreconstruct`](/actions/casts/Casts/recastPreconstruct) | Preconstructs [`Reaction.Reaction`](/api/Reaction/types#reaction) creation recast message without submitting it to Hub. |
| [`Casts.toString`](/actions/casts/Casts/toString) | Formats a [`Cast.Cast`](/api/Cast/types#cast) into a string. |