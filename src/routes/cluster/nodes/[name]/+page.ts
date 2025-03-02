import type { PageLoad } from './$types';
import {fetchNode} from '$lib/api';


export const load: PageLoad = async ({ params }) => {
    const name = String(params.name);

    const [nodeData] = await Promise.all([
        fetchNode(name),
    ])

    console.log(nodeData.nodes)

    return { nodeData };
};
