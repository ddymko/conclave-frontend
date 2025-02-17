import type { PageLoad } from './$types';
import {fetchTres, fetchJobs} from '$lib/api';


export const load: PageLoad = async () => {

    const [tresData, jobsData] = await Promise.all([
        fetchTres(),
        fetchJobs()
    ])

    return { tresData, jobsData };
};
