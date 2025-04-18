// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/qos/v1/get_qos_response.proto (package conclave.qos.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { QoS } from "./qos_pb";
import { file_conclave_qos_v1_qos } from "./qos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/qos/v1/get_qos_response.proto.
 */
export const file_conclave_qos_v1_get_qos_response: GenFile = /*@__PURE__*/
  fileDesc("CiZjb25jbGF2ZS9xb3MvdjEvZ2V0X3Fvc19yZXNwb25zZS5wcm90bxIPY29uY2xhdmUucW9zLnYxIjMKDkdldFFvc1Jlc3BvbnNlEiEKA3FvcxgBIAMoCzIULmNvbmNsYXZlLnFvcy52MS5Rb1NCQVo/Z2l0aHViLmNvbS9kZHlta28vY29uY2xhdmUtYmFja2VuZC9nZW4vZ28vY29uY2xhdmUvcW9zL3YxO3Fvc3YxYgZwcm90bzM", [file_conclave_qos_v1_qos]);

/**
 * @generated from message conclave.qos.v1.GetQosResponse
 */
export type GetQosResponse = Message<"conclave.qos.v1.GetQosResponse"> & {
  /**
   * @generated from field: repeated conclave.qos.v1.QoS qos = 1;
   */
  qos: QoS[];
};

/**
 * Describes the message conclave.qos.v1.GetQosResponse.
 * Use `create(GetQosResponseSchema)` to create a new message.
 */
export const GetQosResponseSchema: GenMessage<GetQosResponse> = /*@__PURE__*/
  messageDesc(file_conclave_qos_v1_get_qos_response, 0);

