// vocs.config.tsx
import { defineConfig } from 'file:///Users/vladyslav/Repositories/fhub/node_modules/.pnpm/vocs@1.0.0-alpha.62_@types+node@22.10.2_@types+react@18.3.18_acorn@8.14.0_react-dom@18.3.1_re_tthekf7fa5pebs37yq3xnltagu/node_modules/vocs/_lib/index.js'

// ../src/package.json
const package_default = {
  name: 'fhub',
  description: 'TypeScript Interface for Farcaster Hubs',
  version: '0.0.0',
  type: 'module',
  module: './_esm/fhub/index.js',
  types: './_types/fhub/index.d.ts',
  typings: './_types/fhub/index.d.ts',
  sideEffects: false,
  files: ['*', '!**/*.tsbuildinfo', '!tsconfig.build.json', '!jsr.json'],
  bin: {
    fhub: './_esm/cli/Bin.js',
  },
  exports: {
    '.': {
      types: './_types/fhub/index.d.ts',
      import: './_esm/fhub/index.js',
    },
    './core': {
      types: './_types/core/index.d.ts',
      import: './_esm/core/index.js',
    },
    './cli': {
      types: './_types/cli/index.d.ts',
      import: './_esm/cli/index.js',
    },
    './Account': {
      types: './_types/fhub/Account.d.ts',
      import: './_esm/fhub/Account.js',
    },
    './Actions': {
      types: './_types/fhub/Actions.d.ts',
      import: './_esm/fhub/Actions.js',
    },
    './Client': {
      types: './_types/fhub/Client.d.ts',
      import: './_esm/fhub/Client.js',
    },
    './Conversation': {
      types: './_types/fhub/Conversation.d.ts',
      import: './_esm/fhub/Conversation.js',
    },
    './ConversationTree': {
      types: './_types/fhub/ConversationTree.d.ts',
      import: './_esm/fhub/ConversationTree.js',
    },
    './SuperCast': {
      types: './_types/fhub/SuperCast.d.ts',
      import: './_esm/fhub/SuperCast.js',
    },
    './Types': {
      types: './_types/fhub/Types.d.ts',
      import: './_esm/fhub/Types.js',
    },
    './Transport': {
      types: './_types/fhub/Transport.d.ts',
      import: './_esm/fhub/Transport.js',
    },
    './Utils': {
      types: './_types/fhub/Utils.d.ts',
      import: './_esm/fhub/Utils.js',
    },
    './package.json': './package.json',
  },
  peerDependencies: {
    typescript: '>=5.0.4',
  },
  peerDependenciesMeta: {
    typescript: {
      optional: true,
    },
  },
  dependencies: {
    '@bufbuild/protobuf': '^2.2.2',
    '@connectrpc/connect': '^2.0.0',
    '@connectrpc/connect-node': '^2.0.0',
    '@connectrpc/connect-web': '^2.0.0',
    '@farcaster/core': '^0.15.6',
    '@noble/ed25519': '^2.1.0',
    '@noble/hashes': '^1.5.0',
    'bundle-require': '^5.0.0',
    cac: '^6.7.14',
    dedent: '^1.5.3',
    esbuild: '^0.24.2',
    'find-up': '^7.0.0',
    'fs-extra': '^11.2.0',
    ora: '^8.1.1',
    ox: '0.6.9',
    pathe: '^1.1.2',
    picocolors: '^1.1.1',
    prettier: '^3.3.3',
    zod: '^3.23.8',
  },
  license: 'MIT',
  repository: 'dalechyn/fhub',
  authors: ['dalechyn.eth'],
  devDependencies: {
    '@types/fs-extra': '^11.0.4',
  },
}

// config-generated.ts
const sidebar = {
  '/fhub': {
    backLink: true,
    items: [
      {
        text: 'Overview',
        link: '/fhub',
      },
      {
        text: 'Authentication',
        items: [
          {
            collapsed: true,
            items: [
              {
                text: '.fromEd25519Signer',
                link: '/fhub/authentication/Account/fromEd25519Signer',
              },
              {
                text: '.fromFarcasterEd25519Signer',
                link: '/fhub/authentication/Account/fromFarcasterEd25519Signer',
              },
              {
                text: '.fromPrivateKeyAndFid',
                link: '/fhub/authentication/Account/fromPrivateKeyAndFid',
              },
              {
                text: '.fromString',
                link: '/fhub/authentication/Account/fromString',
              },
              {
                text: 'Types',
                link: '/fhub/authentication/Account/types',
              },
            ],
            link: '/fhub/authentication/Account',
            text: 'Account',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.create',
                link: '/fhub/authentication/Client/create',
              },
              {
                text: 'Types',
                link: '/fhub/authentication/Client/types',
              },
            ],
            link: '/fhub/authentication/Client',
            text: 'Client',
          },
          {
            collapsed: true,
            items: [],
            link: '/fhub/authentication/Transport',
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
                text: 'Types',
                link: '/fhub/extras/Conversation/types',
              },
            ],
            link: '/fhub/extras/Conversation',
            text: 'Conversation',
          },
          {
            collapsed: true,
            items: [
              {
                text: '.filter',
                link: '/fhub/extras/ConversationTree/filter',
              },
              {
                text: '.linearize',
                link: '/fhub/extras/ConversationTree/linearize',
              },
              {
                text: '.log',
                link: '/fhub/extras/ConversationTree/log',
              },
              {
                text: 'Types',
                link: '/fhub/extras/ConversationTree/types',
              },
            ],
            link: '/fhub/extras/ConversationTree',
            text: 'ConversationTree',
          },
          {
            collapsed: true,
            items: [
              {
                text: 'Types',
                link: '/fhub/extras/SuperCast/types',
              },
            ],
            link: '/fhub/extras/SuperCast',
            text: 'SuperCast',
          },
        ],
      },
    ],
  },
  '/api': {
    backLink: true,
    items: [
      {
        text: 'Overview',
        link: '/api',
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
        text: 'Embeds',
        items: [
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
}
const topNav = [
  {
    text: 'Fhub',
    link: '/fhub',
  },
  {
    text: 'Core',
    link: '/api',
  },
]

// vocs.config.tsx
import {
  ModuleKind,
  ModuleResolutionKind,
} from 'file:///Users/vladyslav/Repositories/fhub/node_modules/.pnpm/typescript@5.7.2/node_modules/typescript/lib/typescript.js'
const vocs_config_default = defineConfig({
  twoslash: {
    compilerOptions: {
      moduleResolution: ModuleResolutionKind.NodeNext,
      module: ModuleKind.NodeNext,
    },
  },
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? 'https://fhub.sh'
      : process.env.VERCEL_URL,
  title: 'Fhub',
  titleTemplate: '%s \xB7 Fhub',
  description: 'Farcaster Hub Interface',
  ogImageUrl: {
    '/': '/og-image.png',
  },
  iconUrl: { light: '/logo-light.png', dark: '/logo-dark.png' },
  logoUrl: { light: '/logo-light.png', dark: '/logo-dark.png' },
  markdown: {
    code: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  rootDir: '.',
  sidebar: {
    '/': [
      { text: 'Introduction', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Error Handling', link: '/error-handling' },
      { text: 'Platform Compatibility', link: '/platform-compatibility' },
      {
        text: 'Guides',
        // collapsed: true,
        items: [{ text: 'TODO', link: '/guides/todo' }],
      },
      {
        text: 'API Reference',
        link: '/api',
        items: [],
      },
    ],
    ...sidebar,
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/dalechyn/fhub',
    },
    {
      icon: 'warpcast',
      link: 'https://warpcast.com/dalechyn',
    },
  ],
  theme: {
    accentColor: {
      light: '#412a7b',
      dark: '#bd976a',
    },
  },
  topNav: [
    ...topNav,
    {
      text: 'API Reference',
      link: '/api',
    },
    {
      text: package_default.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/dalechyn/fhub/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/dalechyn/fhub/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})
export { vocs_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIi4uL3NyYy9wYWNrYWdlLmpzb24iLCAiY29uZmlnLWdlbmVyYXRlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCBwa2cgZnJvbSAnLi4vc3JjL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vY29uZmlnLWdlbmVyYXRlZCdcbmltcG9ydCB7IE1vZHVsZUtpbmQsIE1vZHVsZVJlc29sdXRpb25LaW5kIH0gZnJvbSAndHlwZXNjcmlwdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdHdvc2xhc2g6IHtcbiAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgIG1vZHVsZVJlc29sdXRpb246IE1vZHVsZVJlc29sdXRpb25LaW5kLk5vZGVOZXh0LFxuICAgICAgbW9kdWxlOiBNb2R1bGVLaW5kLk5vZGVOZXh0LFxuICAgIH0sXG4gIH0sXG4gIGJhc2VVcmw6XG4gICAgcHJvY2Vzcy5lbnYuVkVSQ0VMX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICA/ICdodHRwczovL2ZodWIuc2gnXG4gICAgICA6IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwsXG4gIHRpdGxlOiAnRmh1YicsXG4gIHRpdGxlVGVtcGxhdGU6ICclcyBcdTAwQjcgRmh1YicsXG4gIGRlc2NyaXB0aW9uOiAnRmFyY2FzdGVyIEh1YiBJbnRlcmZhY2UnLFxuICBvZ0ltYWdlVXJsOiB7XG4gICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvbG9nby1saWdodC5wbmcnLCBkYXJrOiAnL2xvZ28tZGFyay5wbmcnIH0sXG4gIGxvZ29Vcmw6IHsgbGlnaHQ6ICcvbG9nby1saWdodC5wbmcnLCBkYXJrOiAnL2xvZ28tZGFyay5wbmcnIH0sXG4gIG1hcmtkb3duOiB7XG4gICAgY29kZToge1xuICAgICAgdGhlbWVzOiB7XG4gICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXG4gICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByb290RGlyOiAnLicsXG4gIHNpZGViYXI6IHtcbiAgICAnLyc6IFtcbiAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICB7IHRleHQ6ICdFcnJvciBIYW5kbGluZycsIGxpbms6ICcvZXJyb3ItaGFuZGxpbmcnIH0sXG4gICAgICB7IHRleHQ6ICdQbGF0Zm9ybSBDb21wYXRpYmlsaXR5JywgbGluazogJy9wbGF0Zm9ybS1jb21wYXRpYmlsaXR5JyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnR3VpZGVzJyxcbiAgICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogJ1RPRE8nLCBsaW5rOiAnL2d1aWRlcy90b2RvJyB9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBUEkgUmVmZXJlbmNlJyxcbiAgICAgICAgbGluazogJy9hcGknLFxuICAgICAgICBpdGVtczogW10sXG4gICAgICB9LFxuICAgIF0sXG4gICAgLi4uc2lkZWJhcixcbiAgfSxcbiAgc29jaWFsczogW1xuICAgIHtcbiAgICAgIGljb246ICdnaXRodWInLFxuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYWxlY2h5bi9maHViJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICd3YXJwY2FzdCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly93YXJwY2FzdC5jb20vZGFsZWNoeW4nLFxuICAgIH0sXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgYWNjZW50Q29sb3I6IHtcbiAgICAgIGxpZ2h0OiAnIzQxMmE3YicsXG4gICAgICBkYXJrOiAnI2JkOTc2YScsXG4gICAgfSxcbiAgfSxcbiAgdG9wTmF2OiBbXG4gICAgLi4udG9wTmF2LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBUEkgUmVmZXJlbmNlJyxcbiAgICAgIGxpbms6ICcvYXBpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IHBrZy52ZXJzaW9uLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vZGFsZWNoeW4vZmh1Yi9ibG9iL21haW4vc3JjL0NIQU5HRUxPRy5tZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ29udHJpYnV0aW5nJyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbGVjaHluL2ZodWIvYmxvYi9tYWluLy5naXRodWIvQ09OVFJJQlVUSU5HLm1kJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn0pXG4iLCAie1xuICBcIm5hbWVcIjogXCJmaHViXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUeXBlU2NyaXB0IEludGVyZmFjZSBmb3IgRmFyY2FzdGVyIEh1YnNcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9fZXNtL2ZodWIvaW5kZXguanNcIixcbiAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2ZodWIvaW5kZXguZC50c1wiLFxuICBcInR5cGluZ3NcIjogXCIuL190eXBlcy9maHViL2luZGV4LmQudHNcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBmYWxzZSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCIqXCIsXG4gICAgXCIhKiovKi50c2J1aWxkaW5mb1wiLFxuICAgIFwiIXRzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICBcIiFqc3IuanNvblwiXG4gIF0sXG4gIFwiYmluXCI6IHtcbiAgICBcImZodWJcIjogXCIuL19lc20vY2xpL0Jpbi5qc1wiXG4gIH0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL190eXBlcy9maHViL2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9fZXNtL2ZodWIvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2NvcmVcIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2NvcmUvaW5kZXguZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL19lc20vY29yZS9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vY2xpXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL190eXBlcy9jbGkvaW5kZXguZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL19lc20vY2xpL2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9BY2NvdW50XCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL190eXBlcy9maHViL0FjY291bnQuZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL19lc20vZmh1Yi9BY2NvdW50LmpzXCJcbiAgICB9LFxuICAgIFwiLi9BY3Rpb25zXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL190eXBlcy9maHViL0FjdGlvbnMuZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL19lc20vZmh1Yi9BY3Rpb25zLmpzXCJcbiAgICB9LFxuICAgIFwiLi9DbGllbnRcIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2ZodWIvQ2xpZW50LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9fZXNtL2ZodWIvQ2xpZW50LmpzXCJcbiAgICB9LFxuICAgIFwiLi9Db252ZXJzYXRpb25cIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2ZodWIvQ29udmVyc2F0aW9uLmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9fZXNtL2ZodWIvQ29udmVyc2F0aW9uLmpzXCJcbiAgICB9LFxuICAgIFwiLi9Db252ZXJzYXRpb25UcmVlXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL190eXBlcy9maHViL0NvbnZlcnNhdGlvblRyZWUuZC50c1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL19lc20vZmh1Yi9Db252ZXJzYXRpb25UcmVlLmpzXCJcbiAgICB9LFxuICAgIFwiLi9TdXBlckNhc3RcIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2ZodWIvU3VwZXJDYXN0LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9fZXNtL2ZodWIvU3VwZXJDYXN0LmpzXCJcbiAgICB9LFxuICAgIFwiLi9UeXBlc1wiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9fdHlwZXMvZmh1Yi9UeXBlcy5kLnRzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vX2VzbS9maHViL1R5cGVzLmpzXCJcbiAgICB9LFxuICAgIFwiLi9UcmFuc3BvcnRcIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vX3R5cGVzL2ZodWIvVHJhbnNwb3J0LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9fZXNtL2ZodWIvVHJhbnNwb3J0LmpzXCJcbiAgICB9LFxuICAgIFwiLi9VdGlsc1wiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9fdHlwZXMvZmh1Yi9VdGlscy5kLnRzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vX2VzbS9maHViL1V0aWxzLmpzXCJcbiAgICB9LFxuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiPj01LjAuNFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc01ldGFcIjoge1xuICAgIFwidHlwZXNjcmlwdFwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBidWZidWlsZC9wcm90b2J1ZlwiOiBcIl4yLjIuMlwiLFxuICAgIFwiQGNvbm5lY3RycGMvY29ubmVjdFwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQGNvbm5lY3RycGMvY29ubmVjdC1ub2RlXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJAY29ubmVjdHJwYy9jb25uZWN0LXdlYlwiOiBcIl4yLjAuMFwiLFxuICAgIFwiQGZhcmNhc3Rlci9jb3JlXCI6IFwiXjAuMTUuNlwiLFxuICAgIFwiQG5vYmxlL2VkMjU1MTlcIjogXCJeMi4xLjBcIixcbiAgICBcIkBub2JsZS9oYXNoZXNcIjogXCJeMS41LjBcIixcbiAgICBcImJ1bmRsZS1yZXF1aXJlXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJjYWNcIjogXCJeNi43LjE0XCIsXG4gICAgXCJkZWRlbnRcIjogXCJeMS41LjNcIixcbiAgICBcImVzYnVpbGRcIjogXCJeMC4yNC4yXCIsXG4gICAgXCJmaW5kLXVwXCI6IFwiXjcuMC4wXCIsXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4yLjBcIixcbiAgICBcIm9yYVwiOiBcIl44LjEuMVwiLFxuICAgIFwib3hcIjogXCIwLjYuOVwiLFxuICAgIFwicGF0aGVcIjogXCJeMS4xLjJcIixcbiAgICBcInBpY29jb2xvcnNcIjogXCJeMS4xLjFcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJ6b2RcIjogXCJeMy4yMy44XCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicmVwb3NpdG9yeVwiOiBcImRhbGVjaHluL2ZodWJcIixcbiAgXCJhdXRob3JzXCI6IFtcbiAgICBcImRhbGVjaHluLmV0aFwiXG4gIF0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9mcy1leHRyYVwiOiBcIl4xMS4wLjRcIlxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy92bGFkeXNsYXYvUmVwb3NpdG9yaWVzL2ZodWIvc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZsYWR5c2xhdi9SZXBvc2l0b3JpZXMvZmh1Yi9zaXRlL2NvbmZpZy1nZW5lcmF0ZWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZsYWR5c2xhdi9SZXBvc2l0b3JpZXMvZmh1Yi9zaXRlL2NvbmZpZy1nZW5lcmF0ZWQudHNcIjtleHBvcnQgY29uc3Qgc2lkZWJhciA9IHtcbiAgXCIvZmh1YlwiOiB7XG4gICAgXCJiYWNrTGlua1wiOiB0cnVlLFxuICAgIFwiaXRlbXNcIjogW1xuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJPdmVydmlld1wiLFxuICAgICAgICBcImxpbmtcIjogXCIvZmh1YlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJBdXRoZW50aWNhdGlvblwiLFxuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZnJvbUVkMjU1MTlTaWduZXJcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvZmh1Yi9hdXRoZW50aWNhdGlvbi9BY2NvdW50L2Zyb21FZDI1NTE5U2lnbmVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tRmFyY2FzdGVyRWQyNTUxOVNpZ25lclwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2F1dGhlbnRpY2F0aW9uL0FjY291bnQvZnJvbUZhcmNhc3RlckVkMjU1MTlTaWduZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21Qcml2YXRlS2V5QW5kRmlkXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvYXV0aGVudGljYXRpb24vQWNjb3VudC9mcm9tUHJpdmF0ZUtleUFuZEZpZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZnJvbVN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2F1dGhlbnRpY2F0aW9uL0FjY291bnQvZnJvbVN0cmluZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2F1dGhlbnRpY2F0aW9uL0FjY291bnQvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvYXV0aGVudGljYXRpb24vQWNjb3VudFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQWNjb3VudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvYXV0aGVudGljYXRpb24vQ2xpZW50L2NyZWF0ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2F1dGhlbnRpY2F0aW9uL0NsaWVudC90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvZmh1Yi9hdXRoZW50aWNhdGlvbi9DbGllbnRcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkNsaWVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXSxcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2F1dGhlbnRpY2F0aW9uL1RyYW5zcG9ydFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHJhbnNwb3J0XCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkV4dHJhc1wiLFxuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2V4dHJhcy9Db252ZXJzYXRpb24vdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvZXh0cmFzL0NvbnZlcnNhdGlvblwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQ29udmVyc2F0aW9uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5maWx0ZXJcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvZmh1Yi9leHRyYXMvQ29udmVyc2F0aW9uVHJlZS9maWx0ZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmxpbmVhcml6ZVwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2V4dHJhcy9Db252ZXJzYXRpb25UcmVlL2xpbmVhcml6ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIubG9nXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvZXh0cmFzL0NvbnZlcnNhdGlvblRyZWUvbG9nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlR5cGVzXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvZXh0cmFzL0NvbnZlcnNhdGlvblRyZWUvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2ZodWIvZXh0cmFzL0NvbnZlcnNhdGlvblRyZWVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkNvbnZlcnNhdGlvblRyZWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvZmh1Yi9leHRyYXMvU3VwZXJDYXN0L3R5cGVzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9maHViL2V4dHJhcy9TdXBlckNhc3RcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlN1cGVyQ2FzdFwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIi9hcGlcIjoge1xuICAgIFwiYmFja0xpbmtcIjogdHJ1ZSxcbiAgICBcIml0ZW1zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiT3ZlcnZpZXdcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiL2FwaVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9BY3Rpb25zXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJBY3Rpb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkNhc3RzXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3QvZnJvbVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b1Byb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0L3RvUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRXJyb3JzXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0L2Vycm9yc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvQ2FzdC90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkNhc3RcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RBZGQvZnJvbU1lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9IZXhcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RBZGQvdG9IZXhcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvTWVzc2FnZURhdGFQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvQ2FzdEFkZC90b01lc3NhZ2VEYXRhUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0QWRkL3RvTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkVycm9yc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvQ2FzdEFkZC9lcnJvcnNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0QWRkXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJDYXN0QWRkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RJZC9mcm9tUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RJZC90b1Byb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlR5cGVzXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0SWQvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0SWRcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkNhc3RJZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZnJvbU1lc3NhZ2VQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvQ2FzdFJlbW92ZS9mcm9tTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b0hleFwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvQ2FzdFJlbW92ZS90b0hleFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlRGF0YVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0UmVtb3ZlL3RvTWVzc2FnZURhdGFQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RSZW1vdmUvdG9NZXNzYWdlUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0Nhc3RSZW1vdmUvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9DYXN0UmVtb3ZlXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJDYXN0UmVtb3ZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1BhcmVudC9mcm9tUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1BhcmVudC90b1Byb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkVycm9yc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUGFyZW50L2Vycm9yc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUGFyZW50L3R5cGVzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUGFyZW50XCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJQYXJlbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRW1iZWRzXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0VtYmVkL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvRW1iZWQvdG9Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJFcnJvcnNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0VtYmVkL2Vycm9yc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvRW1iZWQvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9FbWJlZFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRW1iZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRnJhbWVBY3Rpb25Cb2R5XCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0ZyYW1lQWN0aW9uQm9keS9mcm9tUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0ZyYW1lQWN0aW9uQm9keS90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0ZyYW1lQWN0aW9uQm9keVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRnJhbWVBY3Rpb25Cb2R5XCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIkh1YkV2ZW50XCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0h1YkV2ZW50L2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvSHViRXZlbnQvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9IdWJFdmVudFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSHViRXZlbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTGlua3NcIixcbiAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmsvZnJvbU1lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZnJvbVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGluay90b1Byb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkVycm9yc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGluay9lcnJvcnNcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmsvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJMaW5rXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b0hleFwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGlua0FkZC90b0hleFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlRGF0YVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rQWRkL3RvTWVzc2FnZURhdGFQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmtBZGQvdG9NZXNzYWdlUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rQWRkXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJMaW5rQWRkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rQ29tcGFjdFN0YXRlL2Zyb21NZXNzYWdlUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvSGV4XCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rQ29tcGFjdFN0YXRlL3RvSGV4XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VEYXRhUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmtDb21wYWN0U3RhdGUvdG9NZXNzYWdlRGF0YVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGlua0NvbXBhY3RTdGF0ZS90b01lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGlua0NvbXBhY3RTdGF0ZS90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmtDb21wYWN0U3RhdGVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkxpbmtDb21wYWN0U3RhdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvSGV4XCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9MaW5rUmVtb3ZlL3RvSGV4XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VEYXRhUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmtSZW1vdmUvdG9NZXNzYWdlRGF0YVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTGlua1JlbW92ZS90b01lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL0xpbmtSZW1vdmVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIkxpbmtSZW1vdmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiTWVzc2FnZVwiLFxuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZnJvbVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9NZXNzYWdlL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTWVzc2FnZS90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL01lc3NhZ2VcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIk1lc3NhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmNyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTWV0YS9jcmVhdGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTWV0YS9mcm9tUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL01ldGEvdG9Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJFcnJvcnNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL01ldGEvZXJyb3JzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlR5cGVzXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9NZXRhL3R5cGVzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvTWV0YVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiTWV0YVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIuZ2V0UGFnZVRva2VuXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9QYWdpbmF0aW9uL2dldFBhZ2VUb2tlblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudW53cmFwXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9QYWdpbmF0aW9uL3Vud3JhcFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUGFnaW5hdGlvbi90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1BhZ2luYXRpb25cIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlBhZ2luYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0ZXh0XCI6IFwiUmVhY3Rpb25zXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvbi9mcm9tTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb24vdG9Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJFcnJvcnNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uL2Vycm9yc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb24vdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvblwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUmVhY3Rpb25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvSGV4XCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvbkFkZC90b0hleFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlRGF0YVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvbkFkZC90b01lc3NhZ2VEYXRhUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvbkFkZC90b01lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uQWRkXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJSZWFjdGlvbkFkZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbGxhcHNlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9IZXhcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uUmVtb3ZlL3RvSGV4XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VEYXRhUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uUmVtb3ZlL3RvTWVzc2FnZURhdGFQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uUmVtb3ZlL3RvTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb25SZW1vdmVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlJlYWN0aW9uUmVtb3ZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uVGFyZ2V0L2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb25UYXJnZXQvdG9Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb25UYXJnZXQvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9SZWFjdGlvblRhcmdldFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUmVhY3Rpb25UYXJnZXRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb25UeXBlL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvUmVhY3Rpb25UeXBlL3RvUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uVHlwZS90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1JlYWN0aW9uVHlwZVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUmVhY3Rpb25UeXBlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIlVzZXJEYXRhXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9Vc2VyRGF0YS9mcm9tTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJEYXRhL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9IZXhcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJEYXRhL3RvSGV4XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VEYXRhUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJEYXRhL3RvTWVzc2FnZURhdGFQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJEYXRhL3RvTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b1Byb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9Vc2VyRGF0YS90b1Byb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkVycm9yc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVXNlckRhdGEvZXJyb3JzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlR5cGVzXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9Vc2VyRGF0YS90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJEYXRhXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJVc2VyRGF0YVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRleHRcIjogXCJVc2VybmFtZVByb29mXCIsXG4gICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9Vc2VybmFtZVByb29mL2Zyb21NZXNzYWdlUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVXNlcm5hbWVQcm9vZi9mcm9tUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1VzZXJuYW1lUHJvb2YvdHlwZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9Vc2VybmFtZVByb29mXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJVc2VybmFtZVByb29mXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidGV4dFwiOiBcIlZlcmlmaWNhdGlvbnNcIixcbiAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb2xsYXBzZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLmZyb21Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uL2Zyb21Qcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9Qcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uL3RvUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVHlwZXNcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvbi90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvblwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9WZXJpZmljYXRpb25BZGQvZnJvbU1lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9IZXhcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvbkFkZC90b0hleFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCIudG9NZXNzYWdlRGF0YVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9WZXJpZmljYXRpb25BZGQvdG9NZXNzYWdlRGF0YVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uQWRkL3RvTWVzc2FnZVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkVycm9yc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uQWRkL2Vycm9yc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvbkFkZFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVmVyaWZpY2F0aW9uQWRkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi5mcm9tTWVzc2FnZVByb3RvYnVmXCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9WZXJpZmljYXRpb25SZW1vdmFsL2Zyb21NZXNzYWdlUHJvdG9idWZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiLnRvSGV4XCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiL2FwaS9WZXJpZmljYXRpb25SZW1vdmFsL3RvSGV4XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VEYXRhUHJvdG9idWZcIixcbiAgICAgICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvblJlbW92YWwvdG9NZXNzYWdlRGF0YVByb3RvYnVmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIi50b01lc3NhZ2VQcm90b2J1ZlwiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uUmVtb3ZhbC90b01lc3NhZ2VQcm90b2J1ZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJUeXBlc1wiLFxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcIi9hcGkvVmVyaWZpY2F0aW9uUmVtb3ZhbC90eXBlc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxpbmtcIjogXCIvYXBpL1ZlcmlmaWNhdGlvblJlbW92YWxcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlZlcmlmaWNhdGlvblJlbW92YWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuZXhwb3J0IGNvbnN0IHRvcE5hdiA9IFtcbiAge1xuICAgIFwidGV4dFwiOiBcIkZodWJcIixcbiAgICBcImxpbmtcIjogXCIvZmh1YlwiXG4gIH0sXG4gIHtcbiAgICBcInRleHRcIjogXCJDb3JlXCIsXG4gICAgXCJsaW5rXCI6IFwiL2FwaVwiXG4gIH1cbl0iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7OztBQ0E3QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsT0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFPO0FBQUEsSUFDTCxNQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsS0FBSztBQUFBLE1BQ0gsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE9BQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLE9BQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsTUFDaEIsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLHNCQUFzQjtBQUFBLE1BQ3BCLE9BQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLE9BQVM7QUFBQSxNQUNULFFBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxPQUFTO0FBQUEsTUFDVCxRQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLGtCQUFvQjtBQUFBLElBQ2xCLFlBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0Esc0JBQXdCO0FBQUEsSUFDdEIsWUFBYztBQUFBLE1BQ1osVUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2Qsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsNEJBQTRCO0FBQUEsSUFDNUIsMkJBQTJCO0FBQUEsSUFDM0IsbUJBQW1CO0FBQUEsSUFDbkIsa0JBQWtCO0FBQUEsSUFDbEIsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsS0FBTztBQUFBLElBQ1AsUUFBVTtBQUFBLElBQ1YsU0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsWUFBWTtBQUFBLElBQ1osS0FBTztBQUFBLElBQ1AsSUFBTTtBQUFBLElBQ04sT0FBUztBQUFBLElBQ1QsWUFBYztBQUFBLElBQ2QsVUFBWTtBQUFBLElBQ1osS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVc7QUFBQSxFQUNYLFlBQWM7QUFBQSxFQUNkLFNBQVc7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsbUJBQW1CO0FBQUEsRUFDckI7QUFDRjs7O0FDMUd3VCxJQUFNLFVBQVU7QUFBQSxFQUN0VSxTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVMsQ0FBQztBQUFBLFlBQ1YsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUyxDQUFDO0FBQUEsWUFDVixRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxjQUNQO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLGNBQ1A7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsY0FDUDtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0UsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQTtBQUFBLGdCQUNFLFFBQVE7QUFBQSxnQkFDUixRQUFRO0FBQUEsY0FDVjtBQUFBLGNBQ0E7QUFBQSxnQkFDRSxRQUFRO0FBQUEsZ0JBQ1IsUUFBUTtBQUFBLGNBQ1Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxRQUFRO0FBQUEsWUFDUixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNPLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNWO0FBQ0Y7OztBRjd1QkEsU0FBUyxZQUFZLDRCQUE0QjtBQUVqRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsSUFDUixpQkFBaUI7QUFBQSxNQUNmLGtCQUFrQixxQkFBcUI7QUFBQSxNQUN2QyxRQUFRLFdBQVc7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQ0UsUUFBUSxJQUFJLGVBQWUsZUFDdkIsb0JBQ0EsUUFBUSxJQUFJO0FBQUEsRUFDbEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLElBQ1YsS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLFNBQVMsRUFBRSxPQUFPLG1CQUFtQixNQUFNLGlCQUFpQjtBQUFBLEVBQzVELFNBQVMsRUFBRSxPQUFPLG1CQUFtQixNQUFNLGlCQUFpQjtBQUFBLEVBQzVELFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxJQUFJO0FBQUEsTUFDbEMsRUFBRSxNQUFNLGdCQUFnQixNQUFNLGdCQUFnQjtBQUFBLE1BQzlDLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0I7QUFBQSxNQUNsRCxFQUFFLE1BQU0sMEJBQTBCLE1BQU0sMEJBQTBCO0FBQUEsTUFDbEU7QUFBQSxRQUNFLE1BQU07QUFBQTtBQUFBLFFBRU4sT0FBTyxDQUFDLEVBQUUsTUFBTSxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsTUFDaEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPLENBQUM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLElBQ0EsR0FBRztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixHQUFHO0FBQUEsSUFDSDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNLGdCQUFJO0FBQUEsTUFDVixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
