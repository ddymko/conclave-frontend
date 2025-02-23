<script>
    import { onMount } from "svelte";

    // Default values (last 1 hour)
    let startTime = Math.floor(Date.now() / 1000) - 3600;
    let endTime = Math.floor(Date.now() / 1000);

    // Reactive URL based on user input
    $: src = `http://192.168.4.194:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=${startTime * 1000}&to=${endTime * 1000}&timezone=browser&var-datasource=default&var-job=node&var-node=192.168.4.194:9100&var-diskdevices=%5Ba-z%5D%2B%7Cnvme%5B0-9%5D%2Bn%5B0-9%5D%2B%7Cmmcblk%5B0-9%5D%2B&refresh=1m&theme=light&panelId=77&__feature.dashboardSceneSolo`;

    // Helper function to update the time range
    function setTimeRange(minutes) {
        startTime = Math.floor(Date.now() / 1000) - minutes * 60;
        endTime = Math.floor(Date.now() / 1000);
    }
</script>

<!-- Time Range Selection Buttons -->
<div class="flex flex-wrap gap-2 p-6">
    <button on:click={() => setTimeRange(5)} class="px-3 py-1 bg-gray-300 rounded">5 mins</button>
    <button on:click={() => setTimeRange(15)} class="px-3 py-1 bg-gray-300 rounded">15 mins</button>
    <button on:click={() => setTimeRange(30)} class="px-3 py-1 bg-gray-300 rounded">30 mins</button>
    <button on:click={() => setTimeRange(60)} class="px-3 py-1 bg-gray-300 rounded">1 hour</button>
    <button on:click={() => setTimeRange(360)} class="px-3 py-1 bg-gray-300 rounded">6 hours</button>
    <button on:click={() => setTimeRange(720)} class="px-3 py-1 bg-gray-300 rounded">12 hours</button>
    <button on:click={() => setTimeRange(1440)} class="px-3 py-1 bg-gray-300 rounded">24 hours</button>
    <button on:click={() => setTimeRange(10080)} class="px-3 py-1 bg-gray-300 rounded">1 week</button>
</div>

<!-- Grafana Panels -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <!-- Column 1 -->
    <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
        <div class="px-4 py-5 sm:p-6 flex-grow">
            <iframe
                    {src}
                    class="w-full h-[800px] rounded-lg border border-gray-200"
                    height="400"
                    frameborder="0">
            </iframe>
        </div>
    </div>

    <!-- Column 2 -->
    <div class="overflow-hidden rounded-lg bg-white shadow-sm flex flex-col">
        <div class="px-4 py-5 sm:p-6 flex-grow">
            <iframe
                    {src}
                    class="w-full h-[800px] rounded-lg border border-gray-200"
                    height="400"
                    frameborder="0">
            </iframe>
        </div>
    </div>
</div>