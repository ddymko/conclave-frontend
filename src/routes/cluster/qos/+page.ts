import type { PageLoad } from './$types';
import { fetchQoss} from '$lib/api';

export const load: PageLoad = async () => {
    const response = await fetchQoss();
    return { qosData: response };
};
