// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/cluster/v1/get_tres_response.proto (package conclave.cluster.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Tres } from "./tres_pb";
import { file_conclave_cluster_v1_tres } from "./tres_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/cluster/v1/get_tres_response.proto.
 */
export const file_conclave_cluster_v1_get_tres_response: GenFile = /*@__PURE__*/
  fileDesc("Citjb25jbGF2ZS9jbHVzdGVyL3YxL2dldF90cmVzX3Jlc3BvbnNlLnByb3RvEhNjb25jbGF2ZS5jbHVzdGVyLnYxItsCCg9HZXRUcmVzUmVzcG9uc2USJwoEbm9kZRgBIAEoCzIZLmNvbmNsYXZlLmNsdXN0ZXIudjEuVHJlcxImCgNjcHUYAiABKAsyGS5jb25jbGF2ZS5jbHVzdGVyLnYxLlRyZXMSJgoDbWVtGAMgASgLMhkuY29uY2xhdmUuY2x1c3Rlci52MS5UcmVzEigKBXBhZ2VzGAQgASgLMhkuY29uY2xhdmUuY2x1c3Rlci52MS5UcmVzEicKBHZtZW0YBSABKAsyGS5jb25jbGF2ZS5jbHVzdGVyLnYxLlRyZXMSJQoCZnMYBiABKAsyGS5jb25jbGF2ZS5jbHVzdGVyLnYxLlRyZXMSKgoHYmlsbGluZxgHIAEoCzIZLmNvbmNsYXZlLmNsdXN0ZXIudjEuVHJlcxIpCgZlbmVyZ3kYCCABKAsyGS5jb25jbGF2ZS5jbHVzdGVyLnYxLlRyZXNCSVpHZ2l0aHViLmNvbS9kZHlta28vY29uY2xhdmUtYmFja2VuZC9nZW4vZ28vY29uY2xhdmUvY2x1c3Rlci92MTtjbHVzdGVydjFiBnByb3RvMw", [file_conclave_cluster_v1_tres]);

/**
 * GetTresRequest represents a request to retrieve TRES (Trackable Resources).
 *
 * @generated from message conclave.cluster.v1.GetTresResponse
 */
export type GetTresResponse = Message<"conclave.cluster.v1.GetTresResponse"> & {
  /**
   * Represents node-specific resource information.
   *
   * @generated from field: conclave.cluster.v1.Tres node = 1;
   */
  node?: Tres;

  /**
   * Represents CPU resource information.
   *
   * @generated from field: conclave.cluster.v1.Tres cpu = 2;
   */
  cpu?: Tres;

  /**
   * Represents memory resource information.
   *
   * @generated from field: conclave.cluster.v1.Tres mem = 3;
   */
  mem?: Tres;

  /**
   * @generated from field: conclave.cluster.v1.Tres pages = 4;
   */
  pages?: Tres;

  /**
   * @generated from field: conclave.cluster.v1.Tres vmem = 5;
   */
  vmem?: Tres;

  /**
   * @generated from field: conclave.cluster.v1.Tres fs = 6;
   */
  fs?: Tres;

  /**
   * @generated from field: conclave.cluster.v1.Tres billing = 7;
   */
  billing?: Tres;

  /**
   * @generated from field: conclave.cluster.v1.Tres energy = 8;
   */
  energy?: Tres;
};

/**
 * Describes the message conclave.cluster.v1.GetTresResponse.
 * Use `create(GetTresResponseSchema)` to create a new message.
 */
export const GetTresResponseSchema: GenMessage<GetTresResponse> = /*@__PURE__*/
  messageDesc(file_conclave_cluster_v1_get_tres_response, 0);

