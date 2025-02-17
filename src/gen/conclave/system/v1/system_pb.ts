// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/system/v1/system.proto (package conclave.system.v1, syntax proto3)
/* eslint-disable */

// The package declaration groups related messages and services under a common namespace.

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/system/v1/system.proto.
 */
export const file_conclave_system_v1_system: GenFile = /*@__PURE__*/
  fileDesc("Ch9jb25jbGF2ZS9zeXN0ZW0vdjEvc3lzdGVtLnByb3RvEhJjb25jbGF2ZS5zeXN0ZW0udjEiFgoUR2V0U2x1cm1ESW5mb1JlcXVlc3QiFwoVR2V0U2x1cm1ESW5mb1Jlc3BvbnNlIhgKFkdldFNsdXJtQ1RMSW5mb1JlcXVlc3QiGQoXR2V0U2x1cm1DVExJbmZvUmVzcG9uc2UiGAoWR2V0U2x1cm1EQkRJbmZvUmVxdWVzdCIZChdHZXRTbHVybURCREluZm9SZXNwb25zZSIXChVMaXN0U2x1cm1Ob2Rlc1JlcXVlc3QiRgoWTGlzdFNsdXJtTm9kZXNSZXNwb25zZRIsCgVub2RlcxgBIAMoCzIdLmNvbmNsYXZlLnN5c3RlbS52MS5TbHVybU5vZGUigAEKCVNsdXJtTm9kZRIQCghob3N0bmFtZRgBIAEoCRIUCgxhcmNoaXRlY3R1cmUYAiABKAkSEQoJY3B1X2NvcmVzGAMgASgFEhQKDG1lbW9yeV9ieXRlcxgEIAEoAxITCgtpcDRfYWRkcmVzcxgFIAEoCRINCgVzdGF0ZRgGIAEoCSIjChFHZXRKb2JEYXRhUmVxdWVzdBIOCgZqb2JfaWQYASABKAUinAMKEkdldEpvYkRhdGFSZXNwb25zZRItCgZoZWFkZXIYASABKAsyHS5jb25jbGF2ZS5zeXN0ZW0udjEuSm9iSGVhZGVyEi8KCXRpbWVfaW5mbxgCIAEoCzIcLmNvbmNsYXZlLnN5c3RlbS52MS5UaW1lSW5mbxJEChJyZXF1aXJlZF9yZXNvdXJjZXMYAyABKAsyKC5jb25jbGF2ZS5zeXN0ZW0udjEuUmVzb3VyY2VSZXF1aXJlbWVudHMSKgoEdHJlcxgEIAEoCzIcLmNvbmNsYXZlLnN5c3RlbS52MS5UcmVzSW5mbxIxCgphcnJheV9pbmZvGAUgASgLMh0uY29uY2xhdmUuc3lzdGVtLnYxLkFycmF5SW5mbxIOCgZzY3JpcHQYBiABKAkSGQoRd29ya2luZ19kaXJlY3RvcnkYByABKAkSKgoFc3RlcHMYCCADKAsyGy5jb25jbGF2ZS5zeXN0ZW0udjEuSm9iU3RlcBIqCgRtZXRhGAkgASgLMhwuY29uY2xhdmUuc3lzdGVtLnYxLk1ldGFJbmZvIm4KCFRpbWVJbmZvEhcKD3N1Ym1pc3Npb25fdGltZRgBIAEoAxISCgpzdGFydF90aW1lGAIgASgDEhAKCGVuZF90aW1lGAMgASgDEg8KB2VsYXBzZWQYBCABKAMSEgoKdGltZV9saW1pdBgFIAEoAyKOAQoUUmVzb3VyY2VSZXF1aXJlbWVudHMSDAoEY3B1cxgBIAEoAxIaChJtZW1vcnlfcGVyX2NwdV9zZXQYAiABKAgSFgoObWVtb3J5X3Blcl9jcHUYAyABKAMSGwoTbWVtb3J5X3Blcl9ub2RlX3NldBgEIAEoCBIXCg9tZW1vcnlfcGVyX25vZGUYBSABKAMiKwoMVHJlc1Jlc291cmNlEgwKBHR5cGUYASABKAkSDQoFY291bnQYAiABKAMiqAEKCFRyZXNJbmZvEjMKCWFsbG9jYXRlZBgBIAMoCzIgLmNvbmNsYXZlLnN5c3RlbS52MS5UcmVzUmVzb3VyY2USMwoJcmVxdWVzdGVkGAIgAygLMiAuY29uY2xhdmUuc3lzdGVtLnYxLlRyZXNSZXNvdXJjZRIyCghjb25zdW1lZBgDIAMoCzIgLmNvbmNsYXZlLnN5c3RlbS52MS5UcmVzUmVzb3VyY2UiPwoIRXhpdENvZGUSEwoLcmV0dXJuX2NvZGUYASABKAMSDgoGc3RhdHVzGAIgAygJEg4KBnNpZ25hbBgDIAEoCSIsCglTdGF0ZUluZm8SDwoHY3VycmVudBgBIAMoCRIOCgZyZWFzb24YAiABKAkijAIKCUpvYkhlYWRlchIOCgZqb2JfaWQYASABKAMSDAoEbmFtZRgCIAEoCRITCgtzdWJtaXRfbGluZRgDIAEoCRIPCgdhY2NvdW50GAQgASgJEg0KBWdyb3VwGAUgASgJEhEKCXBhcnRpdGlvbhgGIAEoCRIPCgdjbHVzdGVyGAcgASgJEg0KBWZsYWdzGAggAygJEi8KCWV4aXRfY29kZRgJIAEoCzIcLmNvbmNsYXZlLnN5c3RlbS52MS5FeGl0Q29kZRIsCgVzdGF0ZRgKIAEoCzIdLmNvbmNsYXZlLnN5c3RlbS52MS5TdGF0ZUluZm8SCwoDcW9zGAsgASgJEg0KBW5vZGVzGAwgASgJImIKCUFycmF5SW5mbxIUCgxhcnJheV9qb2JfaWQYASABKAMSEwoLdGFza19pZF9zZXQYAiABKAgSDwoHdGFza19pZBgDIAEoCRIZChFtYXhfcnVubmluZ190YXNrcxgEIAEoBSKaAgoHSm9iU3RlcBIPCgdzdGVwX2lkGAEgASgJEhEKCXN0ZXBfbmFtZRgCIAEoCRITCgt0YXNrc19jb3VudBgDIAEoBRITCgtub2Rlc19yYW5nZRgEIAEoCRITCgtub2Rlc19jb3VudBgFIAEoBRIqCgR0aW1lGAYgASgLMhwuY29uY2xhdmUuc3lzdGVtLnYxLlRpbWVJbmZvEi8KCWV4aXRfY29kZRgHIAEoCzIcLmNvbmNsYXZlLnN5c3RlbS52MS5FeGl0Q29kZRIZChF0YXNrX2Rpc3RyaWJ1dGlvbhgIIAEoCRI0Cg50cmVzX3JlcXVlc3RlZBgJIAEoCzIcLmNvbmNsYXZlLnN5c3RlbS52MS5UcmVzSW5mbyLPAQoITWV0YUluZm8SEwoLcGx1Z2luX3R5cGUYASABKAkSEwoLcGx1Z2luX25hbWUYAiABKAkSEwoLZGF0YV9wYXJzZXIYAyABKAkSGgoSYWNjb3VudGluZ19zdG9yYWdlGAQgASgJEhUKDWNsaWVudF9zb3VyY2UYBSABKAkSEwoLY2xpZW50X3VzZXIYBiABKAkSFAoMY2xpZW50X2dyb3VwGAcgASgJEhUKDXNsdXJtX3ZlcnNpb24YCCABKAkSDwoHY2x1c3RlchgJIAEoCSIQCg5HZXRKb2JzUmVxdWVzdCIuCgNKb2ISCgoCaWQYASABKA0SDAoEbmFtZRgCIAEoCRINCgVzdGF0ZRgDIAEoDSI4Cg9HZXRKb2JzUmVzcG9uc2USJQoEam9icxgBIAMoCzIXLmNvbmNsYXZlLnN5c3RlbS52MS5Kb2IiKQoXR2V0Sm9iU2NyaXB0RGF0YVJlcXVlc3QSDgoGam9iX2lkGAEgASgJIjwKGEdldEpvYlNjcmlwdERhdGFSZXNwb25zZRIOCgZzY3JpcHQYASABKAwSEAoIZW52X3ZhcnMYAiABKAwy5AUKDVN5c3RlbVNlcnZpY2USZgoNR2V0U2x1cm1ESW5mbxIoLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRTbHVybURJbmZvUmVxdWVzdBopLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRTbHVybURJbmZvUmVzcG9uc2UiABJsCg9HZXRTbHVybUNUTEluZm8SKi5jb25jbGF2ZS5zeXN0ZW0udjEuR2V0U2x1cm1DVExJbmZvUmVxdWVzdBorLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRTbHVybUNUTEluZm9SZXNwb25zZSIAEmwKD0dldFNsdXJtREJESW5mbxIqLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRTbHVybURCREluZm9SZXF1ZXN0GisuY29uY2xhdmUuc3lzdGVtLnYxLkdldFNsdXJtREJESW5mb1Jlc3BvbnNlIgASaQoOTGlzdFNsdXJtTm9kZXMSKS5jb25jbGF2ZS5zeXN0ZW0udjEuTGlzdFNsdXJtTm9kZXNSZXF1ZXN0GiouY29uY2xhdmUuc3lzdGVtLnYxLkxpc3RTbHVybU5vZGVzUmVzcG9uc2UiABJdCgpHZXRKb2JEYXRhEiUuY29uY2xhdmUuc3lzdGVtLnYxLkdldEpvYkRhdGFSZXF1ZXN0GiYuY29uY2xhdmUuc3lzdGVtLnYxLkdldEpvYkRhdGFSZXNwb25zZSIAElQKB0dldEpvYnMSIi5jb25jbGF2ZS5zeXN0ZW0udjEuR2V0Sm9ic1JlcXVlc3QaIy5jb25jbGF2ZS5zeXN0ZW0udjEuR2V0Sm9ic1Jlc3BvbnNlIgASbwoQR2V0Sm9iU2NyaXB0RGF0YRIrLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRKb2JTY3JpcHREYXRhUmVxdWVzdBosLmNvbmNsYXZlLnN5c3RlbS52MS5HZXRKb2JTY3JpcHREYXRhUmVzcG9uc2UiAEJHWkVnaXRodWIuY29tL2RkeW1rby9jb25jbGF2ZS1iYWNrZW5kL2dlbi9nby9jb25jbGF2ZS9zeXN0ZW0vdjE7c3lzdGVtdjFiBnByb3RvMw");

/**
 * GetSlurmDInfoRequest is an empty request message for the GetSlurmDInfo RPC.
 * Future fields can be added as needed.
 *
 * @generated from message conclave.system.v1.GetSlurmDInfoRequest
 */
export type GetSlurmDInfoRequest = Message<"conclave.system.v1.GetSlurmDInfoRequest"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmDInfoRequest.
 * Use `create(GetSlurmDInfoRequestSchema)` to create a new message.
 */
export const GetSlurmDInfoRequestSchema: GenMessage<GetSlurmDInfoRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 0);

/**
 * GetSlurmDInfoResponse is an empty response message for the GetSlurmDInfo RPC.
 * Future fields can be added as needed.
 *
 * @generated from message conclave.system.v1.GetSlurmDInfoResponse
 */
export type GetSlurmDInfoResponse = Message<"conclave.system.v1.GetSlurmDInfoResponse"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmDInfoResponse.
 * Use `create(GetSlurmDInfoResponseSchema)` to create a new message.
 */
export const GetSlurmDInfoResponseSchema: GenMessage<GetSlurmDInfoResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 1);

/**
 * GetSlurmCTLInfoRequest is an empty request message for the GetSlurmCTLInfo RPC.
 *
 * @generated from message conclave.system.v1.GetSlurmCTLInfoRequest
 */
export type GetSlurmCTLInfoRequest = Message<"conclave.system.v1.GetSlurmCTLInfoRequest"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmCTLInfoRequest.
 * Use `create(GetSlurmCTLInfoRequestSchema)` to create a new message.
 */
export const GetSlurmCTLInfoRequestSchema: GenMessage<GetSlurmCTLInfoRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 2);

/**
 * GetSlurmCTLInfoResponse is an empty response message for the GetSlurmCTLInfo RPC.
 *
 * @generated from message conclave.system.v1.GetSlurmCTLInfoResponse
 */
export type GetSlurmCTLInfoResponse = Message<"conclave.system.v1.GetSlurmCTLInfoResponse"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmCTLInfoResponse.
 * Use `create(GetSlurmCTLInfoResponseSchema)` to create a new message.
 */
export const GetSlurmCTLInfoResponseSchema: GenMessage<GetSlurmCTLInfoResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 3);

/**
 * GetSlurmDBDInfoRequest is an empty request message for the GetSlurmDBDInfo RPC.
 *
 * @generated from message conclave.system.v1.GetSlurmDBDInfoRequest
 */
export type GetSlurmDBDInfoRequest = Message<"conclave.system.v1.GetSlurmDBDInfoRequest"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmDBDInfoRequest.
 * Use `create(GetSlurmDBDInfoRequestSchema)` to create a new message.
 */
export const GetSlurmDBDInfoRequestSchema: GenMessage<GetSlurmDBDInfoRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 4);

/**
 * GetSlurmDBDInfoResponse is an empty response message for the GetSlurmDBDInfo RPC.
 *
 * @generated from message conclave.system.v1.GetSlurmDBDInfoResponse
 */
export type GetSlurmDBDInfoResponse = Message<"conclave.system.v1.GetSlurmDBDInfoResponse"> & {
};

/**
 * Describes the message conclave.system.v1.GetSlurmDBDInfoResponse.
 * Use `create(GetSlurmDBDInfoResponseSchema)` to create a new message.
 */
export const GetSlurmDBDInfoResponseSchema: GenMessage<GetSlurmDBDInfoResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 5);

/**
 * ListSlurmNodesRequest is the request message for the ListSlurmNodes RPC.
 *
 * @generated from message conclave.system.v1.ListSlurmNodesRequest
 */
export type ListSlurmNodesRequest = Message<"conclave.system.v1.ListSlurmNodesRequest"> & {
};

/**
 * Describes the message conclave.system.v1.ListSlurmNodesRequest.
 * Use `create(ListSlurmNodesRequestSchema)` to create a new message.
 */
export const ListSlurmNodesRequestSchema: GenMessage<ListSlurmNodesRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 6);

/**
 * ListSlurmNodesResponse is the response message for the ListSlurmNodes RPC.
 * It contains a list of SlurmNode messages.
 *
 * @generated from message conclave.system.v1.ListSlurmNodesResponse
 */
export type ListSlurmNodesResponse = Message<"conclave.system.v1.ListSlurmNodesResponse"> & {
  /**
   * A list of nodes in the Slurm system.
   *
   * @generated from field: repeated conclave.system.v1.SlurmNode nodes = 1;
   */
  nodes: SlurmNode[];
};

/**
 * Describes the message conclave.system.v1.ListSlurmNodesResponse.
 * Use `create(ListSlurmNodesResponseSchema)` to create a new message.
 */
export const ListSlurmNodesResponseSchema: GenMessage<ListSlurmNodesResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 7);

/**
 * SlurmNode represents a node in a Slurm cluster.
 *
 * @generated from message conclave.system.v1.SlurmNode
 */
export type SlurmNode = Message<"conclave.system.v1.SlurmNode"> & {
  /**
   * The hostname of the node.
   *
   * @generated from field: string hostname = 1;
   */
  hostname: string;

  /**
   * CPU Architecture
   *
   * @generated from field: string architecture = 2;
   */
  architecture: string;

  /**
   * Number of CPU cores available on the node.
   *
   * @generated from field: int32 cpu_cores = 3;
   */
  cpuCores: number;

  /**
   * Total memory available on the node, represented in bytes.
   *
   * @generated from field: int64 memory_bytes = 4;
   */
  memoryBytes: bigint;

  /**
   * IPv4 address assigned to the node.
   *
   * @generated from field: string ip4_address = 5;
   */
  ip4Address: string;

  /**
   * Current state of the node (e.g., idle, allocated, down).
   *
   * @generated from field: string state = 6;
   */
  state: string;
};

/**
 * Describes the message conclave.system.v1.SlurmNode.
 * Use `create(SlurmNodeSchema)` to create a new message.
 */
export const SlurmNodeSchema: GenMessage<SlurmNode> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 8);

/**
 * @generated from message conclave.system.v1.GetJobDataRequest
 */
export type GetJobDataRequest = Message<"conclave.system.v1.GetJobDataRequest"> & {
  /**
   * @generated from field: int32 job_id = 1;
   */
  jobId: number;
};

/**
 * Describes the message conclave.system.v1.GetJobDataRequest.
 * Use `create(GetJobDataRequestSchema)` to create a new message.
 */
export const GetJobDataRequestSchema: GenMessage<GetJobDataRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 9);

/**
 * @generated from message conclave.system.v1.GetJobDataResponse
 */
export type GetJobDataResponse = Message<"conclave.system.v1.GetJobDataResponse"> & {
  /**
   * @generated from field: conclave.system.v1.JobHeader header = 1;
   */
  header?: JobHeader;

  /**
   * @generated from field: conclave.system.v1.TimeInfo time_info = 2;
   */
  timeInfo?: TimeInfo;

  /**
   * @generated from field: conclave.system.v1.ResourceRequirements required_resources = 3;
   */
  requiredResources?: ResourceRequirements;

  /**
   * @generated from field: conclave.system.v1.TresInfo tres = 4;
   */
  tres?: TresInfo;

  /**
   * Optional: if this is an array job
   *
   * @generated from field: conclave.system.v1.ArrayInfo array_info = 5;
   */
  arrayInfo?: ArrayInfo;

  /**
   * Job script content (plain text)
   *
   * @generated from field: string script = 6;
   */
  script: string;

  /**
   * Working directory string
   *
   * @generated from field: string working_directory = 7;
   */
  workingDirectory: string;

  /**
   * List of job steps
   *
   * @generated from field: repeated conclave.system.v1.JobStep steps = 8;
   */
  steps: JobStep[];

  /**
   * Meta/system information
   *
   * @generated from field: conclave.system.v1.MetaInfo meta = 9;
   */
  meta?: MetaInfo;
};

/**
 * Describes the message conclave.system.v1.GetJobDataResponse.
 * Use `create(GetJobDataResponseSchema)` to create a new message.
 */
export const GetJobDataResponseSchema: GenMessage<GetJobDataResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 10);

/**
 * --- Time Information ---
 *
 * @generated from message conclave.system.v1.TimeInfo
 */
export type TimeInfo = Message<"conclave.system.v1.TimeInfo"> & {
  /**
   * UNIX timestamp (in seconds)
   *
   * @generated from field: int64 submission_time = 1;
   */
  submissionTime: bigint;

  /**
   * @generated from field: int64 start_time = 2;
   */
  startTime: bigint;

  /**
   * @generated from field: int64 end_time = 3;
   */
  endTime: bigint;

  /**
   * Duration in seconds
   *
   * @generated from field: int64 elapsed = 4;
   */
  elapsed: bigint;

  /**
   * Time limit in minutes (if set)
   *
   * @generated from field: int64 time_limit = 5;
   */
  timeLimit: bigint;
};

/**
 * Describes the message conclave.system.v1.TimeInfo.
 * Use `create(TimeInfoSchema)` to create a new message.
 */
export const TimeInfoSchema: GenMessage<TimeInfo> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 11);

/**
 * --- Resource Requirements ---
 *
 * @generated from message conclave.system.v1.ResourceRequirements
 */
export type ResourceRequirements = Message<"conclave.system.v1.ResourceRequirements"> & {
  /**
   * Basic required CPU count (e.g., from required.CPUs)
   *
   * @generated from field: int64 cpus = 1;
   */
  cpus: bigint;

  /**
   * Memory per CPU (only valid if memory_per_cpu_set is true)
   *
   * @generated from field: bool memory_per_cpu_set = 2;
   */
  memoryPerCpuSet: boolean;

  /**
   * in MB
   *
   * @generated from field: int64 memory_per_cpu = 3;
   */
  memoryPerCpu: bigint;

  /**
   * Memory per Node (only valid if memory_per_node_set is true)
   *
   * @generated from field: bool memory_per_node_set = 4;
   */
  memoryPerNodeSet: boolean;

  /**
   * in MB
   *
   * @generated from field: int64 memory_per_node = 5;
   */
  memoryPerNode: bigint;
};

/**
 * Describes the message conclave.system.v1.ResourceRequirements.
 * Use `create(ResourceRequirementsSchema)` to create a new message.
 */
export const ResourceRequirementsSchema: GenMessage<ResourceRequirements> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 12);

/**
 * --- TRES (Trackable Resources) ---
 *
 * @generated from message conclave.system.v1.TresResource
 */
export type TresResource = Message<"conclave.system.v1.TresResource"> & {
  /**
   * e.g., "cpu", "node", "billing", "mem"
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: int64 count = 2;
   */
  count: bigint;
};

/**
 * Describes the message conclave.system.v1.TresResource.
 * Use `create(TresResourceSchema)` to create a new message.
 */
export const TresResourceSchema: GenMessage<TresResource> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 13);

/**
 * @generated from message conclave.system.v1.TresInfo
 */
export type TresInfo = Message<"conclave.system.v1.TresInfo"> & {
  /**
   * List of allocated resources (e.g., CPU, node, billing)
   *
   * @generated from field: repeated conclave.system.v1.TresResource allocated = 1;
   */
  allocated: TresResource[];

  /**
   * List of requested resources (e.g., CPU, mem, etc.)
   *
   * @generated from field: repeated conclave.system.v1.TresResource requested = 2;
   */
  requested: TresResource[];

  /**
   * @generated from field: repeated conclave.system.v1.TresResource consumed = 3;
   */
  consumed: TresResource[];
};

/**
 * Describes the message conclave.system.v1.TresInfo.
 * Use `create(TresInfoSchema)` to create a new message.
 */
export const TresInfoSchema: GenMessage<TresInfo> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 14);

/**
 * --- Exit Code Information ---
 *
 * @generated from message conclave.system.v1.ExitCode
 */
export type ExitCode = Message<"conclave.system.v1.ExitCode"> & {
  /**
   * @generated from field: int64 return_code = 1;
   */
  returnCode: bigint;

  /**
   * e.g., ["SUCCESS"]
   *
   * @generated from field: repeated string status = 2;
   */
  status: string[];

  /**
   * Optional: signal name (empty if none)
   *
   * @generated from field: string signal = 3;
   */
  signal: string;
};

/**
 * Describes the message conclave.system.v1.ExitCode.
 * Use `create(ExitCodeSchema)` to create a new message.
 */
export const ExitCodeSchema: GenMessage<ExitCode> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 15);

/**
 * --- Job State ---
 *
 * @generated from message conclave.system.v1.StateInfo
 */
export type StateInfo = Message<"conclave.system.v1.StateInfo"> & {
  /**
   * e.g., ["COMPLETED"]
   *
   * @generated from field: repeated string current = 1;
   */
  current: string[];

  /**
   * @generated from field: string reason = 2;
   */
  reason: string;
};

/**
 * Describes the message conclave.system.v1.StateInfo.
 * Use `create(StateInfoSchema)` to create a new message.
 */
export const StateInfoSchema: GenMessage<StateInfo> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 16);

/**
 * --- Header / Basic Job Information ---
 *
 * @generated from message conclave.system.v1.JobHeader
 */
export type JobHeader = Message<"conclave.system.v1.JobHeader"> & {
  /**
   * @generated from field: int64 job_id = 1;
   */
  jobId: bigint;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string submit_line = 3;
   */
  submitLine: string;

  /**
   * @generated from field: string account = 4;
   */
  account: string;

  /**
   * @generated from field: string group = 5;
   */
  group: string;

  /**
   * @generated from field: string partition = 6;
   */
  partition: string;

  /**
   * @generated from field: string cluster = 7;
   */
  cluster: string;

  /**
   * @generated from field: repeated string flags = 8;
   */
  flags: string[];

  /**
   * @generated from field: conclave.system.v1.ExitCode exit_code = 9;
   */
  exitCode?: ExitCode;

  /**
   * @generated from field: conclave.system.v1.StateInfo state = 10;
   */
  state?: StateInfo;

  /**
   * @generated from field: string qos = 11;
   */
  qos: string;

  /**
   * @generated from field: string nodes = 12;
   */
  nodes: string;
};

/**
 * Describes the message conclave.system.v1.JobHeader.
 * Use `create(JobHeaderSchema)` to create a new message.
 */
export const JobHeaderSchema: GenMessage<JobHeader> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 17);

/**
 * --- Array Information (optional) ---
 *
 * @generated from message conclave.system.v1.ArrayInfo
 */
export type ArrayInfo = Message<"conclave.system.v1.ArrayInfo"> & {
  /**
   * @generated from field: int64 array_job_id = 1;
   */
  arrayJobId: bigint;

  /**
   * @generated from field: bool task_id_set = 2;
   */
  taskIdSet: boolean;

  /**
   * @generated from field: string task_id = 3;
   */
  taskId: string;

  /**
   * Maximum number of running tasks for the array job
   *
   * @generated from field: int32 max_running_tasks = 4;
   */
  maxRunningTasks: number;
};

/**
 * Describes the message conclave.system.v1.ArrayInfo.
 * Use `create(ArrayInfoSchema)` to create a new message.
 */
export const ArrayInfoSchema: GenMessage<ArrayInfo> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 18);

/**
 * --- Job Step Details ---
 *
 * @generated from message conclave.system.v1.JobStep
 */
export type JobStep = Message<"conclave.system.v1.JobStep"> & {
  /**
   * e.g., "43.batch", "43.0"
   *
   * @generated from field: string step_id = 1;
   */
  stepId: string;

  /**
   * @generated from field: string step_name = 2;
   */
  stepName: string;

  /**
   * Number of tasks in this step
   *
   * @generated from field: int32 tasks_count = 3;
   */
  tasksCount: number;

  /**
   * Node information: e.g., node list/range as string and count
   *
   * @generated from field: string nodes_range = 4;
   */
  nodesRange: string;

  /**
   * @generated from field: int32 nodes_count = 5;
   */
  nodesCount: number;

  /**
   * Time details specific to the step
   *
   * @generated from field: conclave.system.v1.TimeInfo time = 6;
   */
  time?: TimeInfo;

  /**
   * Exit code details for this step
   *
   * @generated from field: conclave.system.v1.ExitCode exit_code = 7;
   */
  exitCode?: ExitCode;

  /**
   * Task distribution description (if available)
   *
   * @generated from field: string task_distribution = 8;
   */
  taskDistribution: string;

  /**
   * Optionally, TRES info for requested resources in this step
   *
   * @generated from field: conclave.system.v1.TresInfo tres_requested = 9;
   */
  tresRequested?: TresInfo;
};

/**
 * Describes the message conclave.system.v1.JobStep.
 * Use `create(JobStepSchema)` to create a new message.
 */
export const JobStepSchema: GenMessage<JobStep> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 19);

/**
 * --- Meta / System Information ---
 *
 * @generated from message conclave.system.v1.MetaInfo
 */
export type MetaInfo = Message<"conclave.system.v1.MetaInfo"> & {
  /**
   * e.g., "openapi/slurmdbd"
   *
   * @generated from field: string plugin_type = 1;
   */
  pluginType: string;

  /**
   * e.g., "Slurm OpenAPI slurmdbd"
   *
   * @generated from field: string plugin_name = 2;
   */
  pluginName: string;

  /**
   * e.g., "data_parser/v0.0.40"
   *
   * @generated from field: string data_parser = 3;
   */
  dataParser: string;

  /**
   * e.g., "accounting_storage/slurmdbd"
   *
   * @generated from field: string accounting_storage = 4;
   */
  accountingStorage: string;

  /**
   * e.g., the socket/connection info
   *
   * @generated from field: string client_source = 5;
   */
  clientSource: string;

  /**
   * @generated from field: string client_user = 6;
   */
  clientUser: string;

  /**
   * @generated from field: string client_group = 7;
   */
  clientGroup: string;

  /**
   * e.g., "23.11.4"
   *
   * @generated from field: string slurm_version = 8;
   */
  slurmVersion: string;

  /**
   * e.g., "homelab"
   *
   * @generated from field: string cluster = 9;
   */
  cluster: string;
};

/**
 * Describes the message conclave.system.v1.MetaInfo.
 * Use `create(MetaInfoSchema)` to create a new message.
 */
export const MetaInfoSchema: GenMessage<MetaInfo> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 20);

/**
 * @generated from message conclave.system.v1.GetJobsRequest
 */
export type GetJobsRequest = Message<"conclave.system.v1.GetJobsRequest"> & {
};

/**
 * Describes the message conclave.system.v1.GetJobsRequest.
 * Use `create(GetJobsRequestSchema)` to create a new message.
 */
export const GetJobsRequestSchema: GenMessage<GetJobsRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 21);

/**
 * @generated from message conclave.system.v1.Job
 */
export type Job = Message<"conclave.system.v1.Job"> & {
  /**
   * @generated from field: uint32 id = 1;
   */
  id: number;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: uint32 state = 3;
   */
  state: number;
};

/**
 * Describes the message conclave.system.v1.Job.
 * Use `create(JobSchema)` to create a new message.
 */
export const JobSchema: GenMessage<Job> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 22);

/**
 * @generated from message conclave.system.v1.GetJobsResponse
 */
export type GetJobsResponse = Message<"conclave.system.v1.GetJobsResponse"> & {
  /**
   * @generated from field: repeated conclave.system.v1.Job jobs = 1;
   */
  jobs: Job[];
};

/**
 * Describes the message conclave.system.v1.GetJobsResponse.
 * Use `create(GetJobsResponseSchema)` to create a new message.
 */
export const GetJobsResponseSchema: GenMessage<GetJobsResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 23);

/**
 * @generated from message conclave.system.v1.GetJobScriptDataRequest
 */
export type GetJobScriptDataRequest = Message<"conclave.system.v1.GetJobScriptDataRequest"> & {
  /**
   * @generated from field: string job_id = 1;
   */
  jobId: string;
};

/**
 * Describes the message conclave.system.v1.GetJobScriptDataRequest.
 * Use `create(GetJobScriptDataRequestSchema)` to create a new message.
 */
export const GetJobScriptDataRequestSchema: GenMessage<GetJobScriptDataRequest> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 24);

/**
 * @generated from message conclave.system.v1.GetJobScriptDataResponse
 */
export type GetJobScriptDataResponse = Message<"conclave.system.v1.GetJobScriptDataResponse"> & {
  /**
   * @generated from field: bytes script = 1;
   */
  script: Uint8Array;

  /**
   * @generated from field: bytes env_vars = 2;
   */
  envVars: Uint8Array;
};

/**
 * Describes the message conclave.system.v1.GetJobScriptDataResponse.
 * Use `create(GetJobScriptDataResponseSchema)` to create a new message.
 */
export const GetJobScriptDataResponseSchema: GenMessage<GetJobScriptDataResponse> = /*@__PURE__*/
  messageDesc(file_conclave_system_v1_system, 25);

/**
 * SystemService provides RPCs for interacting with various components of the Slurm
 * system, including retrieving information from Slurm daemons and listing nodes.
 *
 * @generated from service conclave.system.v1.SystemService
 */
export const SystemService: GenService<{
  /**
   * GetSlurmDInfo retrieves information from the SlurmD daemon.
   *
   * @generated from rpc conclave.system.v1.SystemService.GetSlurmDInfo
   */
  getSlurmDInfo: {
    methodKind: "unary";
    input: typeof GetSlurmDInfoRequestSchema;
    output: typeof GetSlurmDInfoResponseSchema;
  },
  /**
   * GetSlurmCTLInfo retrieves control information from the SlurmCTL component.
   *
   * @generated from rpc conclave.system.v1.SystemService.GetSlurmCTLInfo
   */
  getSlurmCTLInfo: {
    methodKind: "unary";
    input: typeof GetSlurmCTLInfoRequestSchema;
    output: typeof GetSlurmCTLInfoResponseSchema;
  },
  /**
   * GetSlurmDBDInfo retrieves database-related information from the SlurmDBD component.
   *
   * @generated from rpc conclave.system.v1.SystemService.GetSlurmDBDInfo
   */
  getSlurmDBDInfo: {
    methodKind: "unary";
    input: typeof GetSlurmDBDInfoRequestSchema;
    output: typeof GetSlurmDBDInfoResponseSchema;
  },
  /**
   * ListSlurmNodes returns a list of nodes managed by the Slurm system.
   *
   * @generated from rpc conclave.system.v1.SystemService.ListSlurmNodes
   */
  listSlurmNodes: {
    methodKind: "unary";
    input: typeof ListSlurmNodesRequestSchema;
    output: typeof ListSlurmNodesResponseSchema;
  },
  /**
   * @generated from rpc conclave.system.v1.SystemService.GetJobData
   */
  getJobData: {
    methodKind: "unary";
    input: typeof GetJobDataRequestSchema;
    output: typeof GetJobDataResponseSchema;
  },
  /**
   * @generated from rpc conclave.system.v1.SystemService.GetJobs
   */
  getJobs: {
    methodKind: "unary";
    input: typeof GetJobsRequestSchema;
    output: typeof GetJobsResponseSchema;
  },
  /**
   * @generated from rpc conclave.system.v1.SystemService.GetJobScriptData
   */
  getJobScriptData: {
    methodKind: "unary";
    input: typeof GetJobScriptDataRequestSchema;
    output: typeof GetJobScriptDataResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_conclave_system_v1_system, 0);

