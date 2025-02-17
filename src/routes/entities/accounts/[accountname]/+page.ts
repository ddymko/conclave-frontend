import type { PageLoad } from './$types';
import {fetchAccount} from '$lib/api';

export const load: PageLoad = async ({ params }) => {
    const accountName = String(params.accountname);

    // Fetch both job details and script data in parallel
    const [accountData] = await Promise.all([
        fetchAccount(accountName),
    ]);


    return { accountData};
};