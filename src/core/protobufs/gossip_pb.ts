// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=js,json_types=true"
// @generated from file gossip.proto (syntax proto3)
/* eslint-disable */

import type { Message } from '@bufbuild/protobuf'
import type { GenEnum, GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1'
import { enumDesc, fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1'
import type {
  FarcasterNetwork,
  FarcasterNetworkJson,
  Message as Message$1,
  MessageJson,
} from './message_pb.js'
import { file_message } from './message_pb.js'

/**
 * Describes the file gossip.proto.
 */
export const file_gossip: GenFile =
  /*@__PURE__*/
  fileDesc(
    'Cgxnb3NzaXAucHJvdG8iVAoRR29zc2lwQWRkcmVzc0luZm8SDwoHYWRkcmVzcxgBIAEoCRIOCgZmYW1pbHkYAiABKA0SDAoEcG9ydBgDIAEoDRIQCghkbnNfbmFtZRgEIAEoCSL2AQoWQ29udGFjdEluZm9Db250ZW50Qm9keRIqCg5nb3NzaXBfYWRkcmVzcxgBIAEoCzISLkdvc3NpcEFkZHJlc3NJbmZvEicKC3JwY19hZGRyZXNzGAIgASgLMhIuR29zc2lwQWRkcmVzc0luZm8SFwoPZXhjbHVkZWRfaGFzaGVzGAMgAygJEg0KBWNvdW50GAQgASgNEhMKC2h1Yl92ZXJzaW9uGAUgASgJEiIKB25ldHdvcmsYBiABKA4yES5GYXJjYXN0ZXJOZXR3b3JrEhMKC2FwcF92ZXJzaW9uGAcgASgJEhEKCXRpbWVzdGFtcBgIIAEoBCLkAgoSQ29udGFjdEluZm9Db250ZW50EioKDmdvc3NpcF9hZGRyZXNzGAEgASgLMhIuR29zc2lwQWRkcmVzc0luZm8SJwoLcnBjX2FkZHJlc3MYAiABKAsyEi5Hb3NzaXBBZGRyZXNzSW5mbxIXCg9leGNsdWRlZF9oYXNoZXMYAyADKAkSDQoFY291bnQYBCABKA0SEwoLaHViX3ZlcnNpb24YBSABKAkSIgoHbmV0d29yaxgGIAEoDjIRLkZhcmNhc3Rlck5ldHdvcmsSEwoLYXBwX3ZlcnNpb24YByABKAkSEQoJdGltZXN0YW1wGAggASgEEiUKBGJvZHkYCSABKAsyFy5Db250YWN0SW5mb0NvbnRlbnRCb2R5EhEKCXNpZ25hdHVyZRgKIAEoDBIOCgZzaWduZXIYCyABKAwSFwoKZGF0YV9ieXRlcxgMIAEoDEgAiAEBQg0KC19kYXRhX2J5dGVzIkYKD1BpbmdNZXNzYWdlQm9keRIbChNwaW5nX29yaWdpbl9wZWVyX2lkGAEgASgMEhYKDnBpbmdfdGltZXN0YW1wGAIgASgEIngKDkFja01lc3NhZ2VCb2R5EhsKE3Bpbmdfb3JpZ2luX3BlZXJfaWQYASABKAwSGgoSYWNrX29yaWdpbl9wZWVyX2lkGAIgASgMEhYKDnBpbmdfdGltZXN0YW1wGAMgASgEEhUKDWFja190aW1lc3RhbXAYBCABKAQicQoVTmV0d29ya0xhdGVuY3lNZXNzYWdlEigKDHBpbmdfbWVzc2FnZRgCIAEoCzIQLlBpbmdNZXNzYWdlQm9keUgAEiYKC2Fja19tZXNzYWdlGAMgASgLMg8uQWNrTWVzc2FnZUJvZHlIAEIGCgRib2R5IjkKDU1lc3NhZ2VCdW5kbGUSDAoEaGFzaBgBIAEoDBIaCghtZXNzYWdlcxgCIAMoCzIILk1lc3NhZ2UipgIKDUdvc3NpcE1lc3NhZ2USGwoHbWVzc2FnZRgBIAEoCzIILk1lc3NhZ2VIABIzChRjb250YWN0X2luZm9fY29udGVudBgDIAEoCzITLkNvbnRhY3RJbmZvQ29udGVudEgAEjkKF25ldHdvcmtfbGF0ZW5jeV9tZXNzYWdlGAcgASgLMhYuTmV0d29ya0xhdGVuY3lNZXNzYWdlSAASKAoObWVzc2FnZV9idW5kbGUYCSABKAsyDi5NZXNzYWdlQnVuZGxlSAASDgoGdG9waWNzGAQgAygJEg8KB3BlZXJfaWQYBSABKAwSHwoHdmVyc2lvbhgGIAEoDjIOLkdvc3NpcFZlcnNpb24SEQoJdGltZXN0YW1wGAggASgNQgkKB2NvbnRlbnQqPwoNR29zc2lwVmVyc2lvbhIVChFHT1NTSVBfVkVSU0lPTl9WMRAAEhcKE0dPU1NJUF9WRVJTSU9OX1YxXzEQAWIGcHJvdG8z',
    [file_message],
  )

/**
 * @generated from message GossipAddressInfo
 */
export type GossipAddressInfo = Message<'GossipAddressInfo'> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string

  /**
   * @generated from field: uint32 family = 2;
   */
  family: number

  /**
   * @generated from field: uint32 port = 3;
   */
  port: number

  /**
   * @generated from field: string dns_name = 4;
   */
  dnsName: string
}

/**
 * @generated from message GossipAddressInfo
 */
export type GossipAddressInfoJson = {
  /**
   * @generated from field: string address = 1;
   */
  address?: string

  /**
   * @generated from field: uint32 family = 2;
   */
  family?: number

  /**
   * @generated from field: uint32 port = 3;
   */
  port?: number

  /**
   * @generated from field: string dns_name = 4;
   */
  dnsName?: string
}

/**
 * Describes the message GossipAddressInfo.
 * Use `create(GossipAddressInfoSchema)` to create a new message.
 */
export const GossipAddressInfoSchema: GenMessage<
  GossipAddressInfo,
  GossipAddressInfoJson
> = /*@__PURE__*/ messageDesc(file_gossip, 0)

/**
 * @generated from message ContactInfoContentBody
 */
export type ContactInfoContentBody = Message<'ContactInfoContentBody'> & {
  /**
   * @generated from field: GossipAddressInfo gossip_address = 1;
   */
  gossipAddress?: GossipAddressInfo

  /**
   * @generated from field: GossipAddressInfo rpc_address = 2;
   */
  rpcAddress?: GossipAddressInfo

  /**
   * @generated from field: repeated string excluded_hashes = 3;
   */
  excludedHashes: string[]

  /**
   * @generated from field: uint32 count = 4;
   */
  count: number

  /**
   * @generated from field: string hub_version = 5;
   */
  hubVersion: string

  /**
   * @generated from field: FarcasterNetwork network = 6;
   */
  network: FarcasterNetwork

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion: string

  /**
   * @generated from field: uint64 timestamp = 8;
   */
  timestamp: bigint
}

/**
 * @generated from message ContactInfoContentBody
 */
export type ContactInfoContentBodyJson = {
  /**
   * @generated from field: GossipAddressInfo gossip_address = 1;
   */
  gossipAddress?: GossipAddressInfoJson

  /**
   * @generated from field: GossipAddressInfo rpc_address = 2;
   */
  rpcAddress?: GossipAddressInfoJson

  /**
   * @generated from field: repeated string excluded_hashes = 3;
   */
  excludedHashes?: string[]

  /**
   * @generated from field: uint32 count = 4;
   */
  count?: number

  /**
   * @generated from field: string hub_version = 5;
   */
  hubVersion?: string

  /**
   * @generated from field: FarcasterNetwork network = 6;
   */
  network?: FarcasterNetworkJson

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion?: string

  /**
   * @generated from field: uint64 timestamp = 8;
   */
  timestamp?: string
}

/**
 * Describes the message ContactInfoContentBody.
 * Use `create(ContactInfoContentBodySchema)` to create a new message.
 */
export const ContactInfoContentBodySchema: GenMessage<
  ContactInfoContentBody,
  ContactInfoContentBodyJson
> = /*@__PURE__*/ messageDesc(file_gossip, 1)

/**
 * @generated from message ContactInfoContent
 */
export type ContactInfoContent = Message<'ContactInfoContent'> & {
  /**
   * @generated from field: GossipAddressInfo gossip_address = 1;
   */
  gossipAddress?: GossipAddressInfo

  /**
   * @generated from field: GossipAddressInfo rpc_address = 2;
   */
  rpcAddress?: GossipAddressInfo

  /**
   * @generated from field: repeated string excluded_hashes = 3;
   */
  excludedHashes: string[]

  /**
   * @generated from field: uint32 count = 4;
   */
  count: number

  /**
   * @generated from field: string hub_version = 5;
   */
  hubVersion: string

  /**
   * @generated from field: FarcasterNetwork network = 6;
   */
  network: FarcasterNetwork

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion: string

  /**
   * @generated from field: uint64 timestamp = 8;
   */
  timestamp: bigint

  /**
   * @generated from field: ContactInfoContentBody body = 9;
   */
  body?: ContactInfoContentBody

  /**
   * Signature of the message digest
   *
   * @generated from field: bytes signature = 10;
   */
  signature: Uint8Array

  /**
   * Public key of the peer that originated the contact info
   *
   * @generated from field: bytes signer = 11;
   */
  signer: Uint8Array

  /**
   * Optional alternative serialization used for signing
   *
   * @generated from field: optional bytes data_bytes = 12;
   */
  dataBytes?: Uint8Array
}

/**
 * @generated from message ContactInfoContent
 */
export type ContactInfoContentJson = {
  /**
   * @generated from field: GossipAddressInfo gossip_address = 1;
   */
  gossipAddress?: GossipAddressInfoJson

  /**
   * @generated from field: GossipAddressInfo rpc_address = 2;
   */
  rpcAddress?: GossipAddressInfoJson

  /**
   * @generated from field: repeated string excluded_hashes = 3;
   */
  excludedHashes?: string[]

  /**
   * @generated from field: uint32 count = 4;
   */
  count?: number

  /**
   * @generated from field: string hub_version = 5;
   */
  hubVersion?: string

  /**
   * @generated from field: FarcasterNetwork network = 6;
   */
  network?: FarcasterNetworkJson

  /**
   * @generated from field: string app_version = 7;
   */
  appVersion?: string

  /**
   * @generated from field: uint64 timestamp = 8;
   */
  timestamp?: string

  /**
   * @generated from field: ContactInfoContentBody body = 9;
   */
  body?: ContactInfoContentBodyJson

  /**
   * Signature of the message digest
   *
   * @generated from field: bytes signature = 10;
   */
  signature?: string

  /**
   * Public key of the peer that originated the contact info
   *
   * @generated from field: bytes signer = 11;
   */
  signer?: string

  /**
   * Optional alternative serialization used for signing
   *
   * @generated from field: optional bytes data_bytes = 12;
   */
  dataBytes?: string
}

/**
 * Describes the message ContactInfoContent.
 * Use `create(ContactInfoContentSchema)` to create a new message.
 */
export const ContactInfoContentSchema: GenMessage<
  ContactInfoContent,
  ContactInfoContentJson
> = /*@__PURE__*/ messageDesc(file_gossip, 2)

/**
 * @generated from message PingMessageBody
 */
export type PingMessageBody = Message<'PingMessageBody'> & {
  /**
   * @generated from field: bytes ping_origin_peer_id = 1;
   */
  pingOriginPeerId: Uint8Array

  /**
   * @generated from field: uint64 ping_timestamp = 2;
   */
  pingTimestamp: bigint
}

/**
 * @generated from message PingMessageBody
 */
export type PingMessageBodyJson = {
  /**
   * @generated from field: bytes ping_origin_peer_id = 1;
   */
  pingOriginPeerId?: string

  /**
   * @generated from field: uint64 ping_timestamp = 2;
   */
  pingTimestamp?: string
}

/**
 * Describes the message PingMessageBody.
 * Use `create(PingMessageBodySchema)` to create a new message.
 */
export const PingMessageBodySchema: GenMessage<
  PingMessageBody,
  PingMessageBodyJson
> = /*@__PURE__*/ messageDesc(file_gossip, 3)

/**
 * @generated from message AckMessageBody
 */
export type AckMessageBody = Message<'AckMessageBody'> & {
  /**
   * @generated from field: bytes ping_origin_peer_id = 1;
   */
  pingOriginPeerId: Uint8Array

  /**
   * @generated from field: bytes ack_origin_peer_id = 2;
   */
  ackOriginPeerId: Uint8Array

  /**
   * @generated from field: uint64 ping_timestamp = 3;
   */
  pingTimestamp: bigint

  /**
   * @generated from field: uint64 ack_timestamp = 4;
   */
  ackTimestamp: bigint
}

/**
 * @generated from message AckMessageBody
 */
export type AckMessageBodyJson = {
  /**
   * @generated from field: bytes ping_origin_peer_id = 1;
   */
  pingOriginPeerId?: string

  /**
   * @generated from field: bytes ack_origin_peer_id = 2;
   */
  ackOriginPeerId?: string

  /**
   * @generated from field: uint64 ping_timestamp = 3;
   */
  pingTimestamp?: string

  /**
   * @generated from field: uint64 ack_timestamp = 4;
   */
  ackTimestamp?: string
}

/**
 * Describes the message AckMessageBody.
 * Use `create(AckMessageBodySchema)` to create a new message.
 */
export const AckMessageBodySchema: GenMessage<
  AckMessageBody,
  AckMessageBodyJson
> = /*@__PURE__*/ messageDesc(file_gossip, 4)

/**
 * @generated from message NetworkLatencyMessage
 */
export type NetworkLatencyMessage = Message<'NetworkLatencyMessage'> & {
  /**
   * @generated from oneof NetworkLatencyMessage.body
   */
  body:
    | {
        /**
         * @generated from field: PingMessageBody ping_message = 2;
         */
        value: PingMessageBody
        case: 'pingMessage'
      }
    | {
        /**
         * @generated from field: AckMessageBody ack_message = 3;
         */
        value: AckMessageBody
        case: 'ackMessage'
      }
    | { case: undefined; value?: undefined }
}

/**
 * @generated from message NetworkLatencyMessage
 */
export type NetworkLatencyMessageJson = {
  /**
   * @generated from field: PingMessageBody ping_message = 2;
   */
  pingMessage?: PingMessageBodyJson

  /**
   * @generated from field: AckMessageBody ack_message = 3;
   */
  ackMessage?: AckMessageBodyJson
}

/**
 * Describes the message NetworkLatencyMessage.
 * Use `create(NetworkLatencyMessageSchema)` to create a new message.
 */
export const NetworkLatencyMessageSchema: GenMessage<
  NetworkLatencyMessage,
  NetworkLatencyMessageJson
> = /*@__PURE__*/ messageDesc(file_gossip, 5)

/**
 * @generated from message MessageBundle
 */
export type MessageBundle = Message<'MessageBundle'> & {
  /**
   * @generated from field: bytes hash = 1;
   */
  hash: Uint8Array

  /**
   * @generated from field: repeated Message messages = 2;
   */
  messages: Message$1[]
}

/**
 * @generated from message MessageBundle
 */
export type MessageBundleJson = {
  /**
   * @generated from field: bytes hash = 1;
   */
  hash?: string

  /**
   * @generated from field: repeated Message messages = 2;
   */
  messages?: MessageJson[]
}

/**
 * Describes the message MessageBundle.
 * Use `create(MessageBundleSchema)` to create a new message.
 */
export const MessageBundleSchema: GenMessage<MessageBundle, MessageBundleJson> =
  /*@__PURE__*/
  messageDesc(file_gossip, 6)

/**
 * @generated from message GossipMessage
 */
export type GossipMessage = Message<'GossipMessage'> & {
  /**
   * @generated from oneof GossipMessage.content
   */
  content:
    | {
        /**
         * @generated from field: Message message = 1;
         */
        value: Message$1
        case: 'message'
      }
    | {
        /**
         *  Deprecated
         *  IdRegistryEvent id_registry_event = 2;
         *
         * @generated from field: ContactInfoContent contact_info_content = 3;
         */
        value: ContactInfoContent
        case: 'contactInfoContent'
      }
    | {
        /**
         * @generated from field: NetworkLatencyMessage network_latency_message = 7;
         */
        value: NetworkLatencyMessage
        case: 'networkLatencyMessage'
      }
    | {
        /**
         * @generated from field: MessageBundle message_bundle = 9;
         */
        value: MessageBundle
        case: 'messageBundle'
      }
    | { case: undefined; value?: undefined }

  /**
   * @generated from field: repeated string topics = 4;
   */
  topics: string[]

  /**
   * @generated from field: bytes peer_id = 5;
   */
  peerId: Uint8Array

  /**
   * @generated from field: GossipVersion version = 6;
   */
  version: GossipVersion

  /**
   * Farcaster epoch timestamp in seconds when this message was first created
   *
   * @generated from field: uint32 timestamp = 8;
   */
  timestamp: number
}

/**
 * @generated from message GossipMessage
 */
export type GossipMessageJson = {
  /**
   * @generated from field: Message message = 1;
   */
  message?: MessageJson

  /**
   *  Deprecated
   *  IdRegistryEvent id_registry_event = 2;
   *
   * @generated from field: ContactInfoContent contact_info_content = 3;
   */
  contactInfoContent?: ContactInfoContentJson

  /**
   * @generated from field: NetworkLatencyMessage network_latency_message = 7;
   */
  networkLatencyMessage?: NetworkLatencyMessageJson

  /**
   * @generated from field: MessageBundle message_bundle = 9;
   */
  messageBundle?: MessageBundleJson

  /**
   * @generated from field: repeated string topics = 4;
   */
  topics?: string[]

  /**
   * @generated from field: bytes peer_id = 5;
   */
  peerId?: string

  /**
   * @generated from field: GossipVersion version = 6;
   */
  version?: GossipVersionJson

  /**
   * Farcaster epoch timestamp in seconds when this message was first created
   *
   * @generated from field: uint32 timestamp = 8;
   */
  timestamp?: number
}

/**
 * Describes the message GossipMessage.
 * Use `create(GossipMessageSchema)` to create a new message.
 */
export const GossipMessageSchema: GenMessage<GossipMessage, GossipMessageJson> =
  /*@__PURE__*/
  messageDesc(file_gossip, 7)

/**
 * @generated from enum GossipVersion
 */
export enum GossipVersion {
  /**
   * @generated from enum value: GOSSIP_VERSION_V1 = 0;
   */
  V1 = 0,

  /**
   * @generated from enum value: GOSSIP_VERSION_V1_1 = 1;
   */
  V1_1 = 1,
}

/**
 * @generated from enum GossipVersion
 */
export type GossipVersionJson = 'GOSSIP_VERSION_V1' | 'GOSSIP_VERSION_V1_1'

/**
 * Describes the enum GossipVersion.
 */
export const GossipVersionSchema: GenEnum<GossipVersion, GossipVersionJson> =
  /*@__PURE__*/
  enumDesc(file_gossip, 0)
