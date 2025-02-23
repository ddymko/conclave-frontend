<script lang="ts">
    export let data;
    const { nodeData } = data;
    let node = nodeData.nodes[0];

    function formatTimestamp(epochTime: bigint) {
        return new Date(Number(epochTime) * 1000).toLocaleString();
    }

    // Tab selection state
    let selectedTab: "information" | "metrics" = "information";


    // Default time range (last 1 hour)
    let fromTime = "now-1h";
    let toTime = "now";

    // Function to update the time range dynamically
    function setTimeRange(minutes) {
        fromTime = `now-${minutes}m`;
    }

    // Reactive statements to update the Grafana URLs when `fromTime` changes
    $: grafanaSrc1 = getGrafanaUrl(77, fromTime);
    $: grafanaSrc2 = getGrafanaUrl(78, fromTime);
    $: grafanaSrc3 = getGrafanaUrl(74, fromTime);

    // Function to generate Grafana URLs dynamically and force refresh
    function getGrafanaUrl(panelId, time) {
        return `http://192.168.4.194:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&panelId=${panelId}&from=${time}&to=${toTime}&refresh=1m&theme=light&width=800&height=600&var-host=${node.address}&_=${Date.now()}`;
    }
</script>

<!-- Breadcrumb Navigation -->
<nav class="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="/" class="text-gray-400 hover:text-gray-500">
                    <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd"/>
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
                <a href="/cluster/nodes/" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Nodes Dashboard</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/cluster/nodes/{node.name}" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Node {node.name}</a>
            </div>
        </li>
    </ol>
</nav>

<!-- Tabs -->
<div class="border-b border-gray-200 bg-white">
    <nav class="flex space-x-4 px-6 py-3">
        <button
                on:click={() => selectedTab = "information"}
                class="px-4 py-2 text-sm font-medium rounded-md
                   {selectedTab === 'information' ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'}">
            Information
        </button>
        <button
                on:click={() => selectedTab = "metrics"}
                class="px-4 py-2 text-sm font-medium rounded-md
                   {selectedTab === 'metrics' ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'}">
            Metrics
        </button>
    </nav>
</div>

<!-- Information Tab -->
{#if selectedTab === "information"}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <!-- Node Information Cards -->
        {#each [
            { title: "General Info", items: [
                    ["Name", node.name], ["Architecture", node.architecture], ["Hostname", node.hostname],
                    ["Address", node.address], ["Operating System", node.operatingSystem],
                    ["State", node.state.join(', ')], ["Partitions", node.partitions.join(', ')], ["Version", node.version]
                ] },
            { title: "Hardware & CPU Info", items: [
                    ["Cores", node.cores], ["CPUs", node.cpus], ["Effective CPUs", node.effectiveCpus],
                    ["CPU Load", node.cpuLoad], ["Boards", node.boards], ["Sockets", node.sockets], ["Threads", node.threads]
                ] },
            { title: "Memory Info", items: [
                    ["Real Memory", `${node.realMemory} MB`],
                    ["Free Memory", node.freeMem.set ? `${node.freeMem.number} MB` : "Not Set"],
                    ["Allocated Memory", `${node.allocMemory} MB`]
                ] },
            { title: "Energy & Power", items: [
                    ["Average Watts", node.energy.averageWatts], ["Consumed Energy", node.energy.consumedEnergy],
                    ["Current Watts (Energy)", node.energy.currentWatts.set ? node.energy.currentWatts.number : "Not Set"],
                    ["Current Watts (Power)", node.power.currentWatts], ["Total Energy", node.power.totalEnergy]
                ] },
            { title: "Timestamps", items: [
                    ["Boot Time", node.bootTime ? formatTimestamp(node.bootTime.number) : "Not Set"],
                    ["Last Busy", node.lastBusy.set ? formatTimestamp(node.lastBusy.number) : "Not Set"],
                    ["SLURM Start Time", node.set ? formatTimestamp(node.slurmd_startTime.number) : "Not Set"]
                ] },
            { title: "Other Info", items: [
                    ["CPU Binding", node.cpuBinding], ["Extra", node.extra || "N/A"],
                    ["GRES Drained", node.gresDrained], ["GRES", node.gres], ["TRES", node.tres], ["Weight", node.weight]
                ] }
        ] as card}
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">{card.title}</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        {#each card.items as [label, value]}
                            <li><strong>{label}:</strong> {value}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
{/if}

<!-- Time Range Selection -->
{#if selectedTab === "metrics"}
    <div class="flex flex-wrap gap-2 p-6">
        {#each [
            { label: "5 mins", value: 5 }, { label: "15 mins", value: 15 }, { label: "30 mins", value: 30 },
            { label: "1 hour", value: 60 }, { label: "6 hours", value: 360 }, { label: "12 hours", value: 720 },
            { label: "24 hours", value: 1440 }, { label: "1 week", value: 10080 }
        ] as time}
            <button on:click={() => setTimeRange(time.value)} class="rounded-sm bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {time.label}
            </button>
        {/each}
    </div>

    <!-- Grafana Dashboards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={grafanaSrc1} class="w-full h-[600px] rounded-lg border border-gray-200" frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={grafanaSrc2} class="w-full h-[600px] rounded-lg border border-gray-200" frameborder="0"></iframe>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
            <div class="px-4 py-5 sm:p-6 flex-grow">
                <iframe src={grafanaSrc3} class="w-full h-[600px] rounded-lg border border-gray-200" frameborder="0"></iframe>
            </div>
        </div>
    </div>
{/if}