// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file conclave/jobs/v1/job_service.proto (package conclave.jobs.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { GetJobScriptRequestSchema } from "./get_job_script_request_pb";
import { file_conclave_jobs_v1_get_job_script_request } from "./get_job_script_request_pb";
import type { GetJobScriptResponseSchema } from "./get_job_script_response_pb";
import { file_conclave_jobs_v1_get_job_script_response } from "./get_job_script_response_pb";
import type { GetJobRequestSchema } from "./get_job_request_pb";
import { file_conclave_jobs_v1_get_job_request } from "./get_job_request_pb";
import type { GetJobResponseSchema } from "./get_job_response_pb";
import { file_conclave_jobs_v1_get_job_response } from "./get_job_response_pb";
import type { GetJobsResponseSchema } from "./get_jobs_response_pb";
import { file_conclave_jobs_v1_get_jobs_response } from "./get_jobs_response_pb";
import type { GetJobsRequestSchema } from "./get_jobs_request_pb";
import { file_conclave_jobs_v1_get_jobs_request } from "./get_jobs_request_pb";

/**
 * Describes the file conclave/jobs/v1/job_service.proto.
 */
export const file_conclave_jobs_v1_job_service: GenFile = /*@__PURE__*/
  fileDesc("CiJjb25jbGF2ZS9qb2JzL3YxL2pvYl9zZXJ2aWNlLnByb3RvEhBjb25jbGF2ZS5qb2JzLnYxMo0CCgtKb2JzU2VydmljZRJNCgZHZXRKb2ISHy5jb25jbGF2ZS5qb2JzLnYxLkdldEpvYlJlcXVlc3QaIC5jb25jbGF2ZS5qb2JzLnYxLkdldEpvYlJlc3BvbnNlIgASXwoMR2V0Sm9iU2NyaXB0EiUuY29uY2xhdmUuam9icy52MS5HZXRKb2JTY3JpcHRSZXF1ZXN0GiYuY29uY2xhdmUuam9icy52MS5HZXRKb2JTY3JpcHRSZXNwb25zZSIAEk4KB0dldEpvYnMSIC5jb25jbGF2ZS5qb2JzLnYxLkdldEpvYnNSZXF1ZXN0GiEuY29uY2xhdmUuam9icy52MS5HZXRKb2JzUmVzcG9uc2VCQ1pBZ2l0aHViLmNvbS9kZHlta28vY29uY2xhdmUtYmFja2VuZC9nZW4vZ28vY29uY2xhdmUvam9icy92MTtqb2JzdjFiBnByb3RvMw", [file_conclave_jobs_v1_get_job_script_request, file_conclave_jobs_v1_get_job_script_response, file_conclave_jobs_v1_get_job_request, file_conclave_jobs_v1_get_job_response, file_conclave_jobs_v1_get_jobs_response, file_conclave_jobs_v1_get_jobs_request]);

/**
 * JobsService is a service that provides slurm job-related operations.
 *
 * @generated from service conclave.jobs.v1.JobsService
 */
export const JobsService: GenService<{
  /**
   * GetJob retrieves information about a given job.
   *
   * @generated from rpc conclave.jobs.v1.JobsService.GetJob
   */
  getJob: {
    methodKind: "unary";
    input: typeof GetJobRequestSchema;
    output: typeof GetJobResponseSchema;
  },
  /**
   * GetJobScript retrieves a jobs script data.
   *
   * @generated from rpc conclave.jobs.v1.JobsService.GetJobScript
   */
  getJobScript: {
    methodKind: "unary";
    input: typeof GetJobScriptRequestSchema;
    output: typeof GetJobScriptResponseSchema;
  },
  /**
   * GetJobs retrieves a list of jobs based on the provided request.
   *
   * @generated from rpc conclave.jobs.v1.JobsService.GetJobs
   */
  getJobs: {
    methodKind: "unary";
    input: typeof GetJobsRequestSchema;
    output: typeof GetJobsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_conclave_jobs_v1_job_service, 0);

