// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/nodes/v1/get_node_request.proto (package conclave.nodes.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/nodes/v1/get_node_request.proto.
 */
export const file_conclave_nodes_v1_get_node_request: GenFile = /*@__PURE__*/
  fileDesc("Cihjb25jbGF2ZS9ub2Rlcy92MS9nZXRfbm9kZV9yZXF1ZXN0LnByb3RvEhFjb25jbGF2ZS5ub2Rlcy52MSIeCg5HZXROb2RlUmVxdWVzdBIMCgRuYW1lGAEgASgJQkVaQ2dpdGh1Yi5jb20vZGR5bWtvL2NvbmNsYXZlLWJhY2tlbmQvZ2VuL2dvL2NvbmNsYXZlL25vZGVzL3YxO25vZGVzdjFiBnByb3RvMw");

/**
 * @generated from message conclave.nodes.v1.GetNodeRequest
 */
export type GetNodeRequest = Message<"conclave.nodes.v1.GetNodeRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message conclave.nodes.v1.GetNodeRequest.
 * Use `create(GetNodeRequestSchema)` to create a new message.
 */
export const GetNodeRequestSchema: GenMessage<GetNodeRequest> = /*@__PURE__*/
  messageDesc(file_conclave_nodes_v1_get_node_request, 0);

