// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/nodes/v1/nodes_service.proto (package conclave.nodes.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { GetNodesRequestSchema } from "./get_nodes_request_pb";
import { file_conclave_nodes_v1_get_nodes_request } from "./get_nodes_request_pb";
import type { GetNodesResponseSchema } from "./get_nodes_response_pb";
import { file_conclave_nodes_v1_get_nodes_response } from "./get_nodes_response_pb";
import type { GetNodeRequestSchema } from "./get_node_request_pb";
import { file_conclave_nodes_v1_get_node_request } from "./get_node_request_pb";
import type { GetNodeResponseSchema } from "./get_node_response_pb";
import { file_conclave_nodes_v1_get_node_response } from "./get_node_response_pb";

/**
 * Describes the file conclave/nodes/v1/nodes_service.proto.
 */
export const file_conclave_nodes_v1_nodes_service: GenFile = /*@__PURE__*/
  fileDesc("CiVjb25jbGF2ZS9ub2Rlcy92MS9ub2Rlc19zZXJ2aWNlLnByb3RvEhFjb25jbGF2ZS5ub2Rlcy52MTK5AQoMTm9kZXNTZXJ2aWNlElUKCEdldE5vZGVzEiIuY29uY2xhdmUubm9kZXMudjEuR2V0Tm9kZXNSZXF1ZXN0GiMuY29uY2xhdmUubm9kZXMudjEuR2V0Tm9kZXNSZXNwb25zZSIAElIKB0dldE5vZGUSIS5jb25jbGF2ZS5ub2Rlcy52MS5HZXROb2RlUmVxdWVzdBoiLmNvbmNsYXZlLm5vZGVzLnYxLkdldE5vZGVSZXNwb25zZSIAQkVaQ2dpdGh1Yi5jb20vZGR5bWtvL2NvbmNsYXZlLWJhY2tlbmQvZ2VuL2dvL2NvbmNsYXZlL25vZGVzL3YxO25vZGVzdjFiBnByb3RvMw", [file_conclave_nodes_v1_get_nodes_request, file_conclave_nodes_v1_get_nodes_response, file_conclave_nodes_v1_get_node_request, file_conclave_nodes_v1_get_node_response]);

/**
 * @generated from service conclave.nodes.v1.NodesService
 */
export const NodesService: GenService<{
  /**
   * @generated from rpc conclave.nodes.v1.NodesService.GetNodes
   */
  getNodes: {
    methodKind: "unary";
    input: typeof GetNodesRequestSchema;
    output: typeof GetNodesResponseSchema;
  },
  /**
   * @generated from rpc conclave.nodes.v1.NodesService.GetNode
   */
  getNode: {
    methodKind: "unary";
    input: typeof GetNodeRequestSchema;
    output: typeof GetNodeResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_conclave_nodes_v1_nodes_service, 0);

