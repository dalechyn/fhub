import { create } from '@bufbuild/protobuf'
import type { GlobalErrorType } from '../../../Internal/Errors/error.js'
import { Cast_toProtobuf } from '../Cast/toProtobuf.js'
import type { Cast } from '../Cast/types.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../Constants.js'
import * as MessageProtobuf from '../Protobufs/message_pb.js'

// RECEIVED
// body: {
//      case: 'castAddBody',
//      value: {
//        '$typeName': 'CastAddBody',
//        embedsDeprecated: [],
//        mentions: [],
//        parent: { case: undefined },
//        text: 'my TODO list after buying my own place 🏡:\n' +
//          '- basic mattress (~100$)\n' +
//          '- fridge (~200$)\n' +
//          '- data rack with 10TB SSD, NVIDIA H200, 10Gb/s optics, 512GB ram, AMD EPYC 7502P (~100,000$)\n' +
//          '\n' +
//          'did I miss anything?',
//        mentionsPositions: [],
//        embeds: [],
//        type: 0
//      }
//    }

// CONSTRUICTED
// {
//   '$typeName': 'MessageData',
//   type: 1,
//   fid: 11517n,
//   timestamp: 121142222,
//   network: 1,
//   body: {
//     case: 'castAddBody',
//     value: {
//       '$typeName': 'CastAddBody',
//       embedsDeprecated: [],
//       mentions: [],
//       parent: { case: undefined },
//       text: 'my TODO list after buying my own place 🏡:\n' +
//         '- basic mattress (~100$)\n' +
//         '- fridge (~200$)\n' +
//         '- data rack with 10TB SSD, NVIDIA H200, 10Gb/s optics, 512GB ram, AMD EPYC 7502P (~100,000$)\n' +
//         '\n' +
//         'did I miss anything?',
//       mentionsPositions: [],
//       embeds: [],
//       type: 0
//     }
//   }
// }

export function CastAdd_toMessageDataProtobuf(
  cast: CastAdd_toMessageDataProtobuf.ParametersType,
): CastAdd_toMessageDataProtobuf.ReturnType {
  return create(MessageProtobuf.MessageDataSchema, {
    timestamp: cast.timestamp - FARCASTER_EPOCH_TIMESTAMP,
    type: MessageProtobuf.MessageType.CAST_ADD,
    fid: cast.fid,
    network: MessageProtobuf.FarcasterNetwork.MAINNET,
    body: {
      case: 'castAddBody',
      value: Cast_toProtobuf(cast),
    },
  })
}

export declare namespace CastAdd_toMessageDataProtobuf {
  type ParametersType = Omit<Cast, 'meta'>
  type ReturnType = MessageProtobuf.MessageData

  type ErrorType = GlobalErrorType
}

CastAdd_toMessageDataProtobuf.parseError = (error: unknown) =>
  error as CastAdd_toMessageDataProtobuf.ErrorType
