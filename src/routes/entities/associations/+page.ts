import type { PageLoad } from "./$types";
import { fetchAssociations } from '$lib/api';

export const load: PageLoad  = async () => {
	const response = await fetchAssociations();
	console.log(response);
	return { associationsData: response };
};
