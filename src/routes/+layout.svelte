<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>
<!--
  This example requires updating your template:

  <html class="h-full bg-white">
  <body class="h-full">
-->

<div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <!-- Off-canvas menu backdrop -->
        <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

        <div class="fixed inset-0 flex">
            <!-- Off-canvas menu panel -->
            <div class="relative mr-16 flex w-full max-w-xs flex-1">
                <!-- Close button -->
                <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5">
                        <span class="sr-only">Close sidebar</span>
                        <svg
                                class="size-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Sidebar -->
                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div class="flex h-16 shrink-0 items-center">
                        <img
                                class="h-8 w-auto"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                        >
                    </div>
                    <nav class="flex flex-1 flex-col">
                        <ul role="list" class="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" class="-mx-2 space-y-1">
                                    <!-- Example Top-level Item for Mobile -->
                                    <li>
                                        <a
                                                href="/"
                                                class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm/6 font-semibold text-white"
                                        >
                                            <svg
                                                    class="size-6 shrink-0"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
                                                />
                                            </svg>
                                            Cluster Overview
                                        </a>
                                    </li>
                                    <!-- Add additional mobile items here as needed -->
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div class="flex h-16 shrink-0 items-center">
                <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                >
            </div>
            <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <!-- 1. Cluster Overview & Monitoring -->
                    <li>
                        <a
                                href="/"
                                class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm/6 font-semibold text-white"
                        >
                            <svg
                                    class="size-6 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
                                />
                            </svg>
                            Cluster Overview
                        </a>
                        <!-- Nested subsections for Cluster Overview -->
                        <ul class="ml-4 mt-1 space-y-1">
                            <li>
                                <a
                                        href="/"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Cluster
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/nodes"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Node Management
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/qos"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    QOS Summary
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/tres"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    TRES Summary
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/partitions"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Partition Summary
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/components"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Components
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/cluster/scheduling"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Scheduling Insights
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- 2. Job Management & Insights -->
                    <li>
                        <a
                                href="#"
                                class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            <svg
                                    class="size-6 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                />
                            </svg>
                            Job Management
                        </a>
                        <!-- Nested subsections for Job Management -->
                        <ul class="ml-4 mt-1 space-y-1">
                            <li>
                                <a
                                        href="/jobs"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Jobs Dashboard
                                </a>
                            </li>
                    </li>

                    <!-- 3. User-Focused Features -->
                    <li>
                        <a
                                href="#"
                                class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            <svg
                                    class="size-6 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                            >
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                            </svg>
                            Entities
                        </a>
                        <!-- Nested subsections for User-Focused Features -->
                        <ul class="ml-4 mt-1 space-y-1">
                            <li>
                                <a
                                        href="/entities/accounts"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Accounts
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/entities/associations"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Associations
                                </a>
                            </li>
                            <li>
                                <a
                                        href="/entities/users"
                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Users
                                </a>
                            </li>
                        </ul>
                    </li>

<!--                    &lt;!&ndash; 4. Admin & Power User Tools &ndash;&gt;-->
<!--                    <li>-->
<!--                        <a-->
<!--                                href="#"-->
<!--                                class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"-->
<!--                        >-->
<!--                            <svg-->
<!--                                    class="size-6 shrink-0"-->
<!--                                    fill="none"-->
<!--                                    viewBox="0 0 24 24"-->
<!--                                    stroke-width="1.5"-->
<!--                                    stroke="currentColor"-->
<!--                                    aria-hidden="true"-->
<!--                            >-->
<!--                                <path-->
<!--                                        stroke-linecap="round"-->
<!--                                        stroke-linejoin="round"-->
<!--                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"-->
<!--                                />-->
<!--                            </svg>-->
<!--                            Power User Tools-->
<!--                        </a>-->
<!--                        &lt;!&ndash; Nested subsections for Admin & Power User Tools &ndash;&gt;-->
<!--                        <ul class="ml-4 mt-1 space-y-1">-->
<!--                            <li>-->
<!--                                <a-->
<!--                                        href="/admin/cluster-config"-->
<!--                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"-->
<!--                                >-->
<!--                                    Cluster Configuration-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                        href="/admin/fairshare"-->
<!--                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"-->
<!--                                >-->
<!--                                    Fairshare &amp; Accounting-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                        href="/admin/reporting"-->
<!--                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"-->
<!--                                >-->
<!--                                    Advanced Reporting &amp; Analytics-->
<!--                                </a>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <a-->
<!--                                        href="/power-user/scheduliong"-->
<!--                                        class="block rounded-md py-1 px-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"-->
<!--                                >-->
<!--                                    Job Priority &amp; Scheduling Insights-->
<!--                                </a>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->

<!--                    &lt;!&ndash; Profile Footer &ndash;&gt;-->
<!--                    <li class="-mx-6 mt-auto">-->
<!--                        <a-->
<!--                                href="#"-->
<!--                                class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"-->
<!--                        >-->
<!--                            <img-->
<!--                                    class="size-8 rounded-full bg-gray-800"-->
<!--                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
<!--                                    alt="User Profile"-->
<!--                            >-->
<!--                            <span class="sr-only">Your profile</span>-->
<!--                            <span aria-hidden="true">Tom Cook</span>-->
<!--                        </a>-->
<!--                    </li>-->
                </ul>
            </nav>
        </div>
    </div>

    <!-- Top navbar for mobile -->
    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden">
        <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg
                    class="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <div class="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
        <a href="#">
            <span class="sr-only">Your profile</span>
            <img
                    class="size-8 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Profile"
            >
        </a>
    </div>

    <!-- Main content area -->
    <main class="py-10 lg:pl-72">
        <div class="px-4 sm:px-6 lg:px-8">
            {@render children()}
        </div>
    </main>
</div>