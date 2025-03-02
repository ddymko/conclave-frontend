import {
	myJobsService,
	mySystemService,
	myClusterService,
	myEntitiesService,
	nodesService,
	partitionsService, qosService
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
import {type GetAssociationsRequest} from "../gen/conclave/entities/v1/get_associations_request_pb";
import {type GetAssociationsResponse} from "../gen/conclave/entities/v1/get_associations_response_pb";
import {type GetAssociationRequest} from "../gen/conclave/entities/v1/get_association_request_pb";
import {type GetAssociationResponse} from "../gen/conclave/entities/v1/get_association_response_pb";
import {type GetNodeRequest} from "../gen/conclave/nodes/v1/get_node_request_pb";
import {type GetNodesRequest} from "../gen/conclave/nodes/v1/get_nodes_request_pb";
import {type GetNodeResponse} from "../gen/conclave/nodes/v1/get_node_response_pb";
import {type GetNodesResponse} from "../gen/conclave/nodes/v1/get_nodes_response_pb";
import {type GetPartitionRequest} from "../gen/conclave/partitions/v1/get_parition_request_pb";
import {type GetPartitionResponse} from "../gen/conclave/partitions/v1/get_partition_response_pb";
import {type GetPartitionsResponse} from "../gen/conclave/partitions/v1/get_partitions_response_pb";
import {type GetPartitionsRequest} from "../gen/conclave/partitions/v1/get_partitions_request_pb";
import {type GetQossRequest} from "../gen/conclave/qos/v1/get_qoss_request_pb";
import {type GetQossResponse} from "../gen/conclave/qos/v1/get_qoss_response_pb";
import {type GetQosRequest} from "../gen/conclave/qos/v1/get_qos_request_pb";
import {type GetQosResponse} from "../gen/conclave/qos/v1/get_qos_response_pb";
import {type GetComponentStatusRequest} from "../gen/conclave/cluster/v1/cluster_service_pb";
import {type GetComponentStatusResponse} from "../gen/conclave/cluster/v1/cluster_service_pb";

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

export async function fetchAssociations(): Promise<GetAssociationsResponse> {
	try {
		const request: GetAssociationsRequest = {$typeName: "conclave.entities.v1.GetAssociationsRequest",};
		return await myEntitiesService.getAssociations(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`association issue.`, err);
		} else {
			console.error(`association issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchAssociation(id: string): Promise<GetAssociationResponse> {
	try {
		const request: GetAssociationRequest = {$typeName: "conclave.entities.v1.GetAssociationRequest", id};
		return await myEntitiesService.getAssociation(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`association issue.`, err);
		} else {
			console.error(`association issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchNodes(): Promise<GetNodesResponse> {
	try {
		const request: GetNodesRequest = {$typeName: "conclave.nodes.v1.GetNodesRequest"};
		return await nodesService.getNodes(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`nodes issue.`, err);
		} else {
			console.error(`nodes issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchNode(name: string): Promise<GetNodeResponse> {
	try {
		const request: GetNodeRequest = {$typeName: "conclave.nodes.v1.GetNodeRequest", name};
		return await nodesService.getNode(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`nodes issue.`, err);
		} else {
			console.error(`nodes issue 2':`, err);
		}
		throw err;
	}
}


export async function fetchPartitions(): Promise<GetPartitionsResponse> {
	try {
		const request: GetPartitionsRequest = {$typeName: "conclave.partitions.v1.GetPartitionsRequest"};
		return await partitionsService.getPartitions(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`ps issue.`, err);
		} else {
			console.error(`ps issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchPartition(name: string): Promise<GetPartitionResponse> {
	try {
		const request: GetPartitionRequest = {$typeName: "conclave.partitions.v1.GetPartitionRequest", name};
		return await partitionsService.getPartition(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`ps issue.`, err);
		} else {
			console.error(`ps issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchQoss(): Promise<GetQossResponse> {
	try {
		const request: GetQossRequest = {$typeName: "conclave.qos.v1.GetQossRequest"};
		return await qosService.getQoss(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`qos issue.`, err);
		} else {
			console.error(`ps issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchQos(name: string): Promise<GetQosResponse> {
	try {
		const request: GetQosRequest = {$typeName: "conclave.qos.v1.GetQosRequest", name};
		return await qosService.getQos(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`ps issue.`, err);
		} else {
			console.error(`ps issue 2':`, err);
		}
		throw err;
	}
}

export async function fetchComponentStatus(): Promise<GetComponentStatusResponse> {
	try {
		const request: GetComponentStatusRequest = {$typeName: "conclave.cluster.v1.GetComponentStatusRequest"};
		return await myClusterService.getComponentStatus(request);
	} catch (err) {
		if (err instanceof ConnectError && err.code === Code.AlreadyExists) {
			console.warn(`qos issue.`, err);
		} else {
			console.error(`ps issue 2':`, err);
		}
		throw err;
	}
}