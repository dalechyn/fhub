// @generated by protoc-gen-es v2.1.0 with parameter "target=ts,import_extension=js"
// @generated from file hub_state.proto (syntax proto3)
/* eslint-disable */

import type { Message } from '@bufbuild/protobuf'
import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv1'
import { fileDesc, messageDesc } from '@bufbuild/protobuf/codegenv1'

/**
 * Describes the file hub_state.proto.
 */
export const file_hub_state: GenFile =
  /*@__PURE__*/
  fileDesc(
    'Cg9odWJfc3RhdGUucHJvdG8iSAoYVmFsaWRhdGVPclJldm9rZUpvYlN0YXRlEhoKEmxhc3Rfam9iX3RpbWVzdGFtcBgBIAEoDRIQCghsYXN0X2ZpZBgCIAEoDSJ4CghIdWJTdGF0ZRIYChBsYXN0X2ZuYW1lX3Byb29mGAIgASgEEhUKDWxhc3RfbDJfYmxvY2sYAyABKAQSOwoYdmFsaWRhdGVfb3JfcmV2b2tlX3N0YXRlGAUgASgLMhkuVmFsaWRhdGVPclJldm9rZUpvYlN0YXRlYgZwcm90bzM',
  )

/**
 * @generated from message ValidateOrRevokeJobState
 */
export type ValidateOrRevokeJobState = Message<'ValidateOrRevokeJobState'> & {
  /**
   * The (Farcaster time epoch) timestamp where the last job started
   *
   * @generated from field: uint32 last_job_timestamp = 1;
   */
  lastJobTimestamp: number

  /**
   * The last FID to complete successfully. If this is 0, then the last job finished successfully
   *
   * @generated from field: uint32 last_fid = 2;
   */
  lastFid: number
}

/**
 * Describes the message ValidateOrRevokeJobState.
 * Use `create(ValidateOrRevokeJobStateSchema)` to create a new message.
 */
export const ValidateOrRevokeJobStateSchema: GenMessage<ValidateOrRevokeJobState> =
  /*@__PURE__*/
  messageDesc(file_hub_state, 0)

/**
 * @generated from message HubState
 */
export type HubState = Message<'HubState'> & {
  /**
   *  uint32 last_eth_block = 1; // Deprecated
   *
   * @generated from field: uint64 last_fname_proof = 2;
   */
  lastFnameProof: bigint

  /**
   * @generated from field: uint64 last_l2_block = 3;
   */
  lastL2Block: bigint

  /**
   *  bool syncEvents = 4; // Deprecated
   *
   * @generated from field: ValidateOrRevokeJobState validate_or_revoke_state = 5;
   */
  validateOrRevokeState?: ValidateOrRevokeJobState
}

/**
 * Describes the message HubState.
 * Use `create(HubStateSchema)` to create a new message.
 */
export const HubStateSchema: GenMessage<HubState> =
  /*@__PURE__*/
  messageDesc(file_hub_state, 1)
