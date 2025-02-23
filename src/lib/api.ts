import {
	myJobsService,
	mySystemService,
	myClusterService,
	myEntitiesService
} from '$lib/conclaveClient';
import {
	type GetJobDataRequest,
	type GetJobDataResponse
} from '../gen/conclave/system/v1/system_pb';

import { type GetJobScriptRequest } from '../gen/conclave/jobs/v1/get_job_script_request_pb';
import { type GetJobScriptResponse } from '../gen/conclave/jobs/v1/get_job_script_response_pb';
import { type GetTresRequest } from '../gen/conclave/cluster/v1/get_tres_request_pb';
import { type GetTresResponse } from '../gen/conclave/cluster/v1/get_tres_response_pb';
import { type GetJobsRequest } from '../gen/conclave/jobs/v1/get_jobs_request_pb';
import { type GetJobsResponse } from '../gen/conclave/jobs/v1/get_jobs_response_pb';
import { type GetAccountsRequest } from '../gen/conclave/entities/v1/get_accounts_request_pb';
import { type GetAccountsResponse } from '../gen/conclave/entities/v1/get_accounts_response_pb';
import { type GetAccountRequest } from '../gen/conclave/entities/v1/get_account_request_pb';
import { type GetAccountResponse } from '../gen/conclave/entities/v1/get_account_response_pb';
import { type GetUsersRequest } from '../gen/conclave/entities/v1/get_users_request_pb';
import { type GetUsersResponse } from '../gen/conclave/entities/v1/get_users_response_pb';
import { type GetUserRequest } from '../gen/conclave/entities/v1/get_user_request_pb';
import { type GetUserResponse } from '../gen/conclave/entities/v1/get_user_response_pb';
import {type DeleteAccountRequest} from "../gen/conclave/entities/v1/delete_account_request_pb";
import {type DeleteAccountResponse} from "../gen/conclave/entities/v1/delete_account_response_pb";
import {type CreateAccountRequest} from "../gen/conclave/entities/v1/create_account_request_pb";
import {type CreateAccountResponse} from "../gen/conclave/entities/v1/create_account_response_pb";
import { ConnectError, Code } from '@connectrpc/connect';

/**
 * Fetch job data from the system service.
 * @param jobId - The identifier of the job to retrieve.
 * @returns A promise that resolves to the GetJobDataResponse.
 */
export async function fetchJob(jobId: number): Promise<GetJobDataResponse> {
	try {
		const request: GetJobDataRequest = { $typeName: 'conclave.system.v1.GetJobDataRequest', jobId };
		return await mySystemService.getJobData(request);
	} catch (err) {
		console.error(`Failed to fetch job data for jobId ${jobId}:`, err);
		throw err;
	}
}

export async function fetchJobs(): Promise<GetJobsResponse> {
	try {
		const request: GetJobsRequest = { $typeName: 'conclave.jobs.v1.GetJobsRequest' };
		return await myJobsService.getJobs(request);
	} catch (err) {
		console.log(`Failed to fetch jobs data:`, err);
		throw err;
	}
}

export async function fetchJobScript(jobId: number): Promise<GetJobScriptResponse> {
	try {
		const request: GetJobScriptRequest = {
			$typeName: 'conclave.jobs.v1.GetJobScriptRequest',
			jobId: {
				$typeName: 'conclave.jobs.v1.JobID',
				jobId: jobId
			}
		};
		return await myJobsService.getJobScript(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No script data exists for job ${jobId}:`, err);
			// Return a fallback response with a default message.
			return {
				$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
				script: new TextEncoder().encode('no script data available'),
				envVars: new TextEncoder().encode('no env var data available') // Or provide appropriate fallback data
			};
		}
		// For other errors, rethrow (or handle as needed)
		throw err;
	}
}

export async function fetchTres(): Promise<GetTresResponse> {
	try {
		const request: GetTresRequest = { $typeName: 'conclave.cluster.v1.GetTresRequest' };
		return await myClusterService.getTres(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Tres data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function fetchAccounts(): Promise<GetAccountsResponse> {
	try {
		const request: GetAccountsRequest = { $typeName: 'conclave.entities.v1.GetAccountsRequest' };
		return await myEntitiesService.getAccounts(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Tres data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function fetchUsers(): Promise<GetUsersResponse> {
	try {
		const request: GetUsersRequest = { $typeName: 'conclave.entities.v1.GetUsersRequest' };
		return await myEntitiesService.getUsers(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Tres data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function fetchUser(userName: string): Promise<GetUserResponse> {
	try {
		const request: GetUserRequest = { $typeName: 'conclave.entities.v1.GetUserRequest', userName };
		return await myEntitiesService.getUser(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Tres data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function fetchAccount(accountName: string): Promise<GetAccountResponse> {
	try {
		const request: GetAccountRequest = {
			$typeName: 'conclave.entities.v1.GetAccountRequest',
			accountName
		};
		return await myEntitiesService.getAccount(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Account data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function deleteAccount(accountName: string): Promise<DeleteAccountResponse> {
	try {
		const request: DeleteAccountRequest = {
			$typeName: 'conclave.entities.v1.DeleteAccountRequest',
			accountName
		};
		return await myEntitiesService.deleteAccount(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.NotFound) {
			console.warn(`No Account data found`, err);
			// Return a fallback response with a default message.
			// return {
			// 	$typeName: 'conclave.jobs.v1.GetJobScriptResponse',
			// 	script: new TextEncoder().encode("no script data available"),
			// 	envVars: new TextEncoder().encode("no env var data available") // Or provide appropriate fallback data
			// };
		}

		throw err;
	}
}

export async function createAccount(accountName: string, organization?: string, description?: string): Promise<CreateAccountResponse> {
	try {
		const request: CreateAccountRequest = {
			$typeName: "conclave.entities.v1.CreateAccountRequest",
			account: {
				$typeName: "conclave.entities.v1.Account",
				name: accountName,
				organization: organization || "",
				description: description || "",
				associations: []
			}
		};
		return await myEntitiesService.createAccount(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`Account '${accountName}' already exists.`, err);
		} else {
			console.error(`Failed to create account '${accountName}':`, err);
		}
		throw err;
	}
}