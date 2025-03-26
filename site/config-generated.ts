export const sidebar = {
  '/api': {
    backLink: true,
    items: [
      {
        text: 'Overview',
        link: '/api',
      },
      {
        text: 'Casts',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/Cast/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Cast/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Cast/errors',
              },
              {
                text: 'Types',
                link: '/api/Cast/types',
              },
            ],
            link: '/api/Cast',
            text: 'Cast',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/CastAdd/fromMessageProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/CastAdd/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/CastAdd/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/CastAdd/toMessageProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/CastAdd/errors',
              },
            ],
            link: '/api/CastAdd',
            text: 'CastAdd',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/CastId/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/CastId/toProtobuf',
              },
              {
                text: 'Types',
                link: '/api/CastId/types',
              },
            ],
            link: '/api/CastId',
            text: 'CastId',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/CastRemove/fromMessageProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/CastRemove/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/CastRemove/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/CastRemove/toMessageProtobuf',
              },
              {
                text: 'Types',
                link: '/api/CastRemove/types',
              },
            ],
            link: '/api/CastRemove',
            text: 'CastRemove',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/Embed/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Embed/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Embed/errors',
              },
              {
                text: 'Types',
                link: '/api/Embed/types',
              },
            ],
            link: '/api/Embed',
            text: 'Embed',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/Parent/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Parent/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Parent/errors',
              },
              {
                text: 'Types',
                link: '/api/Parent/types',
              },
            ],
            link: '/api/Parent',
            text: 'Parent',
          },
        ],
      },
      {
        text: 'Connection',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromEd25519Signer',
                link: '/api/Account/fromEd25519Signer',
              },
              {
                text: '.fromFarcasterEd25519Signer',
                link: '/api/Account/fromFarcasterEd25519Signer',
              },
              {
                text: '.fromPrivateKeyAndFid',
                link: '/api/Account/fromPrivateKeyAndFid',
              },
              {
                text: '.fromString',
                link: '/api/Account/fromString',
              },
              {
                text: 'Types',
                link: '/api/Account/types',
              },
            ],
            link: '/api/Account',
            text: 'Account',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.create',
                link: '/api/Client/create',
              },
              {
                text: 'Types',
                link: '/api/Client/types',
              },
            ],
            link: '/api/Client',
            text: 'Client',
          },
          {
            collapsed: true,
            items: [],
            link: '/api/Transport',
            text: 'Transport',
          },
        ],
      },
      {
        text: 'Extras',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.filter',
                link: '/api/ConversationTree/filter',
              },
              {
                text: '.linearize',
                link: '/api/ConversationTree/linearize',
              },
              {
                text: '.log',
                link: '/api/ConversationTree/log',
              },
              {
                text: 'Types',
                link: '/api/ConversationTree/types',
              },
            ],
            link: '/api/ConversationTree',
            text: 'ConversationTree',
          },
        ],
      },
      {
        text: 'FrameActionBody',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/FrameActionBody/fromProtobuf',
              },
              {
                text: 'Types',
                link: '/api/FrameActionBody/types',
              },
            ],
            link: '/api/FrameActionBody',
            text: 'FrameActionBody',
          },
        ],
      },
      {
        text: 'HubEvent',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/HubEvent/fromProtobuf',
              },
              {
                text: 'Types',
                link: '/api/HubEvent/types',
              },
            ],
            link: '/api/HubEvent',
            text: 'HubEvent',
          },
        ],
      },
      {
        text: 'Links',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/Link/fromMessageProtobuf',
              },
              {
                text: '.fromProtobuf',
                link: '/api/Link/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Link/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Link/errors',
              },
              {
                text: 'Types',
                link: '/api/Link/types',
              },
            ],
            link: '/api/Link',
            text: 'Link',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.toHex',
                link: '/api/LinkAdd/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/LinkAdd/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/LinkAdd/toMessageProtobuf',
              },
            ],
            link: '/api/LinkAdd',
            text: 'LinkAdd',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/LinkCompactState/fromMessageProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/LinkCompactState/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/LinkCompactState/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/LinkCompactState/toMessageProtobuf',
              },
              {
                text: 'Types',
                link: '/api/LinkCompactState/types',
              },
            ],
            link: '/api/LinkCompactState',
            text: 'LinkCompactState',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.toHex',
                link: '/api/LinkRemove/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/LinkRemove/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/LinkRemove/toMessageProtobuf',
              },
            ],
            link: '/api/LinkRemove',
            text: 'LinkRemove',
          },
        ],
      },
      {
        text: 'Message',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/Message/fromProtobuf',
              },
              {
                text: 'Types',
                link: '/api/Message/types',
              },
            ],
            link: '/api/Message',
            text: 'Message',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.create',
                link: '/api/Meta/create',
              },
              {
                text: '.fromProtobuf',
                link: '/api/Meta/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Meta/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Meta/errors',
              },
              {
                text: 'Types',
                link: '/api/Meta/types',
              },
            ],
            link: '/api/Meta',
            text: 'Meta',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.getPageToken',
                link: '/api/Pagination/getPageToken',
              },
              {
                text: '.unwrap',
                link: '/api/Pagination/unwrap',
              },
              {
                text: 'Types',
                link: '/api/Pagination/types',
              },
            ],
            link: '/api/Pagination',
            text: 'Pagination',
          },
        ],
      },
      {
        text: 'Reactions',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/Reaction/fromMessageProtobuf',
              },
              {
                text: '.fromProtobuf',
                link: '/api/Reaction/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Reaction/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/Reaction/errors',
              },
              {
                text: 'Types',
                link: '/api/Reaction/types',
              },
            ],
            link: '/api/Reaction',
            text: 'Reaction',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.toHex',
                link: '/api/ReactionAdd/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/ReactionAdd/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/ReactionAdd/toMessageProtobuf',
              },
            ],
            link: '/api/ReactionAdd',
            text: 'ReactionAdd',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.toHex',
                link: '/api/ReactionRemove/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/ReactionRemove/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/ReactionRemove/toMessageProtobuf',
              },
            ],
            link: '/api/ReactionRemove',
            text: 'ReactionRemove',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/ReactionTarget/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/ReactionTarget/toProtobuf',
              },
              {
                text: 'Types',
                link: '/api/ReactionTarget/types',
              },
            ],
            link: '/api/ReactionTarget',
            text: 'ReactionTarget',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/ReactionType/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/ReactionType/toProtobuf',
              },
              {
                text: 'Types',
                link: '/api/ReactionType/types',
              },
            ],
            link: '/api/ReactionType',
            text: 'ReactionType',
          },
        ],
      },
      {
        text: 'UserData',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/UserData/fromMessageProtobuf',
              },
              {
                text: '.fromProtobuf',
                link: '/api/UserData/fromProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/UserData/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/UserData/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/UserData/toMessageProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/UserData/toProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/UserData/errors',
              },
              {
                text: 'Types',
                link: '/api/UserData/types',
              },
            ],
            link: '/api/UserData',
            text: 'UserData',
          },
        ],
      },
      {
        text: 'UsernameProof',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/UsernameProof/fromMessageProtobuf',
              },
              {
                text: '.fromProtobuf',
                link: '/api/UsernameProof/fromProtobuf',
              },
              {
                text: 'Types',
                link: '/api/UsernameProof/types',
              },
            ],
            link: '/api/UsernameProof',
            text: 'UsernameProof',
          },
        ],
      },
      {
        text: 'Verifications',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromProtobuf',
                link: '/api/Verification/fromProtobuf',
              },
              {
                text: '.toProtobuf',
                link: '/api/Verification/toProtobuf',
              },
              {
                text: 'Types',
                link: '/api/Verification/types',
              },
            ],
            link: '/api/Verification',
            text: 'Verification',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/VerificationAdd/fromMessageProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/VerificationAdd/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/VerificationAdd/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/VerificationAdd/toMessageProtobuf',
              },
              {
                text: 'Errors',
                link: '/api/VerificationAdd/errors',
              },
            ],
            link: '/api/VerificationAdd',
            text: 'VerificationAdd',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.fromMessageProtobuf',
                link: '/api/VerificationRemoval/fromMessageProtobuf',
              },
              {
                text: '.toHex',
                link: '/api/VerificationRemoval/toHex',
              },
              {
                text: '.toMessageDataProtobuf',
                link: '/api/VerificationRemoval/toMessageDataProtobuf',
              },
              {
                text: '.toMessageProtobuf',
                link: '/api/VerificationRemoval/toMessageProtobuf',
              },
              {
                text: 'Types',
                link: '/api/VerificationRemoval/types',
              },
            ],
            link: '/api/VerificationRemoval',
            text: 'VerificationRemoval',
          },
        ],
      },
    ],
  },
  '/actions': {
    backLink: true,
    items: [
      {
        text: 'Overview',
        link: '/actions',
      },
      {
        text: 'Casts',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.create',
                link: '/actions/casts/Casts/create',
              },
              {
                text: '.createPreconstruct',
                link: '/actions/casts/Casts/createPreconstruct',
              },
              {
                text: '.fromString',
                link: '/actions/casts/Casts/fromString',
              },
              {
                text: '.get',
                link: '/actions/casts/Casts/get',
              },
              {
                text: '.getAllCastMessagesByFid',
                link: '/actions/casts/Casts/getAllCastMessagesByFid',
              },
              {
                text: '.getByFid',
                link: '/actions/casts/Casts/getByFid',
              },
              {
                text: '.getByMention',
                link: '/actions/casts/Casts/getByMention',
              },
              {
                text: '.getByParent',
                link: '/actions/casts/Casts/getByParent',
              },
              {
                text: '.getRoot',
                link: '/actions/casts/Casts/getRoot',
              },
              {
                text: '.getWithReactions',
                link: '/actions/casts/Casts/getWithReactions',
              },
              {
                text: '.getWithReactionsByFid',
                link: '/actions/casts/Casts/getWithReactionsByFid',
              },
              {
                text: '.getWithReactionsByParent',
                link: '/actions/casts/Casts/getWithReactionsByParent',
              },
              {
                text: '.like',
                link: '/actions/casts/Casts/like',
              },
              {
                text: '.likePreconstruct',
                link: '/actions/casts/Casts/likePreconstruct',
              },
              {
                text: '.recast',
                link: '/actions/casts/Casts/recast',
              },
              {
                text: '.recastPreconstruct',
                link: '/actions/casts/Casts/recastPreconstruct',
              },
              {
                text: '.toString',
                link: '/actions/casts/Casts/toString',
              },
            ],
            link: '/actions/casts/Casts',
            text: 'Casts',
          },
        ],
      },
      {
        text: 'External',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.getCastIdFromUrl',
                link: '/actions/external/Warpcast/getCastIdFromUrl',
              },
            ],
            link: '/actions/external/Warpcast',
            text: 'Warpcast',
          },
        ],
      },
      {
        text: 'Extra',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.get',
                link: '/actions/extra/ConversationTrees/get',
              },
              {
                text: '.getByFid',
                link: '/actions/extra/ConversationTrees/getByFid',
              },
            ],
            link: '/actions/extra/ConversationTrees',
            text: 'ConversationTrees',
          },
        ],
      },
      {
        text: 'Links',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.get',
                link: '/actions/links/Links/get',
              },
              {
                text: '.getAllLinkMessagesByFid',
                link: '/actions/links/Links/getAllLinkMessagesByFid',
              },
              {
                text: '.getByFid',
                link: '/actions/links/Links/getByFid',
              },
              {
                text: '.getByTarget',
                link: '/actions/links/Links/getByTarget',
              },
              {
                text: '.getCompactStateMessageByFid',
                link: '/actions/links/Links/getCompactStateMessageByFid',
              },
            ],
            link: '/actions/links/Links',
            text: 'Links',
          },
        ],
      },
      {
        text: 'Low-level',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.getCurrentStorageLimitsByFid',
                link: '/actions/lowlevel/OnChainEvents/getCurrentStorageLimitsByFid',
              },
              {
                text: '.getFids',
                link: '/actions/lowlevel/OnChainEvents/getFids',
              },
              {
                text: '.getIdRegistryOnChainEvent',
                link: '/actions/lowlevel/OnChainEvents/getIdRegistryOnChainEvent',
              },
              {
                text: '.getIdRegistryOnChainEventByAddress',
                link: '/actions/lowlevel/OnChainEvents/getIdRegistryOnChainEventByAddress',
              },
              {
                text: '.getOnChainSigner',
                link: '/actions/lowlevel/OnChainEvents/getOnChainSigner',
              },
              {
                text: '.getOnChainSignersByFid',
                link: '/actions/lowlevel/OnChainEvents/getOnChainSignersByFid',
              },
              {
                text: '.OnChainEvents_getOnChainEvents',
                link: '/actions/lowlevel/OnChainEvents/OnChainEvents_getOnChainEvents',
              },
            ],
            link: '/actions/lowlevel/OnChainEvents',
            text: 'OnChainEvents',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.getAllReactionMessagesByFid',
                link: '/actions/lowlevel/Reactions/getAllReactionMessagesByFid',
              },
              {
                text: '.getByCast',
                link: '/actions/lowlevel/Reactions/getByCast',
              },
              {
                text: '.getByFid',
                link: '/actions/lowlevel/Reactions/getByFid',
              },
              {
                text: '.getByTarget',
                link: '/actions/lowlevel/Reactions/getByTarget',
              },
              {
                text: '.getReaction',
                link: '/actions/lowlevel/Reactions/getReaction',
              },
            ],
            link: '/actions/lowlevel/Reactions',
            text: 'Reactions',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.submitBulkMessages',
                link: '/actions/lowlevel/Submit/submitBulkMessages',
              },
              {
                text: '.submitMessage',
                link: '/actions/lowlevel/Submit/submitMessage',
              },
            ],
            link: '/actions/lowlevel/Submit',
            text: 'Submit',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.getAllMessagesBySyncIds',
                link: '/actions/lowlevel/Sync/getAllMessagesBySyncIds',
              },
              {
                text: '.getAllSyncIdsByPrefix',
                link: '/actions/lowlevel/Sync/getAllSyncIdsByPrefix',
              },
              {
                text: '.getInfo',
                link: '/actions/lowlevel/Sync/getInfo',
              },
              {
                text: '.getSyncMetadataByPrefix',
                link: '/actions/lowlevel/Sync/getSyncMetadataByPrefix',
              },
              {
                text: '.getSyncSnapshotByPrefix',
                link: '/actions/lowlevel/Sync/getSyncSnapshotByPrefix',
              },
              {
                text: '.getSyncStatus',
                link: '/actions/lowlevel/Sync/getSyncStatus',
              },
            ],
            link: '/actions/lowlevel/Sync',
            text: 'Sync',
          },
        ],
      },
      {
        text: 'User',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.follow',
                link: '/actions/user/User/follow',
              },
              {
                text: '.followByUsername',
                link: '/actions/user/User/followByUsername',
              },
              {
                text: '.followPreconstruct',
                link: '/actions/user/User/followPreconstruct',
              },
              {
                text: '.get',
                link: '/actions/user/User/get',
              },
              {
                text: '.getAllUserDataMessagesByFid',
                link: '/actions/user/User/getAllUserDataMessagesByFid',
              },
              {
                text: '.getBio',
                link: '/actions/user/User/getBio',
              },
              {
                text: '.getByFid',
                link: '/actions/user/User/getByFid',
              },
              {
                text: '.getData',
                link: '/actions/user/User/getData',
              },
              {
                text: '.getDisplay',
                link: '/actions/user/User/getDisplay',
              },
              {
                text: '.getLocation',
                link: '/actions/user/User/getLocation',
              },
              {
                text: '.getPfp',
                link: '/actions/user/User/getPfp',
              },
              {
                text: '.getUrl',
                link: '/actions/user/User/getUrl',
              },
              {
                text: '.getUsername',
                link: '/actions/user/User/getUsername',
              },
              {
                text: '.update',
                link: '/actions/user/User/update',
              },
              {
                text: '.updatePreconstruct',
                link: '/actions/user/User/updatePreconstruct',
              },
            ],
            link: '/actions/user/User',
            text: 'User',
          },
        ],
      },
      {
        text: 'Watch',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.watchCasts',
                link: '/actions/watch/Watch/watchCasts',
              },
              {
                text: '.watchCastsCompliantToRegexp',
                link: '/actions/watch/Watch/watchCastsCompliantToRegexp',
              },
              {
                text: '.watchCastsMentioningFid',
                link: '/actions/watch/Watch/watchCastsMentioningFid',
              },
              {
                text: '.watchCastsMentioningUsername',
                link: '/actions/watch/Watch/watchCastsMentioningUsername',
              },
            ],
            link: '/actions/watch/Watch',
            text: 'Watch',
          },
        ],
      },
    ],
  },
}
export const topNav = [
  {
    text: 'Core',
    link: '/api',
  },
  {
    text: 'Actions',
    link: '/actions',
  },
]
