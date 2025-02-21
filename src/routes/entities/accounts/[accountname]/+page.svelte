<script lang="ts">
    export let data;
    const {accountData} = data;
    import { deleteAccount, createAccount } from '$lib/api';
    import { onMount } from 'svelte';

    let name = "";
    let organization = "";
    let description = "";
    let associationsForm = [];

    // Populate form fields when the component mounts
    onMount(() => {
        if (accountData.account) {
            name = accountData.account.name || "";
            organization = accountData.account.organization || "";
            description = accountData.account.description || "";
        }
    });
    // Create a local array so that editing doesn't immediately modify accountData
    let associations = accountData.account?.associations || [];

    function addAssociation() {
        // Append a new, empty association block
        associations = [...associations, {account: '', cluster: '', user: '', partition: ''}];
    }

    function removeAssociation(index: number) {
        associations = associations.filter((_, i) => i !== index);
    }

    async function deleteAcc() {

        console.log("i delete")
        if (!accountData.account?.name) {
            console.error("No account ID found");
            return;
        }
        let accountName = accountData.account?.name
        //
        const confirmed = confirm(`Are you sure you want to delete ${accountData.account.name}?`);
        if (!confirmed) return;

        try {

            // const response = await deleteAccount(accountName);
            await deleteAccount(accountName);
            // if (!response.ok) {
            //     throw new Error(`Failed to delete account: ${response.statusText}`);
            // }

            // Redirect on successful deletion
            window.location.href = '/entities/accounts';
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account. Please try again.");
        }
    }

    async function updateAcc() {
        try {

            await createAccount(name, organization, description);
            // await createAccount(accountName);
            // if (!response.ok) {
            //     throw new Error(`Failed to delete account: ${response.statusText}`);
            // }

            // Redirect on successful deletion
            window.location.href = '/entities/accounts/'+name;
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account. Please try again.");
        }
    }
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
                <a href="/entities/accounts"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">Accounts</a>
            </div>
            <div class="flex items-center">
                <svg class="h-full w-6 shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none"
                     fill="currentColor" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"/>
                </svg>
                <a href="/entities/accounts/{ accountData.account.name}"
                   class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700"> {accountData.account.name} </a>
            </div>
        </li>
    </ol>
</nav>

<div class="divide-y divide-gray-900/10">
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
            <h2 class="text-base/7 font-semibold text-gray-900">Account {accountData.account?.name || 'n/a'}</h2>
            <p class="mt-1 text-sm/6 text-gray-600">All information relating to account root</p>
        </div>

        <form on:submit|preventDefault={updateAcc} class="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div class="px-4 py-6 sm:p-8">
                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="name" class="block text-sm/6 font-medium text-gray-900">Account Name</label>
                        <div class="mt-2">
                            <input type="text" id="name" bind:value={name} class="block w-full rounded-md border-gray-300 shadow-sm" required readonly>                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="organization" class="block text-sm/6 font-medium text-gray-900">Organization</label>
                        <div class="mt-2">
                            <input type="text" bind:value={organization} name="organization"
                                   id="organization" autocomplete="family-name"
                                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        </div>
                    </div>


                    <div class="col-span-full">
                        <label for="description" class="block text-sm/6 font-medium text-gray-900">Description</label>
                        <div class="mt-2">
                            <input type="text" bind:value={description} name="description"
                                   id="description" autocomplete="street-address"
                                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        </div>
                    </div>


                    <div class="sm:col-span-6">
                        <label class="block text-sm/6 font-medium text-gray-900">Associations</label>
                        {#each associations as assoc, index (index)}
                            <div class="border p-4 mb-4 rounded-lg">
                                <div class="mb-2">
                                    <label class="block text-sm font-medium text-gray-700">Account</label>
                                    <input type="text" bind:value={assoc.account}
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                </div>
                                <div class="mb-2">
                                    <label class="block text-sm font-medium text-gray-700">Cluster</label>
                                    <input type="text" bind:value={assoc.cluster}
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                </div>
                                <div class="mb-2">
                                    <label class="block text-sm font-medium text-gray-700">User</label>
                                    <input type="text" bind:value={assoc.user}
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                </div>
                                <div class="mb-2">
                                    <label class="block text-sm font-medium text-gray-700">Partition</label>
                                    <input type="text" bind:value={assoc.partition}
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                </div>
                                <button type="button" on:click={() => removeAssociation(index)}
                                        class="mt-2 text-red-600 hover:text-red-800">
                                    Remove Association
                                </button>
                            </div>
                        {/each}
                        <button type="button" on:click={addAssociation}
                                class="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Add Association
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button"
                        on:click={deleteAcc}
                        class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Delete Account
                </button>
                <button type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Update
                </button>
            </div>
        </form>
    </div>

</div>
