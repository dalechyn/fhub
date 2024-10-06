import { createPublicClient } from 'hubbie/clients'
import { grpcNode } from 'hubbie/clients/transports'

const publicClient = createPublicClient({
  transport: grpcNode({
    baseUrl: 'https://nemes.farcaster.xyz:2283',
    httpVersion: '2',
  }),
})

publicClient
  // the params are weird
  .getCastsByFid({ fid: '3', pageSize: 4, reverse: true, pageToken: '' })
  .then((res) => console.log(res.messages?.map((message) => message.data)))
