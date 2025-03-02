// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/entities/v1/get_association_response.proto (package conclave.entities.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Association } from "./association_pb";
import { file_conclave_entities_v1_association } from "./association_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/entities/v1/get_association_response.proto.
 */
export const file_conclave_entities_v1_get_association_response: GenFile = /*@__PURE__*/
  fileDesc("CjNjb25jbGF2ZS9lbnRpdGllcy92MS9nZXRfYXNzb2NpYXRpb25fcmVzcG9uc2UucHJvdG8SFGNvbmNsYXZlLmVudGl0aWVzLnYxIlEKFkdldEFzc29jaWF0aW9uUmVzcG9uc2USNwoMYXNzb2NpYXRpb25zGAEgAygLMiEuY29uY2xhdmUuZW50aXRpZXMudjEuQXNzb2NpYXRpb25CS1pJZ2l0aHViLmNvbS9kZHlta28vY29uY2xhdmUtYmFja2VuZC9nZW4vZ28vY29uY2xhdmUvZW50aXRpZXMvdjE7ZW50aXRpZXN2MWIGcHJvdG8z", [file_conclave_entities_v1_association]);

/**
 * GetAssociationResponse represents a response message to retrieve account information.
 *
 * @generated from message conclave.entities.v1.GetAssociationResponse
 */
export type GetAssociationResponse = Message<"conclave.entities.v1.GetAssociationResponse"> & {
  /**
   * @generated from field: repeated conclave.entities.v1.Association associations = 1;
   */
  associations: Association[];
};

/**
 * Describes the message conclave.entities.v1.GetAssociationResponse.
 * Use `create(GetAssociationResponseSchema)` to create a new message.
 */
export const GetAssociationResponseSchema: GenMessage<GetAssociationResponse> = /*@__PURE__*/
  messageDesc(file_conclave_entities_v1_get_association_response, 0);

