// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/jobs/v1/get_job_script_request.proto (package conclave.jobs.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { JobID } from "./job_id_pb";
import { file_conclave_jobs_v1_job_id } from "./job_id_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file conclave/jobs/v1/get_job_script_request.proto.
 */
export const file_conclave_jobs_v1_get_job_script_request: GenFile = /*@__PURE__*/
  fileDesc("Ci1jb25jbGF2ZS9qb2JzL3YxL2dldF9qb2Jfc2NyaXB0X3JlcXVlc3QucHJvdG8SEGNvbmNsYXZlLmpvYnMudjEiPgoTR2V0Sm9iU2NyaXB0UmVxdWVzdBInCgZqb2JfaWQYASABKAsyFy5jb25jbGF2ZS5qb2JzLnYxLkpvYklEQkNaQWdpdGh1Yi5jb20vZGR5bWtvL2NvbmNsYXZlLWJhY2tlbmQvZ2VuL2dvL2NvbmNsYXZlL2pvYnMvdjE7am9ic3YxYgZwcm90bzM", [file_conclave_jobs_v1_job_id]);

/**
 * GetJobScriptRequest is a message that represents a request to retrieve a job script data
 *
 * @generated from message conclave.jobs.v1.GetJobScriptRequest
 */
export type GetJobScriptRequest = Message<"conclave.jobs.v1.GetJobScriptRequest"> & {
  /**
   * job_id: The identifier of the job whose script is to be retrieved.
   *
   * @generated from field: conclave.jobs.v1.JobID job_id = 1;
   */
  jobId?: JobID;
};

/**
 * Describes the message conclave.jobs.v1.GetJobScriptRequest.
 * Use `create(GetJobScriptRequestSchema)` to create a new message.
 */
export const GetJobScriptRequestSchema: GenMessage<GetJobScriptRequest> = /*@__PURE__*/
  messageDesc(file_conclave_jobs_v1_get_job_script_request, 0);

