import type {
  Transport,
  Client as connectRpc_Client,
} from '@connectrpc/connect'
import type { HubService } from '../Protobufs/rpc_pb.js'

export type Client = {
  connectRpcClient: connectRpc_Client<typeof HubService>
  /** The gRPC transport */
  transport: Transport
}
