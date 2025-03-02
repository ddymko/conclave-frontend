<script>
    // Your JSON data
    // const data = {
    //     component_statuses: {
    //         slurmd: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         slurmdbd: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         nginx: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         slurmrestd: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         slurmctld: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         mariadb: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         docker: "Active: active (running) since Sun 2025-03-02 00:32:51 UTC; 11min ago",
    //         munge: "Active: failed (Result: core-dump) since Sun 2025-03-02 00:34:28 UTC; 8s ago"
    //     }
    // };

    export let data;
    const {componentData} = data;

    // Convert object into an array for iteration
    const statuses = Object.entries(componentData.componentStatuses);

    function isActive(status) {
        return status.toLowerCase().includes("active (running)");
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {#each statuses as [component, status]}
        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
            <!-- Card Header with Icon aligned to the Right -->
            <div class="px-4 py-5 sm:px-6">
                <div class="flex items-center">
                    <h2 class="text-lg font-medium text-gray-900 capitalize">
                        {component}
                    </h2>
                    <!-- Use ml-auto to push the icon container to the right -->
                    <div class="flex">
                        {#if isActive(status)}
                            <!-- Green Check Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500" viewBox="0 0 376 384">
                                <path fill="green" d="M119 282L346 55l29 30l-256 256L0 222l30-30z"/>
                            </svg>
                        {:else if !isActive(status)}
                            <!-- X Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" viewBox="0 0 8 8">
                                <path fill="red" d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72L1.41 0z"/>
                            </svg>
                        {/if}
                    </div>
                </div>
            </div>
            <!-- Card Body with Status Message -->
            <div class="px-4 py-5 sm:p-6">
                <p class="text-gray-600">{status}</p>
            </div>
        </div>
    {/each}
</div>