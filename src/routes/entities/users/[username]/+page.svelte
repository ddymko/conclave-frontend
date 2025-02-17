<script lang="ts">
    export let data;
    const { userData } = data;

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
                <a href="/entities/users"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Users</a>
            </div>
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/entities/accounts/{ userData.user?.name}"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"> {userData.user?.name} </a>
            </div>
        </li>
    </ol>
</nav>



<div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
    <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base/7 font-semibold text-gray-900">User Information</h3>
        <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details and application.
        </p>
    </div>
    <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
            <!-- Name -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Name</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {userData.user?.name || 'n/a'}
                </dd>
            </div>
            <!-- Old Name -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Old Name</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {userData.user?.oldName || 'n/a'}
                </dd>
            </div>
            <!-- Default Association -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Default Association</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {#if userData.user?.defaultAssociation?.account}
                        <a
                                href={`/entities/accounts/${userData.user.defaultAssociation.account}`}
                                class="text-blue-600 hover:underline cursor-pointer"
                        >
                            {userData.user.defaultAssociation.account}
                        </a>
                    {:else}
                        No account
                    {/if}
                </dd>
            </div>
            <!-- Administrator Levels -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Administrator Levels</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {#if userData.user?.administratorLevel && userData.user.administratorLevel.length > 0}
                        <ul class="list-disc list-inside">
                            {#each userData.user.administratorLevel as level}
                                <li>{level}</li>
                            {/each}
                        </ul>
                    {:else}
                        n/a
                    {/if}
                </dd>
            </div>
            <!-- Associations -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Associations</dt>
                <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {#if userData.user?.associations && userData.user.associations.length > 0}
                        <ul class="space-y-4">
                            {#each userData.user.associations as assoc}
                                <li class="border p-4 rounded-md shadow-sm hover:shadow-md bg-gray-50">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <span class="font-semibold text-gray-800">Account:</span>
                                            <span class="text-gray-600 ml-1">{assoc.account}</span>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-800">Cluster:</span>
                                            <span class="text-gray-600 ml-1">{assoc.cluster}</span>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-800">Partition:</span>
                                            <span class="text-gray-600 ml-1">{assoc.partition || 'n/a'}</span>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-800">User:</span>
                                            <span class="text-gray-600 ml-1">{assoc.user}</span>
                                        </div>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="italic text-gray-500">n/a</p>
                    {/if}
                </dd>
            </div>
            <!-- Flags -->
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-900">Flags</dt>
                <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {#if userData.user?.flags && userData.user.flags.length > 0}
                        <ul class="list-disc list-inside">
                            {#each userData.user.flags as flag}
                                <li>{flag}</li>
                            {/each}
                        </ul>
                    {:else}
                        n/a
                    {/if}
                </dd>
            </div>
        </dl>
    </div>
</div>