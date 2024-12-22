import * as Connect from '@connectrpc/connect'
import type { GlobalErrorType } from '../core/Error.js'
import * as RpcProtobuf from '../core/protobufs/rpc_pb.js'

export type Client = {
  connectRpcClient: Connect.Client<typeof RpcProtobuf.HubService>
  /** The gRPC transport */
  transport: Connect.Transport
}

export function create(transport: Connect.Transport): Client {
  const connectRpcClient = Connect.createClient(
    RpcProtobuf.HubService,
    transport,
  )

  return {
    connectRpcClient,
    transport,
  }
}

export declare namespace create {
  type ErrorType = GlobalErrorType
}

create.parseError = (error: unknown) => error as create.ErrorType
