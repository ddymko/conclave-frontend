<script lang="ts">

    // import {convertJobState} from "$lib/utils";
    //
    // export let data;
    // const {tresData, jobsData} = data;
    //
    //
    // function convertMbToGb(mb: bigint): string {
    //     return (Number(mb) / 1024).toFixed(2);
    // }
    //
    // const stateCount = new Map<string, number>();
    //
    // // Loop through each job and update the map.
    // jobsData.jobs.forEach((job) => {
    //     const state = convertJobState(job.state);
    //     const currentCount = stateCount.get(state) ?? 0;
    //     stateCount.set(state, currentCount + 1);
    // });
    //
    // console.log(stateCount);

    // Define the available time ranges.
    // Default time range (last 1 hour)
    let fromTime = "now-1h";
    let toTime = "now";

    // Function to update the time range dynamically
    function setTimeRange(minutes) {
        fromTime = `now-${minutes}m`;
    }

    // Reactive statements to update the Grafana URLs when `fromTime` changes
    $: slurmThreads = getGrafanaUrl(7, fromTime);
    $: agentQueue = getGrafanaUrl(8, fromTime);
    $: DBDAgent = getGrafanaUrl(26, fromTime);
    $: scheduleCycle = getGrafanaUrl(4, fromTime);
    $: backfillCycles = getGrafanaUrl(3, fromTime);
    $: backfillDepth = getGrafanaUrl(9, fromTime);
    $: backfillHetero = getGrafanaUrl(34, fromTime);
    $: backfillJobs1 = getGrafanaUrl(28, fromTime);
    $: backfillJobs2 = getGrafanaUrl(30, fromTime);

    // Function to generate Grafana URLs dynamically and force refresh
    function getGrafanaUrl(panelId, time) {
        return `http://192.168.4.194:3000/d-solo/bX7jn6dZk/slurm-dashboard?orgId=1&from=${time}&to=${toTime}&timezone=browser&panelId=${panelId}&__feature.dashboardSceneSolo&_=${Date.now()}&theme=light&refresh=1m`
        // return `http://192.168.4.194:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&panelId=${panelId}&from=${time}&to=${toTime}&refresh=1m&theme=light&width=800&height=600&var-host=${node.address}&_=${Date.now()}`;
    }

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
                <a href="/" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Scheduling Insight</a>
            </div>
        </li>

    </ol>
</nav>

<div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm mt-10">
    <div class="px-4 py-5 sm:p-6">
        Metric Time Range
        <div class="flex flex-wrap gap-2 p-6">
            {#each [
                {label: "5 mins", value: 5}, {label: "15 mins", value: 15}, {label: "30 mins", value: 30},
                {label: "1 hour", value: 60}, {label: "6 hours", value: 360}, {label: "12 hours", value: 720},
                {label: "24 hours", value: 1440}, {label: "1 week", value: 10080}
            ] as time}
                <button on:click={() => setTimeRange(time.value)}
                        class="rounded-sm bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {time.label}
                </button>
            {/each}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
                <div class="px-4 py-5 sm:p-6 flex-grow">
                    <iframe src={slurmThreads} class="w-full h-[300px] rounded-lg border border-gray-200"
                            frameborder="0"></iframe>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
                <div class="px-4 py-5 sm:p-6 flex-grow">
                    <iframe src={agentQueue} class="w-full h-[300px] rounded-lg border border-gray-200"
                            frameborder="0"></iframe>
                </div>
            </div>
            <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
                <div class="px-4 py-5 sm:p-6 flex-grow">
                    <iframe src={DBDAgent} class="w-full h-[300px] rounded-lg border border-gray-200"
                            frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 gap-6 p-6">
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={scheduleCycle} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={backfillCycles} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={backfillDepth} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={backfillHetero} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={backfillJobs1} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={backfillJobs2} class="w-full h-[600px] rounded-lg border border-gray-200"
                        frameborder="0"></iframe>
            </div>
        </div>
    </div>
</div>


