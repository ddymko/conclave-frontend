import type { PageLoad } from './$types';
import { fetchUser } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
	const userName = String(params.username);

	// Fetch both job details and script data in parallel
	const [userData] = await Promise.all([fetchUser(userName)]);

	return { userData };
};
