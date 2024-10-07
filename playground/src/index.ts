import { Actions, Client, Transport } from 'hubbie'

const client = Client.create(
  Transport.grpcNode({
    baseUrl: 'https://nemes.farcaster.xyz:2283',
    httpVersion: '2',
  }),
)

// the params are weird
Actions.Cast.getCastsByFid(client, {
  fid: '3',
  pageSize: 4,
  reverse: true,
  pageToken: '',
}).then((res) => console.log(res.messages?.map((message) => message.data)))
