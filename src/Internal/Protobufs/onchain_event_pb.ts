// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=js,json_types=true"
// @generated from file onchain_event.proto (syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file onchain_event.proto.
 */
export const file_onchain_event: GenFile = /*@__PURE__*/
  fileDesc("ChNvbmNoYWluX2V2ZW50LnByb3RvIsoDCgxPbkNoYWluRXZlbnQSHwoEdHlwZRgBIAEoDjIRLk9uQ2hhaW5FdmVudFR5cGUSEAoIY2hhaW5faWQYAiABKA0SFAoMYmxvY2tfbnVtYmVyGAMgASgNEhIKCmJsb2NrX2hhc2gYBCABKAwSFwoPYmxvY2tfdGltZXN0YW1wGAUgASgEEhgKEHRyYW5zYWN0aW9uX2hhc2gYBiABKAwSEQoJbG9nX2luZGV4GAcgASgNEgsKA2ZpZBgIIAEoBBItChFzaWduZXJfZXZlbnRfYm9keRgJIAEoCzIQLlNpZ25lckV2ZW50Qm9keUgAEj4KGnNpZ25lcl9taWdyYXRlZF9ldmVudF9ib2R5GAogASgLMhguU2lnbmVyTWlncmF0ZWRFdmVudEJvZHlIABI2ChZpZF9yZWdpc3Rlcl9ldmVudF9ib2R5GAsgASgLMhQuSWRSZWdpc3RlckV2ZW50Qm9keUgAEjgKF3N0b3JhZ2VfcmVudF9ldmVudF9ib2R5GAwgASgLMhUuU3RvcmFnZVJlbnRFdmVudEJvZHlIABIQCgh0eF9pbmRleBgNIAEoDRIPCgd2ZXJzaW9uGA4gASgNQgYKBGJvZHkifwoPU2lnbmVyRXZlbnRCb2R5EgsKA2tleRgBIAEoDBIQCghrZXlfdHlwZRgCIAEoDRIkCgpldmVudF90eXBlGAMgASgOMhAuU2lnbmVyRXZlbnRUeXBlEhAKCG1ldGFkYXRhGAQgASgMEhUKDW1ldGFkYXRhX3R5cGUYBSABKA0iLQoXU2lnbmVyTWlncmF0ZWRFdmVudEJvZHkSEgoKbWlncmF0ZWRBdBgBIAEoDSJzChNJZFJlZ2lzdGVyRXZlbnRCb2R5EgoKAnRvGAEgASgMEigKCmV2ZW50X3R5cGUYAiABKA4yFC5JZFJlZ2lzdGVyRXZlbnRUeXBlEgwKBGZyb20YAyABKAwSGAoQcmVjb3ZlcnlfYWRkcmVzcxgEIAEoDCJEChRTdG9yYWdlUmVudEV2ZW50Qm9keRINCgVwYXllchgBIAEoDBINCgV1bml0cxgCIAEoDRIOCgZleHBpcnkYAyABKA0qlwEKEE9uQ2hhaW5FdmVudFR5cGUSEwoPRVZFTlRfVFlQRV9OT05FEAASFQoRRVZFTlRfVFlQRV9TSUdORVIQARIeChpFVkVOVF9UWVBFX1NJR05FUl9NSUdSQVRFRBACEhoKFkVWRU5UX1RZUEVfSURfUkVHSVNURVIQAxIbChdFVkVOVF9UWVBFX1NUT1JBR0VfUkVOVBAEKokBCg9TaWduZXJFdmVudFR5cGUSGgoWU0lHTkVSX0VWRU5UX1RZUEVfTk9ORRAAEhkKFVNJR05FUl9FVkVOVF9UWVBFX0FERBABEhwKGFNJR05FUl9FVkVOVF9UWVBFX1JFTU9WRRACEiEKHVNJR05FUl9FVkVOVF9UWVBFX0FETUlOX1JFU0VUEAMqrAEKE0lkUmVnaXN0ZXJFdmVudFR5cGUSHwobSURfUkVHSVNURVJfRVZFTlRfVFlQRV9OT05FEAASIwofSURfUkVHSVNURVJfRVZFTlRfVFlQRV9SRUdJU1RFUhABEiMKH0lEX1JFR0lTVEVSX0VWRU5UX1RZUEVfVFJBTlNGRVIQAhIqCiZJRF9SRUdJU1RFUl9FVkVOVF9UWVBFX0NIQU5HRV9SRUNPVkVSWRADYgZwcm90bzM");

/**
 * @generated from message OnChainEvent
 */
export type OnChainEvent = Message<"OnChainEvent"> & {
  /**
   * @generated from field: OnChainEventType type = 1;
   */
  type: OnChainEventType;

  /**
   * @generated from field: uint32 chain_id = 2;
   */
  chainId: number;

  /**
   * @generated from field: uint32 block_number = 3;
   */
  blockNumber: number;

  /**
   * @generated from field: bytes block_hash = 4;
   */
  blockHash: Uint8Array;

  /**
   * @generated from field: uint64 block_timestamp = 5;
   */
  blockTimestamp: bigint;

  /**
   * @generated from field: bytes transaction_hash = 6;
   */
  transactionHash: Uint8Array;

  /**
   * @generated from field: uint32 log_index = 7;
   */
  logIndex: number;

  /**
   * @generated from field: uint64 fid = 8;
   */
  fid: bigint;

  /**
   * @generated from oneof OnChainEvent.body
   */
  body: {
    /**
     * @generated from field: SignerEventBody signer_event_body = 9;
     */
    value: SignerEventBody;
    case: "signerEventBody";
  } | {
    /**
     * @generated from field: SignerMigratedEventBody signer_migrated_event_body = 10;
     */
    value: SignerMigratedEventBody;
    case: "signerMigratedEventBody";
  } | {
    /**
     * @generated from field: IdRegisterEventBody id_register_event_body = 11;
     */
    value: IdRegisterEventBody;
    case: "idRegisterEventBody";
  } | {
    /**
     * @generated from field: StorageRentEventBody storage_rent_event_body = 12;
     */
    value: StorageRentEventBody;
    case: "storageRentEventBody";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: uint32 tx_index = 13;
   */
  txIndex: number;

  /**
   * @generated from field: uint32 version = 14;
   */
  version: number;
};

/**
 * @generated from message OnChainEvent
 */
export type OnChainEventJson = {
  /**
   * @generated from field: OnChainEventType type = 1;
   */
  type?: OnChainEventTypeJson;

  /**
   * @generated from field: uint32 chain_id = 2;
   */
  chainId?: number;

  /**
   * @generated from field: uint32 block_number = 3;
   */
  blockNumber?: number;

  /**
   * @generated from field: bytes block_hash = 4;
   */
  blockHash?: string;

  /**
   * @generated from field: uint64 block_timestamp = 5;
   */
  blockTimestamp?: string;

  /**
   * @generated from field: bytes transaction_hash = 6;
   */
  transactionHash?: string;

  /**
   * @generated from field: uint32 log_index = 7;
   */
  logIndex?: number;

  /**
   * @generated from field: uint64 fid = 8;
   */
  fid?: string;

  /**
   * @generated from field: SignerEventBody signer_event_body = 9;
   */
  signerEventBody?: SignerEventBodyJson;

  /**
   * @generated from field: SignerMigratedEventBody signer_migrated_event_body = 10;
   */
  signerMigratedEventBody?: SignerMigratedEventBodyJson;

  /**
   * @generated from field: IdRegisterEventBody id_register_event_body = 11;
   */
  idRegisterEventBody?: IdRegisterEventBodyJson;

  /**
   * @generated from field: StorageRentEventBody storage_rent_event_body = 12;
   */
  storageRentEventBody?: StorageRentEventBodyJson;

  /**
   * @generated from field: uint32 tx_index = 13;
   */
  txIndex?: number;

  /**
   * @generated from field: uint32 version = 14;
   */
  version?: number;
};

/**
 * Describes the message OnChainEvent.
 * Use `create(OnChainEventSchema)` to create a new message.
 */
export const OnChainEventSchema: GenMessage<OnChainEvent, OnChainEventJson> = /*@__PURE__*/
  messageDesc(file_onchain_event, 0);

/**
 * @generated from message SignerEventBody
 */
export type SignerEventBody = Message<"SignerEventBody"> & {
  /**
   * @generated from field: bytes key = 1;
   */
  key: Uint8Array;

  /**
   * @generated from field: uint32 key_type = 2;
   */
  keyType: number;

  /**
   * @generated from field: SignerEventType event_type = 3;
   */
  eventType: SignerEventType;

  /**
   * @generated from field: bytes metadata = 4;
   */
  metadata: Uint8Array;

  /**
   * @generated from field: uint32 metadata_type = 5;
   */
  metadataType: number;
};

/**
 * @generated from message SignerEventBody
 */
export type SignerEventBodyJson = {
  /**
   * @generated from field: bytes key = 1;
   */
  key?: string;

  /**
   * @generated from field: uint32 key_type = 2;
   */
  keyType?: number;

  /**
   * @generated from field: SignerEventType event_type = 3;
   */
  eventType?: SignerEventTypeJson;

  /**
   * @generated from field: bytes metadata = 4;
   */
  metadata?: string;

  /**
   * @generated from field: uint32 metadata_type = 5;
   */
  metadataType?: number;
};

/**
 * Describes the message SignerEventBody.
 * Use `create(SignerEventBodySchema)` to create a new message.
 */
export const SignerEventBodySchema: GenMessage<SignerEventBody, SignerEventBodyJson> = /*@__PURE__*/
  messageDesc(file_onchain_event, 1);

/**
 * @generated from message SignerMigratedEventBody
 */
export type SignerMigratedEventBody = Message<"SignerMigratedEventBody"> & {
  /**
   * @generated from field: uint32 migratedAt = 1;
   */
  migratedAt: number;
};

/**
 * @generated from message SignerMigratedEventBody
 */
export type SignerMigratedEventBodyJson = {
  /**
   * @generated from field: uint32 migratedAt = 1;
   */
  migratedAt?: number;
};

/**
 * Describes the message SignerMigratedEventBody.
 * Use `create(SignerMigratedEventBodySchema)` to create a new message.
 */
export const SignerMigratedEventBodySchema: GenMessage<SignerMigratedEventBody, SignerMigratedEventBodyJson> = /*@__PURE__*/
  messageDesc(file_onchain_event, 2);

/**
 * @generated from message IdRegisterEventBody
 */
export type IdRegisterEventBody = Message<"IdRegisterEventBody"> & {
  /**
   * @generated from field: bytes to = 1;
   */
  to: Uint8Array;

  /**
   * @generated from field: IdRegisterEventType event_type = 2;
   */
  eventType: IdRegisterEventType;

  /**
   * @generated from field: bytes from = 3;
   */
  from: Uint8Array;

  /**
   * @generated from field: bytes recovery_address = 4;
   */
  recoveryAddress: Uint8Array;
};

/**
 * @generated from message IdRegisterEventBody
 */
export type IdRegisterEventBodyJson = {
  /**
   * @generated from field: bytes to = 1;
   */
  to?: string;

  /**
   * @generated from field: IdRegisterEventType event_type = 2;
   */
  eventType?: IdRegisterEventTypeJson;

  /**
   * @generated from field: bytes from = 3;
   */
  from?: string;

  /**
   * @generated from field: bytes recovery_address = 4;
   */
  recoveryAddress?: string;
};

/**
 * Describes the message IdRegisterEventBody.
 * Use `create(IdRegisterEventBodySchema)` to create a new message.
 */
export const IdRegisterEventBodySchema: GenMessage<IdRegisterEventBody, IdRegisterEventBodyJson> = /*@__PURE__*/
  messageDesc(file_onchain_event, 3);

/**
 * @generated from message StorageRentEventBody
 */
export type StorageRentEventBody = Message<"StorageRentEventBody"> & {
  /**
   * @generated from field: bytes payer = 1;
   */
  payer: Uint8Array;

  /**
   * @generated from field: uint32 units = 2;
   */
  units: number;

  /**
   * @generated from field: uint32 expiry = 3;
   */
  expiry: number;
};

/**
 * @generated from message StorageRentEventBody
 */
export type StorageRentEventBodyJson = {
  /**
   * @generated from field: bytes payer = 1;
   */
  payer?: string;

  /**
   * @generated from field: uint32 units = 2;
   */
  units?: number;

  /**
   * @generated from field: uint32 expiry = 3;
   */
  expiry?: number;
};

/**
 * Describes the message StorageRentEventBody.
 * Use `create(StorageRentEventBodySchema)` to create a new message.
 */
export const StorageRentEventBodySchema: GenMessage<StorageRentEventBody, StorageRentEventBodyJson> = /*@__PURE__*/
  messageDesc(file_onchain_event, 4);

/**
 * @generated from enum OnChainEventType
 */
export enum OnChainEventType {
  /**
   * @generated from enum value: EVENT_TYPE_NONE = 0;
   */
  EVENT_TYPE_NONE = 0,

  /**
   * @generated from enum value: EVENT_TYPE_SIGNER = 1;
   */
  EVENT_TYPE_SIGNER = 1,

  /**
   * @generated from enum value: EVENT_TYPE_SIGNER_MIGRATED = 2;
   */
  EVENT_TYPE_SIGNER_MIGRATED = 2,

  /**
   * @generated from enum value: EVENT_TYPE_ID_REGISTER = 3;
   */
  EVENT_TYPE_ID_REGISTER = 3,

  /**
   * @generated from enum value: EVENT_TYPE_STORAGE_RENT = 4;
   */
  EVENT_TYPE_STORAGE_RENT = 4,
}

/**
 * @generated from enum OnChainEventType
 */
export type OnChainEventTypeJson = "EVENT_TYPE_NONE" | "EVENT_TYPE_SIGNER" | "EVENT_TYPE_SIGNER_MIGRATED" | "EVENT_TYPE_ID_REGISTER" | "EVENT_TYPE_STORAGE_RENT";

/**
 * Describes the enum OnChainEventType.
 */
export const OnChainEventTypeSchema: GenEnum<OnChainEventType, OnChainEventTypeJson> = /*@__PURE__*/
  enumDesc(file_onchain_event, 0);

/**
 * @generated from enum SignerEventType
 */
export enum SignerEventType {
  /**
   * @generated from enum value: SIGNER_EVENT_TYPE_NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: SIGNER_EVENT_TYPE_ADD = 1;
   */
  ADD = 1,

  /**
   * @generated from enum value: SIGNER_EVENT_TYPE_REMOVE = 2;
   */
  REMOVE = 2,

  /**
   * @generated from enum value: SIGNER_EVENT_TYPE_ADMIN_RESET = 3;
   */
  ADMIN_RESET = 3,
}

/**
 * @generated from enum SignerEventType
 */
export type SignerEventTypeJson = "SIGNER_EVENT_TYPE_NONE" | "SIGNER_EVENT_TYPE_ADD" | "SIGNER_EVENT_TYPE_REMOVE" | "SIGNER_EVENT_TYPE_ADMIN_RESET";

/**
 * Describes the enum SignerEventType.
 */
export const SignerEventTypeSchema: GenEnum<SignerEventType, SignerEventTypeJson> = /*@__PURE__*/
  enumDesc(file_onchain_event, 1);

/**
 * @generated from enum IdRegisterEventType
 */
export enum IdRegisterEventType {
  /**
   * @generated from enum value: ID_REGISTER_EVENT_TYPE_NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: ID_REGISTER_EVENT_TYPE_REGISTER = 1;
   */
  REGISTER = 1,

  /**
   * @generated from enum value: ID_REGISTER_EVENT_TYPE_TRANSFER = 2;
   */
  TRANSFER = 2,

  /**
   * @generated from enum value: ID_REGISTER_EVENT_TYPE_CHANGE_RECOVERY = 3;
   */
  CHANGE_RECOVERY = 3,
}

/**
 * @generated from enum IdRegisterEventType
 */
export type IdRegisterEventTypeJson = "ID_REGISTER_EVENT_TYPE_NONE" | "ID_REGISTER_EVENT_TYPE_REGISTER" | "ID_REGISTER_EVENT_TYPE_TRANSFER" | "ID_REGISTER_EVENT_TYPE_CHANGE_RECOVERY";

/**
 * Describes the enum IdRegisterEventType.
 */
export const IdRegisterEventTypeSchema: GenEnum<IdRegisterEventType, IdRegisterEventTypeJson> = /*@__PURE__*/
  enumDesc(file_onchain_event, 2);

