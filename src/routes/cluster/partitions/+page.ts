import type { PageLoad } from './$types';
import { fetchPartitions} from '$lib/api';

export const load: PageLoad = async () => {
    const response = await fetchPartitions();
    return { partitionsData: response };
};
