import { Actions, Client, Transport } from 'fhub'
// import { Actions as NodeActions } from 'fhub/Node'
// import {
//   file_hub_event,
//   HubEventType,
// } from '../../src/Node/Internal/Protobufs/hub_event_pb'

const client = Client.create(
  Transport.grpcNode({
    baseUrl: 'https://nemes.farcaster.xyz:2283',
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
for await (const cast of Actions.Watch.watchCasts(client)) {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(`${cast.fid} casted at ${cast.timestamp}: ${cast.text.value}`)
}
