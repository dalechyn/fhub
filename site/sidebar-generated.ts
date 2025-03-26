export const sidebar = [
  {
    text: 'Overview',
    link: '/api',
  },
  {
    text: 'Account',
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
    ],
  },
  {
    text: 'Actions',
    items: [
      {
        collapsed: true,
        items: [],
        link: '/api/Actions',
        text: 'Actions',
      },
    ],
  },
  {
    text: 'Client',
    items: [
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
    ],
  },
  {
    text: 'Conversation',
    items: [
      {
        collapsed: true,
        items: [
          {
            text: 'Types',
            link: '/api/Conversation/types',
          },
        ],
        link: '/api/Conversation',
        text: 'Conversation',
      },
    ],
  },
  {
    text: 'ConversationTree',
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
    text: 'SuperCast',
    items: [
      {
        collapsed: true,
        items: [
          {
            text: 'Types',
            link: '/api/SuperCast/types',
          },
        ],
        link: '/api/SuperCast',
        text: 'SuperCast',
      },
    ],
  },
  {
    text: 'Transport',
    items: [
      {
        collapsed: true,
        items: [],
        link: '/api/Transport',
        text: 'Transport',
      },
    ],
  },
]
