import type { PageLoad } from './$types';
import { fetchAccounts } from '$lib/api';

export const load: PageLoad = async () => {
    const response = await fetchAccounts();
    console.log(response);
    return { accountsData: response };
};
