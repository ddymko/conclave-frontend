import type { PageLoad } from './$types';
import { fetchAssociation } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
	const id = String(params.id);
	const response = await fetchAssociation(id);
	console.log(response);
	return { associationData: response };
};
