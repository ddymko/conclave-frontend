import type { PageLoad } from './$types';
import { fetchJob, fetchJobScript } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
    const jobId = Number(params.jobId);

    function decodeByteArray(byteArray: Uint8Array): string {
        return new TextDecoder().decode(byteArray);
    }

    // Fetch both job details and script data in parallel
    const [jobData, scriptResponse] = await Promise.all([
        fetchJob(jobId),
        fetchJobScript(jobId) // string version of jobId
    ]);

    // console.log(jobData, scriptResponse);

    // Decode scriptResponse from byte[] to string
    const jobScript = decodeByteArray(new Uint8Array(scriptResponse.script));
    const jobEnvVars = decodeByteArray(new Uint8Array(scriptResponse.envVars));

    return { jobData, jobScript, jobEnvVars };
};