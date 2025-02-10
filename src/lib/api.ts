import { mySystemService } from '$lib/conclaveClient';
import type { GetJobDataRequest, GetJobDataResponse } from '../gen/conclave/system/v1/system_pb';

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
