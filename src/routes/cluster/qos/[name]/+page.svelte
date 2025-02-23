<script lang="ts">
    export let data;
    const { qosData } = data;

    let qos = qosData.qos[0];
</script>

<nav class="flex border-b border-gray-200 bg-white mb-8" aria-label="Breadcrumb">
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
                <a href="cluster/qos"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">QOS</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="cluster/qos"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">QOS: {qos.name}</a>
            </div>
        </li>
    </ol>
</nav>

<div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold align-left mb-8">QoS Details</h1>
        <!-- Two-column grid layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- Overview Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <!-- Card Header -->
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Overview</h2>
                </div>
                <!-- Card Body -->
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Description:</strong> {qos.description}</p>
                    <p><strong>ID:</strong> {qos.id}</p>
                    <p><strong>Name:</strong> {qos.name}</p>
                    <p>
                        <strong>Flags:</strong>
                        {qos.flags.length ? qos.flags.join(", ") : "None"}
                    </p>
                    <p>
                        <strong>Priority:</strong> {qos.priority.number}
                        (Set: {qos.priority.set ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Grace Time:</strong> {qos.limits.graceTime}
                    </p>
                    <p>
                        <strong>Factor:</strong> {qos.limits.factor.number}
                        (Set: {qos.limits.factor.set ? "Yes" : "No"},
                        Infinite: {qos.limits.factor.infinite ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Max Active Jobs - Accruing:</strong> {qos.limits.max.activeJobs.accruing.number}
                        (Set: {qos.limits.max.activeJobs.accruing.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Max Active Jobs - Count:</strong> {qos.limits.max.activeJobs.count.number}
                        (Set: {qos.limits.max.activeJobs.count.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Wall Clock - QOS:</strong> {qos.limits.max.wallClock.per.qos.number}
                        (Set: {qos.limits.max.wallClock.per.qos.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Min Priority Threshold:</strong> {qos.limits.min.priorityThreshold.number}
                        (Set: {qos.limits.min.priorityThreshold.set ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Preempt Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Preempt</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Mode:</strong>
                        {qos.preempt.mode.length ? qos.preempt.mode.join(", ") : "None"}
                    </p>
                    <p>
                        <strong>Exempt Time:</strong> {qos.preempt.exemptTime.number}
                        (Set: {qos.preempt.exemptTime.set ? "Yes" : "No"},
                        Infinite: {qos.preempt.exemptTime.infinite ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Usage Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Usage</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Usage Factor:</strong> {qos.usageFactor.number}
                        (Set: {qos.usageFactor.set ? "Yes" : "No"},
                        Infinite: {qos.usageFactor.infinite ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Usage Threshold:</strong> {qos.usageThreshold.number}
                        (Set: {qos.usageThreshold.set ? "Yes" : "No"},
                        Infinite: {qos.usageThreshold.infinite ? "Yes" : "No"})
                    </p>
                </div>
            </div>

        </div>
    </div>
</div>