<script lang="ts">

    import {convertJobState} from "$lib/utils";

    export let data;
    const {tresData, jobsData} = data;



    function convertMbToGb(mb: bigint): string {
        return (Number(mb) / 1024).toFixed(2);
    }

    const stateCount = new Map<string, number>();

    // Loop through each job and update the map.
    jobsData.jobs.forEach((job) => {
        const state = convertJobState(job.state);
        const currentCount = stateCount.get(state) ?? 0;
        stateCount.set(state, currentCount + 1);
    });

    console.log(stateCount);

</script>

<nav class="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="/" class="text-gray-400 hover:text-gray-500">
                    <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                         data-slot="icon">
                        <path fill-rule="evenodd"
                              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                              clip-rule="evenodd"/>
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
                <!--                <a href="/jobs" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Job Dashboard</a>-->
            </div>
        </li>
    </ol>
</nav>

<div>
    <dl class="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-3">
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Total Nodes</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ tresData.node.count }</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Total CPU Cores</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ tresData.cpu.count}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Total Memory (GB) </dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ convertMbToGb(tresData.mem.count)}</dd>
        </div>

    </dl>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-7">
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Total Jobs</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ jobsData.jobs.length}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Completed</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Completed")}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Cancelled</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Cancelled")}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Failed</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Failed")}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Timed out</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Timeout")}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Pending</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Pending")}</dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Jobs Running</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{ stateCount.get("Running")}</dd>
        </div>
    </dl>
</div>
