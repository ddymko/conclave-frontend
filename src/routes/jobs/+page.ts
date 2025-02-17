import type { PageLoad } from './$types';
import { fetchJobs} from '$lib/api';

export const load: PageLoad = async () => {
	const response = await fetchJobs();
	console.log(response);
	return { jobsData: response };
};
