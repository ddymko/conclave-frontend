<script lang="ts">
    export let data;
    // Ensure that qosData and the first QoS object exist
    const qosData = data?.qosData;
    let qos = qosData?.qos?.[0] || {};
    console.log(qos);
</script>

<nav class="flex border-b border-gray-200 bg-white mb-8" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="/" class="text-gray-400 hover:text-gray-500">
                    <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                              clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="cluster/qos" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">QOS</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="cluster/qos" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">
                    QOS: {qos.name || "N/A"}
                </a>
            </div>
        </li>
    </ol>
</nav>

<div class="min-h-screen bg-gray-100 py-8 px-4">

    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold align-left mb-8">QoS Details</h1>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <a href="/cluster/qos/{qos.name}/edit"
               class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Edit QOS
            </a>
        </div>

        <!-- Primary Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Overview Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Overview</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <p><strong>Description:</strong> {qos.description || "N/A"}</p>
                    <p><strong>ID:</strong> {qos.id || "N/A"}</p>
                    <p><strong>Name:</strong> {qos.name || "N/A"}</p>
                    <p>
                        <strong>Flags:</strong>
                        {(qos.flags && qos.flags.length) ? qos.flags.join(", ") : "None"}
                    </p>
                    <p>
                        <strong>Priority:</strong> {qos.priority?.number ?? "N/A"}
                        (Set: {qos.priority?.set ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Basic Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Basic Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Grace Time:</strong> {qos.limits?.graceTime ?? "N/A"}
                    </p>
                    <p>
                        <strong>Max Active Jobs - Accruing:</strong> {qos.limits?.max?.activeJobs?.accruing?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.activeJobs?.accruing?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Max Active Jobs - Count:</strong> {qos.limits?.max?.activeJobs?.count?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.activeJobs?.count?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Wall Clock - QOS:</strong>
                        {qos.limits?.max?.wallClock?.per?.qos?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.wallClock?.per?.qos?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Factor:</strong> {qos.limits?.factor?.number ?? "N/A"}
                        (Set: {qos.limits?.factor?.set ? "Yes" : "No"}, Infinite: {qos.limits?.factor?.infinite ? "Yes" : "No"})
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
                        <strong>List:</strong>
                        {(qos.preempt?.list && qos.preempt.list.length)
                            ? qos.preempt.list.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Mode:</strong>
                        {(qos.preempt?.mode && qos.preempt.mode.length)
                            ? qos.preempt.mode.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Exempt Time:</strong> {qos.preempt?.exemptTime?.number ?? "N/A"}
                        (Set: {qos.preempt?.exemptTime?.set ? "Yes" : "No"}, Infinite: {qos.preempt?.exemptTime?.infinite ? "Yes" : "No"})
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
                        <strong>Usage Factor:</strong> {qos.usageFactor?.number ?? "N/A"}
                        (Set: {qos.usageFactor?.set ? "Yes" : "No"}, Infinite: {qos.usageFactor?.infinite ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Usage Threshold:</strong> {qos.usageThreshold?.number ?? "N/A"}
                        (Set: {qos.usageThreshold?.set ? "Yes" : "No"}, Infinite: {qos.usageThreshold?.infinite ? "Yes" : "No"})
                    </p>
                </div>
            </div>
        </div>

        <!-- Limits Details Section -->
        <h2 class="text-2xl font-bold mt-8">Limits Details</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <!-- TRES Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">TRES Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Total:</strong>
                        {(qos.limits?.max?.tres?.total && qos.limits.max.tres.total.length)
                            ? qos.limits.max.tres.total.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Minutes per QOS:</strong>
                        {(qos.limits?.max?.tres?.minutes?.per?.qos && qos.limits.max.tres.minutes.per.qos.length)
                            ? qos.limits.max.tres.minutes.per.qos.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Minutes per Job:</strong>
                        {(qos.limits?.max?.tres?.minutes?.per?.job && qos.limits.max.tres.minutes.per.job.length)
                            ? qos.limits.max.tres.minutes.per.job.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Minutes per Account:</strong>
                        {(qos.limits?.max?.tres?.minutes?.per?.account && qos.limits.max.tres.minutes.per.account.length)
                            ? qos.limits.max.tres.minutes.per.account.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Minutes per User:</strong>
                        {(qos.limits?.max?.tres?.minutes?.per?.user && qos.limits.max.tres.minutes.per.user.length)
                            ? qos.limits.max.tres.minutes.per.user.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Per Account:</strong>
                        {(qos.limits?.max?.tres?.per?.account && qos.limits.max.tres.per.account.length)
                            ? qos.limits.max.tres.per.account.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Per Job:</strong>
                        {(qos.limits?.max?.tres?.per?.job && qos.limits.max.tres.per.job.length)
                            ? qos.limits.max.tres.per.job.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Per Node:</strong>
                        {(qos.limits?.max?.tres?.per?.node && qos.limits.max.tres.per.node.length)
                            ? qos.limits.max.tres.per.node.join(", ")
                            : "None"}
                    </p>
                    <p>
                        <strong>Per User:</strong>
                        {(qos.limits?.max?.tres?.per?.user && qos.limits.max.tres.per.user.length)
                            ? qos.limits.max.tres.per.user.join(", ")
                            : "None"}
                    </p>
                </div>
            </div>

            <!-- Jobs Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Jobs Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Active Jobs per Account:</strong>
                        {qos.limits?.max?.jobs?.activeJobs?.per?.account?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.jobs?.activeJobs?.per?.account?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Active Jobs per User:</strong>
                        {qos.limits?.max?.jobs?.activeJobs?.per?.user?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.jobs?.activeJobs?.per?.user?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Jobs per Account:</strong>
                        {qos.limits?.max?.jobs?.per?.account?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.jobs?.per?.account?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Jobs per User:</strong>
                        {qos.limits?.max?.jobs?.per?.user?.number ?? "N/A"}
                        (Set: {qos.limits?.max?.jobs?.per?.user?.set ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Accruing Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Accruing Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Per Account:</strong>
                        {qos.limits?.accruing?.per?.account?.number ?? "N/A"}
                        (Set: {qos.limits?.accruing?.per?.account?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>Per User:</strong>
                        {qos.limits?.accruing?.per?.user?.number ?? "N/A"}
                        (Set: {qos.limits?.accruing?.per?.user?.set ? "Yes" : "No"})
                    </p>
                </div>
            </div>

            <!-- Min Limits Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Min Limits</h2>
                </div>
                <div class="px-4 py-5 sm:p-6 space-y-2">
                    <p>
                        <strong>Priority Threshold:</strong> {qos.limits?.min?.priorityThreshold?.number ?? "N/A"}
                        (Set: {qos.limits?.min?.priorityThreshold?.set ? "Yes" : "No"})
                    </p>
                    <p>
                        <strong>TRES per Job:</strong>
                        {(qos.limits?.min?.tres?.per?.job && qos.limits.min.tres.per.job.length)
                            ? qos.limits.min.tres.per.job.join(", ")
                            : "None"}
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>