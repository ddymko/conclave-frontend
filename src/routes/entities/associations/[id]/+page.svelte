<script>
    // Dummy data representing Slurm associations with extended details.
    export let data;
    const {associationData} = data;


    // associationData.associations[0]
    let selectedAssociation = associationData.associations[0];

    console.log(selectedAssociation)

    let currentTab = "overview";

    // Helper to format a Unix timestamp to a readable date.
    function formatDate(ts) {
        return new Date(ts * 1000).toLocaleString();
    }
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
                <a href="/entities/associations"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Associations</a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/entities/associations{selectedAssociation.id?.id}"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">{selectedAssociation.id?.id}</a>
            </div>
        </li>
    </ol>
</nav>

<div class="min-h-screen flex flex-col">
    <div class="flex flex-1">
        <!-- Sidebar with association list -->
<!--        <aside class="w-64 bg-gray-100 p-4 border-r">-->
<!--            <h2 class="text-lg font-semibold mb-4">Associations</h2>-->
<!--            <ul>-->
<!--                {#each associations as assoc (assoc.account)}-->
<!--                    <li-->
<!--                            class="p-3 mb-2 hover:bg-gray-200 cursor-pointer rounded"-->
<!--                            on:click={() => {-->
<!--              selectedAssociation = assoc;-->
<!--              currentTab = "overview";-->
<!--            }}>-->
<!--                        <div class="font-bold">{assoc.account}</div>-->
<!--                        <div class="text-sm">{assoc.cluster} | {assoc.partition}</div>-->
<!--                        <div class="text-xs text-gray-600">{assoc.user}</div>-->
<!--                    </li>-->
<!--                {/each}-->
<!--            </ul>-->
<!--        </aside>-->

        <!-- Main Content Area -->
        <main class="flex-1 p-6 overflow-auto">
            <!-- Association Details Card -->
            <section class="bg-white shadow rounded p-6 mb-6">
                <h2 class="text-2xl font-semibold mb-4">Association Details</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div><strong>Account:</strong> {selectedAssociation.account}</div>
                    <div><strong>Cluster:</strong> {selectedAssociation.cluster}</div>
                    <div><strong>Partition:</strong> {selectedAssociation.partition}</div>
                    <div><strong>User:</strong> {selectedAssociation.user}</div>
                    <div class="col-span-2"><strong>Comment:</strong> {selectedAssociation.comment}</div>
                    <div class="col-span-2"><strong>Lineage:</strong> {selectedAssociation.lineage}</div>
                    <div><strong>Priority:</strong> {selectedAssociation.priority.number}</div>
                    <div>
                        <strong>Account Wall Clock Limit:</strong>
                        {selectedAssociation.max.per.account.wallClock.number} seconds
                    </div>
                </div>
            </section>

            <!-- Tabs for additional details -->
            <section>
                <!-- Tab Headers -->
                <div class="border-b mb-4">
                    <nav class="flex space-x-4">
                        <button
                                on:click={() => currentTab = "overview"}
                                class={`py-2 px-4 ${currentTab === "overview" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
                            Overview
                        </button>
                        <button
                                on:click={() => currentTab = "resources"}
                                class={`py-2 px-4 ${currentTab === "resources" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
                            Resources
                        </button>
                        <button
                                on:click={() => currentTab = "accounting"}
                                class={`py-2 px-4 ${currentTab === "accounting" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
                            Accounting
                        </button>
                        <button
                                on:click={() => currentTab = "metadata"}
                                class={`py-2 px-4 ${currentTab === "metadata" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
                            Metadata
                        </button>
                    </nav>
                </div>

                <!-- Tab Panels -->
                {#if currentTab === "overview"}
                    <div class="p-4 bg-white rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Overview</h3>
                        <p><strong>Account:</strong> {selectedAssociation.account}</p>
                        <p><strong>Cluster:</strong> {selectedAssociation.cluster}</p>
                        <p><strong>Partition:</strong> {selectedAssociation.partition}</p>
                        <p><strong>User:</strong> {selectedAssociation.user}</p>
                        <p><strong>Comment:</strong> {selectedAssociation.comment}</p>
                        <p><strong>Lineage:</strong> {selectedAssociation.lineage}</p>
                        <p><strong>Priority:</strong> {selectedAssociation.priority.number}</p>
                    </div>
                {:else if currentTab === "resources"}
                    <div class="p-4 bg-white rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Resources</h3>
                        <div class="mb-4">
                            <h4 class="font-semibold">Job Limits</h4>
                            <p><strong>Active Jobs:</strong> {selectedAssociation.max.jobs.active.number}</p>
                            <p><strong>Total Jobs:</strong> {selectedAssociation.max.jobs.total.number}</p>
                            <p><strong>Accruing Jobs:</strong> {selectedAssociation.max.jobs.accruing.number}</p>
                            <p><strong>Per-Job Count Limit:</strong> {selectedAssociation.max.jobs.per.count.number}</p>
                            <p><strong>Wall Clock per Job:</strong> {selectedAssociation.max.jobs.per.wallClock.number} seconds</p>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold">TRES Limits</h4>
                            <p><strong>Total TRES:</strong></p>
                            <ul class="list-disc list-inside">
                                {#each selectedAssociation.max.tres.total as tres}
                                    <li>{tres.name} ({tres.type}): {tres.count}</li>
                                {/each}
                            </ul>
                            <p><strong>Per-Job TRES:</strong></p>
                            <ul class="list-disc list-inside">
                                {#each selectedAssociation.max.tres.per.job as tres}
                                    <li>{tres.name} ({tres.type}): {tres.count}</li>
                                {/each}
                            </ul>
                            <p><strong>Per-Node TRES:</strong></p>
                            <ul class="list-disc list-inside">
                                {#each selectedAssociation.max.tres.per.node as tres}
                                    <li>{tres.name} ({tres.type}): {tres.count}</li>
                                {/each}
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold">Account-specific Limits</h4>
                            <p><strong>Wall Clock Limit:</strong> {selectedAssociation.max.per.account.wallClock.number} seconds</p>
                        </div>
                    </div>
                {:else if currentTab === "accounting"}
                    <div class="p-4 bg-white rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Accounting</h3>
                        {#each selectedAssociation.accounting as acct}
                            <div class="mb-4 border-b pb-2">
                                <p><strong>Record ID:</strong> {acct.id}</p>
                                <p><strong>Allocated Seconds:</strong> {acct.allocated.seconds}</p>
                                <p><strong>Start Time:</strong> {formatDate(acct.start)}</p>
                                <p><strong>TRES:</strong> {acct.TRES.name} ({acct.TRES.type}) - {acct.TRES.count}</p>
                            </div>
                        {/each}
                    </div>
                {:else if currentTab === "metadata"}
                    <div class="p-4 bg-white rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Metadata</h3>
                        <div class="mb-4">
                            <h4 class="font-semibold">Min Settings</h4>
                            <p>
                                <strong>Priority Threshold:</strong>
                                <!--{selectedAssociation.min.priority_threshold.number}-->
<!--                                (Set: {selectedAssociation.min.priority_threshold.set ? "Yes" : "No"}, Infinite: {selectedAssociation.min.priority_threshold.infinite})-->
                            </p>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold">Default Settings</h4>
                            <ul class="list-disc list-inside">
                                {#each Object.entries(selectedAssociation.default) as [key, value]}
                                    <li><strong>{key}:</strong> {value}</li>
                                {/each}
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h4 class="font-semibold">Flags</h4>
                            <ul class="list-disc list-inside">
                                {#each selectedAssociation.flags as flag}
                                    <li>{flag}</li>
                                {/each}
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold">ID Details</h4>
                            <p><strong>Account:</strong> {selectedAssociation.id.account}</p>
                            <p><strong>Cluster:</strong> {selectedAssociation.id.cluster}</p>
                            <p><strong>Partition:</strong> {selectedAssociation.id.partition}</p>
                            <p><strong>User:</strong> {selectedAssociation.id.user}</p>
                            <p><strong>ID:</strong> {selectedAssociation.id.id}</p>
                        </div>
                    </div>
                {/if}
            </section>
        </main>
    </div>
</div>

