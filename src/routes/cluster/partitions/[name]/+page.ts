import type { PageLoad } from './$types';
import { fetchPartition } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
    const userName = String(params.name);

    // Fetch both job details and script data in parallel
    const [partitionData] = await Promise.all([fetchPartition(userName)]);

    return { partitionData };
};
