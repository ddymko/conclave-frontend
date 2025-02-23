import type { PageLoad } from './$types';
import {fetchNodes} from '$lib/api';


export const load: PageLoad = async () => {

    const [nodesData] = await Promise.all([
        fetchNodes(),
    ])

    return { nodesData };
};
