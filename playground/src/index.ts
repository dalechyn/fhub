import * as Fhub from 'fhub'

// import * as FhubCore from 'fhub/core'
// import { NextPageToken } from 'fhub/_types/Node/Types'

const RPC_URL = process.env.RPC_URL ?? 'https://hub-grpc.pinata.cloud'
const FID = (() => {
  if (!process.env.FID) throw new Error('Specify your FID in env')
  return BigInt(process.env.FID)
})()
const PRIVATE_KEY = (() => {
  if (!process.env.PRIVATE_KEY)
    throw new Error('Specify your PRIVATE_KEY in env')
  return process.env.PRIVATE_KEY as `0x${string}`
})()

const account = Fhub.Account.fromPrivateKeyAndFid({
  privateKey: PRIVATE_KEY,
  fid: FID,
})

const client = Fhub.Client.create(
  Fhub.Transport.grpcNode({
    baseUrl: RPC_URL,
  }),
)

// console.dir(
//   await FhubCore.Actions.Cast.get(client, {
//     fid: 11517n,
//     hash: '0x11241be53fe76933e48e5d601a199ed3f5db254b',
//   }),
// )
// console.dir(
//   await Fhub.Actions.SuperCast.get(client, {
//     fid: 11517n,
//     hash: '0x11241be53fe76933e48e5d601a199ed3f5db254b',
//   }),
// )

console.dir(
  await Fhub.Actions.User.update(client, {
    account,
    data: { type: 'bio', value: '29JAN0305' },
  }),
)

// await Fhub.Actions.Cast.create(client, {
//   cast: await Fhub.Actions.Cast.fromString(client, {text: `I'm sending this cast from fhub. It contains mentions of @farcaster, @dalechyn.eth, @vladyslav.
// It also contains a cast embed (https://warpcast.com/dalechyn.eth/0x9c0a228b). I sent it using just a string. It also contains a cool cat pic at the end\nhttps://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/0cf0da74-9bf1-4d4a-4b96-2cb950801400/original`}),
//
//   account,
// })
