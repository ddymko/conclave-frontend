<script>

    export let data;
    const {tresData} = data;


    // Convert the object to an array for iteration.
    let tresArray = Object.values(tresData).filter(item => item && item.type);
</script>
<nav class="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
    <ol role="list" class="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
        <li class="flex">
            <div class="flex items-center">
                <a href="/" class="text-gray-400 hover:text-gray-500">
                    <svg class="size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>
        <li class="flex">
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a href="/tres" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Tres Overview</a>
            </div>
        </li>
    </ol>
</nav>
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