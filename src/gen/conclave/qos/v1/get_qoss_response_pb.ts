// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/qos/v1/get_qoss_response.proto (package conclave.qos.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { QoS } from "./qos_pb";
import { file_conclave_qos_v1_qos } from "./qos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/qos/v1/get_qoss_response.proto.
 */
export const file_conclave_qos_v1_get_qoss_response: GenFile = /*@__PURE__*/
  fileDesc("Cidjb25jbGF2ZS9xb3MvdjEvZ2V0X3Fvc3NfcmVzcG9uc2UucHJvdG8SD2NvbmNsYXZlLnFvcy52MSI0Cg9HZXRRb3NzUmVzcG9uc2USIQoDcW9zGAEgAygLMhQuY29uY2xhdmUucW9zLnYxLlFvU0JBWj9naXRodWIuY29tL2RkeW1rby9jb25jbGF2ZS1iYWNrZW5kL2dlbi9nby9jb25jbGF2ZS9xb3MvdjE7cW9zdjFiBnByb3RvMw", [file_conclave_qos_v1_qos]);

/**
 * @generated from message conclave.qos.v1.GetQossResponse
 */
export type GetQossResponse = Message<"conclave.qos.v1.GetQossResponse"> & {
  /**
   * @generated from field: repeated conclave.qos.v1.QoS qos = 1;
   */
  qos: QoS[];
};

/**
 * Describes the message conclave.qos.v1.GetQossResponse.
 * Use `create(GetQossResponseSchema)` to create a new message.
 */
export const GetQossResponseSchema: GenMessage<GetQossResponse> = /*@__PURE__*/
  messageDesc(file_conclave_qos_v1_get_qoss_response, 0);

