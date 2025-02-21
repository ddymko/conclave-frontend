import type { PageLoad } from './$types';
import { fetchUsers } from '$lib/api';

export const load: PageLoad = async () => {
    const response = await fetchUsers();
    console.log(response);
    return { usersData: response };
};
