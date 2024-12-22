import * as Fhub from 'fhub'
import * as FhubCore from 'fhub/core'
// import { NextPageToken } from 'fhub/_types/Node/Types'

const RPC_URL = process.env.RPC_URL ?? 'https://hub-grpc.pinata.cloud'
// const FID = (() => {
//   if (!process.env.FID) throw new Error('Specify your FID in env')
//   return BigInt(process.env.FID)
// })()
// const PRIVATE_KEY = (() => {
//   if (!process.env.PRIVATE_KEY)
//     throw new Error('Specify your PRIVATE_KEY in env')
//   return process.env.PRIVATE_KEY as `0x${string}`
// })()

const client = Fhub.Client.create(
  Fhub.Transport.grpcNode({
    baseUrl: RPC_URL,
    httpVersion: '2',
  }),
)

console.dir(
  await FhubCore.Actions.Cast.get(client, {
    fid: 11517n,
    hash: '0x11241be53fe76933e48e5d601a199ed3f5db254b',
  }),
)
console.dir(
  await Fhub.Actions.SuperCast.get(client, {
    fid: 11517n,
    hash: '0x11241be53fe76933e48e5d601a199ed3f5db254b',
  }),
)
