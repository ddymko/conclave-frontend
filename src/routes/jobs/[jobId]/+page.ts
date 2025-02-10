import type { PageLoad } from './$types';
import { fetchJob } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
	const jobId = Number(params.jobId);
    const response = await fetchJob(jobId);
    console.log(response);
    return { jobData: response };
};