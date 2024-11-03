import { Actions, Client, Transport } from 'fhub'
// import { Actions as NodeActions } from 'fhub/Node'

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

const client = Client.create(
  Transport.grpcNode({
    baseUrl: RPC_URL,
    httpVersion: '2',
  }),
)

// Actions.Cast.getCast(client, {
//   fid: 3621n,
//   hash: '880700eca6c454facaa9bd05ef15fa0b6996a0d2' as any,
// }).then((res) => console.log(res))

// console.time('casts')
// const casts = await Actions.Cast.getCastsByFid(client, {
//   fid: 3n,
//   pageSize: 2,
// })
// console.timeEnd('casts')
// console.dir(casts, { depth: null })
//
// console.time('bio')
// const myBio = await Actions.UserData.getUserDataBio(client, { fid: 11517n })
// // biome-ignore lint/suspicious/noConsoleLog: <explanation>
// console.log(myBio)
// console.timeEnd('bio')

// const castWithReactions = await Actions.Cast.getCast(client, {
//   hash: '0x62cda93dc3889a6f0c819cd4d9392b3af2cb452a',
//   fid: 862185n,
// })
// console.dir(castWithReactions, { depth: null })
// // biome-ignore lint/suspicious/noConsoleLog: <explanation>
// console.log('likes', castWithReactions.likes.length)
// // biome-ignore lint/suspicious/noConsoleLog: <explanation>
// console.log('recasts', castWithReactions.recasts.length)

// events subscriptions
// for await (const cast of Actions.Watch.watchCasts(client)) {
//   // biome-ignore lint/suspicious/noConsoleLog: <explanation>
//   console.log(`${cast.fid} casted at ${cast.timestamp}: ${cast.text.value}`)
// }
//

// const cast = await Actions.Cast.getCast(client, {
//   fid: FID,
//   hash: '0x388ec5079a518ca133ec87aac23e1c4743bcc860',
// })

//cast creation
const message = await Actions.Cast.create(client, {
  cast: {
    text: {
      value: 'I sent this cast from my fhub package',
    },
    isLong: false,
  },
  account: {
    fid: FID,
    privateKey: PRIVATE_KEY,
  },
})

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(message)
