import { toBinary } from '@bufbuild/protobuf'
import type { CallOptions } from '@connectrpc/connect'
import {
  CastType,
  FarcasterNetwork,
  MessageData,
  makeCastAddData,
  makeMessageHash,
} from '@farcaster/core'
import { blake3 } from '@noble/hashes/blake3'
import { Hex } from 'ox'
import type { Client } from '../../../../Internal/Client/types.js'
import type { GlobalErrorType } from '../../../../Internal/Errors/error.js'
import type { Cast } from '../../Cast/types.js'
import { CastAdd_fromMessageProtobuf } from '../../CastAdd/fromMessageProtobuf.js'
import type { CastId } from '../../CastId/types.js'
import { FARCASTER_EPOCH_TIMESTAMP } from '../../Constants.js'
import * as Protobuf from '../../Protobufs/message_pb.js'

export declare namespace Actions_Cast_getCast {
  type ParametersType = CastId
  type ReturnType = Cast
  type ErrorType = CastAdd_fromMessageProtobuf.ErrorType | GlobalErrorType
}
export async function Actions_Cast_getCast(
  client: Client,
  parameters: Actions_Cast_getCast.ParametersType,
  options?: CallOptions,
): Promise<Actions_Cast_getCast.ReturnType> {
  const message = await client.connectRpcClient.getCast(
    { fid: parameters.fid, hash: Hex.toBytes(parameters.hash) },
    options,
  )

  // console.log('CAST MESSAGE HASH', message.hash)
  // console.log(
  //   'COMPUTED HASH',
  //   blake3(toBinary(Protobuf.MessageDataSchema, message.data!), { dkLen: 20 }),
  // )
  //
  // console.log('CAST MESSAGE DATA BYTES', message.hash)

  const res = CastAdd_fromMessageProtobuf(message)
  // const fcMessageData = await makeCastAddData(
  //   {
  //     text: res.text.value,
  //     type: CastType.CAST,
  //     embeds: [],
  //     embedsDeprecated: [],
  //     mentions: [],
  //     mentionsPositions: [],
  //   },
  //   {
  //     fid: 11517,
  //     timestamp: res.timestamp - FARCASTER_EPOCH_TIMESTAMP,
  //     network: FarcasterNetwork.MAINNET,
  //   },
  // ).then((res) => res._unsafeUnwrap())
  // console.log(
  //   'COMPUTED HASH V@@@@@@@@@',
  //   blake3(toBinary(Protobuf.MessageDataSchema, fcMessageData), { dkLen: 20 }),
  // )
  // console.log('FC MESSAGE DATA', fcMessageData)
  // console.log(
  //   'COMPUTED farcaster core HASH',
  //   await makeMessageHash(fcMessageData).then((res) => res._unsafeUnwrap()),
  // )
  return res
}

Actions_Cast_getCast.parseError = (error: unknown) =>
  error as Actions_Cast_getCast.ErrorType
