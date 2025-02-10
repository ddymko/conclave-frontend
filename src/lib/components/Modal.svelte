<script lang="ts">
    import {onMount} from "svelte";

    export let isOpen: boolean = false;
    export let title: string = "Modal";
    export let content: string = ""

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            isOpen = false;
        }
    }

    // Add event listener when modal is opened
    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    });

</script>

{#if isOpen}

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!--
          Background backdrop, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>


        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <!--
                  Modal panel, show/hide based on modal state.

                  Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                  Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                -->
                <div class="relative transform overflow-hidden rounded-lg bg-white px-6 pt-6 pb-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-8"
                     on:click|stopPropagation>
                    <div>
                        <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                            <svg class="size-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                            <h3 class="text-base font-semibold text-gray-900" id="modal-title">{title}</h3>
                            <div class="mt-2 relative w-full max-w-2xl">
<!--                                <p class="text-sm text-gray-500">{content}</p>-->
                                <pre class="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-auto max-h-96 whitespace-pre-wrap break-words text-left">{content}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-6">
                        <button type="button" on:click={() => isOpen = false} class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
         on:click={() => isOpen = false}>
        <div class="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6" on:click|stopPropagation>
            <button on:click={() => isOpen = false} class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                ✕
            </button>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
            <pre class="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-auto max-h-96">{content}</pre>
        </div>
    </div>
{/if}