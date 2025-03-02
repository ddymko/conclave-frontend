import type { PageLoad } from './$types';
import {fetchComponentStatus} from '$lib/api';


export const load: PageLoad = async () => {

    const [componentData] = await Promise.all([
        fetchComponentStatus(),
    ])

    return { componentData };
};
