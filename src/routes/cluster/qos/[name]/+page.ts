import type { PageLoad } from './$types';
import { fetchQos } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
    const name = String(params.name);

    // Fetch both job details and script data in parallel
    const [qosData] = await Promise.all([fetchQos(name)]);

    return { qosData };
};
