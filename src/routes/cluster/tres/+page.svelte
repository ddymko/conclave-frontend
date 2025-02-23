<script>

    export let data;
    const {tresData} = data;


    // Convert the object to an array for iteration.
    let tresArray = Object.values(tresData).filter(item => item && item.type);
</script>

<div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold align-left mb-8">TRES Summary</h1>
        <!-- Responsive grid: 1 column on small screens, 2 on md, and 3 on lg -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each tresArray as tresItem}
                <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                    <!-- Card Header -->
                    <div class="px-4 py-5 sm:px-6">
                        <h2 class="text-xl font-semibold capitalize">{tresItem.type}</h2>
                    </div>
                    <!-- Card Body -->
                    <div class="px-4 py-5 sm:p-6">
                        <p><strong>Name:</strong> {tresItem.name || "n/a"}</p>
                        <p><strong>Count:</strong> {tresItem.count}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>