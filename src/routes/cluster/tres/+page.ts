import type { PageLoad } from './$types';
import {fetchTres} from '$lib/api';


export const load: PageLoad = async () => {

    const [tresData] = await Promise.all([
        fetchTres(),
    ])

    return { tresData };
};
