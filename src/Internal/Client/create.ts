import {
  type Transport,
  createClient as connectRpc_createClient,
} from '@connectrpc/connect'
import { HubService } from '../../Node/Internal/Protobufs/rpc_pb.js'
import type { GlobalErrorType } from '../Errors/error.js'
import type { Client } from './types.js'

export function Client_create(transport: Transport): Client {
  const connectRpcClient = connectRpc_createClient(HubService, transport)

  return {
    connectRpcClient,
    transport,
  }
}

export declare namespace Client_create {
  type ErrorType = GlobalErrorType
}

Client_create.parseError = (error: unknown) => error as Client_create.ErrorType
