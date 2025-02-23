<script lang="ts">
    export let data;
    const {partitionData} = data;
    let partition = partitionData.partitions[0];
    console.log(partition)
</script>


<nav class="flex border-b bg-gray-100 border-gray-400 mb-8" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="/" class="text-gray-600 hover:text-gray-500">
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
                <a href="/cluster/partitions"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Partitions</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/cluster/partitions/{partition.name}"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">{partition.name}</a>
            </div>
        </li>
    </ol>
</nav>

<div class=" py-8 px-4">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold left Align mb-8">Partition Details</h1>
        <!-- Two-column grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- General Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">General Info</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Partition Name:</strong> {partition.name}</p>
                    <p><strong>Node Sets:</strong> {partition.nodeSets}</p>
                </div>
            </div>

            <!-- Nodes Configuration Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Nodes Configuration</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Allowed Allocation:</strong> {partition.nodes.allowedAllocation}</p>
                    <p><strong>Configured:</strong> {partition.nodes.configured}</p>
                    <p><strong>Total Nodes:</strong> {partition.nodes.total}</p>
                </div>
            </div>

            <!-- Accounts & Groups Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Accounts &amp; Groups</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Accounts Allowed:</strong> {partition.accounts.allowed}</p>
                    <p><strong>Accounts Deny:</strong> {partition.accounts.deny}</p>
                    <p><strong>Groups Allowed:</strong> {partition.groups.allowed}</p>
                </div>
            </div>

            <!-- QoS & Tres Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">QoS &amp; Tres</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>QoS Allowed:</strong> {partition.qos.allowed}</p>
                    <p><strong>QoS Deny:</strong> {partition.qos.deny}</p>
                    <p><strong>QoS Assigned:</strong> {partition.qos.assigned}</p>
                    <p><strong>Tres Billing Weights:</strong> {partition.tres.billingWeights}</p>
                    <p><strong>Tres Configured:</strong> {partition.tres.configured}</p>
                </div>
            </div>

            <!-- CPUs & Defaults Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">CPUs &amp; Defaults</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>CPU Task Binding:</strong> {partition.cpus.taskBinding}</p>
                    <p><strong>Total CPUs:</strong> {partition.cpus.total}</p>
                    <p><strong>Memory per CPU:</strong> {partition.defaults.memoryPerCpu}</p>
                    <p><strong>Job:</strong> {partition.defaults.job}</p>
                </div>
            </div>

            <!-- Maximums Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Maximums</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>CPUs per Node:</strong> {partition.maximums.cpusPerNode.number}</p>
                    <p><strong>CPUs per Socket:</strong> {partition.maximums.cpusPerSocket.number}</p>
                    <p><strong>Memory per CPU:</strong> {partition.maximums.memoryPerCpu}</p>
                    <p><strong>Shares:</strong> {partition.maximums.shares}</p>
<!--                    <p><strong>Oversubscribe Jobs:</strong> {partition.maximums.ov.jobs}</p>-->
<!--                    <p><strong>Oversubscribe Flags:</strong> {partition.maximums.oversubscribe.flags}</p>-->
                </div>
            </div>

<!--             Timeouts Card-->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Timeouts</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Resume Timeout:</strong> {partition.timeouts.resume.number}</p>
                    <p><strong>Suspend Timeout:</strong> {partition.timeouts.suspend.number}</p>
                </div>
            </div>

            <!-- Partition State & Suspend Time Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Partition State &amp; Suspend Time</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>State:</strong> {partition.partition.state.join(', ')}</p>
                    <p><strong>Suspend Time:</strong> {partition.suspendTime.number}</p>
                </div>
            </div>

        </div>
    </div>
</div>