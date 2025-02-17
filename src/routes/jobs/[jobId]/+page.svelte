<script lang="ts">
    export let data;
    const { jobData, jobScript, jobEnvVars } = data;

    // Convert epoch timestamps to human-readable format
    function formatTimestamp(epochTime: bigint) {
        return new Date(Number(epochTime) * 1000).toLocaleString();
    }

    // Convert memory (assumed to be in MB) to a formatted string in MB or GB
    // function formatMemory(memoryInMb: number | string): string {
    //     const memNum = typeof memoryInMb === "string" ? parseFloat(memoryInMb) : memoryInMb;
    //     if (memNum >= 1024) {
    //         return `${(memNum / 1024).toFixed(2)} GB`;
    //     }
    //     return `${memNum} MB`;
    // }
    function formatMemory(memoryInMb: number | string | bigint): string {
        let memNum: number;
        if (typeof memoryInMb === "bigint") {
            memNum = Number(memoryInMb);
        } else if (typeof memoryInMb === "string") {
            memNum = parseFloat(memoryInMb);
        } else {
            memNum = memoryInMb;
        }
        if (memNum >= 1024) {
            return `${(memNum / 1024).toFixed(2)} GB`;
        }
        return `${memNum} MB`;
    }

    // Extract memory-related information (if needed elsewhere)
    const totalMemoryAllocated = jobData.tres.allocated.find(r => r.type === "mem")?.count ?? 0;
    const totalMemoryConsumed = jobData.tres.consumed.find(r => r.type === "mem")?.count ?? 0;
</script>

<nav class="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="#" class="text-gray-400 hover:text-gray-500">
                    <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/jobs/" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Jobs Dashboard</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/jobs/" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Job {jobData.header.jobId}</a>
            </div>
        </li>
    </ol>
</nav>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

    <!-- General Information -->
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
        <div class="px-4 py-5 sm:px-6">General Information</div>
        <div class="px-4 py-5 sm:p-6">
            <ul class="space-y-2 text-gray-800">
                <li><span class="font-semibold">Name:</span> {jobData.header.name}</li>
                <li><span class="font-semibold">Account:</span> {jobData.header.account}</li>
                <li><span class="font-semibold">Group:</span> {jobData.header.group}</li>
                <li><span class="font-semibold">Partition:</span> {jobData.header.partition}</li>
                <li><span class="font-semibold">Cluster:</span> {jobData.header.cluster}</li>
                <li><span class="font-semibold">Submit Line:</span> {jobData.header.submitLine}</li>
                <li><span class="font-semibold">Working Directory:</span> {jobData.workingDirectory}</li>
                <li><span class="font-semibold">QOS:</span> {jobData.header.qos}</li>
            </ul>
        </div>
    </div>

    <!-- Job State & Exit Code -->
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
        <div class="px-4 py-5 sm:px-6">Job State</div>
        <div class="px-4 py-5 sm:p-6">
            <p><span class="font-semibold">Current State:</span> {jobData.header.state.current.join(", ")}</p>
            <p><span class="font-semibold">State Reason:</span> {jobData.header.state.reason}</p>
            <p>
                <span class="font-semibold">Exit Code:</span>
                {jobData.header.exitCode.returnCode} ({jobData.header.exitCode.status.join(", ")})
            </p>
        </div>
    </div>

    <!-- Time Information -->
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
        <div class="px-4 py-5 sm:px-6">Time Information</div>
        <div class="px-4 py-5 sm:p-6">
            <p><span class="font-semibold">Submission Time:</span> {formatTimestamp(jobData.timeInfo.submissionTime)}</p>
            <p><span class="font-semibold">Start Time:</span> {formatTimestamp(jobData.timeInfo.startTime)}</p>
            <p><span class="font-semibold">End Time:</span> {formatTimestamp(jobData.timeInfo.endTime)}</p>
            <p><span class="font-semibold">Elapsed Time:</span> {jobData.timeInfo.elapsed} sec</p>
            <p><span class="font-semibold">Time Limit:</span> {jobData.timeInfo.timeLimit} min</p>
        </div>
    </div>

    <!-- Updated Resource Details: Split into Requested and Allocated -->
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
        <div class="px-4 py-5 sm:px-6">Resource Details</div>
        <div class="px-4 py-5 sm:p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Resources Requested -->
                <div>
                    <h3 class="font-semibold text-lg mb-2">Resources Requested</h3>
                    <ul class="space-y-2">
                        {#each jobData.tres.requested as resource}
                            <li>
                                  <span class="font-semibold">
                                    {#if resource.type === 'cpu'}
                                        CPU Cores:
                                    {:else if resource.type === 'node'}
                                        Nodes:
                                    {:else if resource.type === 'mem'}
                                        Memory:
                                    {:else}
                                        {resource.type.toUpperCase()}:
                                    {/if}
                                </span>
                                {#if resource.type === 'mem'}
                                    {formatMemory(resource.count)}
                                {:else}
                                    {resource.count}
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
                <!-- Resources Allocated -->
                <div>
                    <h3 class="font-semibold text-lg mb-2">Resources Allocated</h3>
                    <ul class="space-y-2">
                        {#each jobData.tres.allocated as resource}
                            <li>
                                <span class="font-semibold">
                                    {#if resource.type === 'cpu'}
                                        CPU Cores:
                                    {:else if resource.type === 'node'}
                                        Nodes:
                                    {:else if resource.type === 'mem'}
                                        Memory:
                                    {:else}
                                        {resource.type.toUpperCase()}:
                                    {/if}
                                </span>
                                {#if resource.type === 'mem'}
                                    {formatMemory(resource.count)}
                                {:else}
                                    {resource.count}
                                {/if}
                            </li>
                        {/each}
                        <span class="font-semibold">Nodes Allocated:</span> {jobData.header.nodes}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <section class="mb-6">
        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
            <div class="px-4 py-5 sm:px-6">
                <h2 class="text-lg font-medium text-gray-900">Job Script</h2>
            </div>
            <div class="px-4 py-5 sm:p-6">
                <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
                { jobScript.toString() }
                </pre>
            </div>
        </div>
    </section>
    <section class="mb-6">
        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
            <div class="px-4 py-5 sm:px-6">
                <h2 class="text-lg font-medium text-gray-900">Job Env Vars</h2>
            </div>
            <div class="px-4 py-5 sm:p-6">
                <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">
                { jobEnvVars.toString() }
                </pre>
            </div>
        </div>
    </section>
    <!-- Action Buttons -->
    <section class="flex space-x-4">
        <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Cancel Job
        </button>
        <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Hold / Resume
        </button>
    </section>
</div>