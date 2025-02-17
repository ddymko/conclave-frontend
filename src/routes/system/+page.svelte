<script lang="ts">
    import Modal from '$lib/components/Modal.svelte';

    let showModal1 = false;
    let config1 = `SlurmctldHost=slurm-master\nSlurmdPort=6818\nStateSaveLocation=/var/spool/slurm\nSlurmUser=slurm\nSlurmctldLogFile=/var/log/slurmctld.log`;



    import {onMount} from "svelte";
    import { mySystemService} from "$lib/conclaveClient";

    let nodes = [];
    let errorMessage = "";
    let loading = false;

    onMount(async () => {
        loading = true;
        try {

            const response = await mySystemService.listSlurmNodes({});
            nodes = response.nodes;
        } catch (err) {
            errorMessage = (err as Error).message;
        } finally {
            loading = false;
        }
    })

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
                <a href="/system" class="ml-4 text-sm font-medium text-gray-600 hover:text-gray-700">System</a>
            </div>
        </li>
    </ol>
</nav>


<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
        <div class="px-4 py-4 sm:px-5 bg-gray-100 text-gray-800 font-semibold">
            SlurmD
        </div>
        <div class="px-4 py-5 sm:p-6">
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0">
                    <dt class="text-sm font-medium text-gray-900">SystemD Path</dt>
                    <dd class="mt-1 text-sm text-gray-700 sm:col-span-3 sm:mt-0">/usr/lib/systemd/system/slurmd.service</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0">
                    <dt class="text-sm font-medium text-gray-900">SystemD Config</dt>
                    <dd class="mt-1 text-sm text-gray-700 sm:col-span-3 sm:mt-0">
                        <button on:click={() => showModal1 = true} class="rounded-sm bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            View
                        </button>
                    </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0">
                    <dt class="text-sm font-medium text-gray-900">Config Path</dt>
                    <dd class="mt-1 text-sm text-gray-700 sm:col-span-3 sm:mt-0">/etc/slurm/slurm.conf</dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:px-0">
                    <dt class="text-sm font-medium text-gray-900">Config</dt>
                    <dd class="mt-1 text-sm text-gray-700 sm:col-span-3 sm:mt-0">Backend Developer</dd>
                </div>
            </dl>
        </div>
    </div>

    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
        <div class="px-4 py-4 sm:px-5 bg-gray-100 text-gray-800 font-semibold">
            SlurmCTL
        </div>
        <div class="px-4 py-5 sm:p-6">
            <!-- Content goes here -->
        </div>
    </div>

    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
        <div class="px-4 py-4 sm:px-5 bg-gray-100 text-gray-800 font-semibold">
            SlurmDBD
        </div>
        <div class="px-4 py-5 sm:p-6">
            <!-- Content goes here -->
        </div>
    </div>

    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
        <div class="px-4 py-4 sm:px-5 bg-gray-100 text-gray-800 font-semibold">
            Nodes
        </div>
        <div class="px-4 py-5 sm:p-6">
            {#if loading}
                <p>Loading Slurm nodes...</p>
            {:else if errorMessage}
                <p style="color:red;">Error: {errorMessage}</p>
            {:else}
                <ul>
                    {#each nodes as node}
                        <li>
                            <strong>{node.hostname}</strong>
                            ({node.cpuCores} cores, {node.memoryBytes} bytes RAM, state: {node.state})
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</div>


<Modal bind:isOpen={showModal1} title="Slurm SystemD Configuration" content={config1} />
