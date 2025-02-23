<script lang="ts">
    // Example node data
    export let node = {
        architecture: "x86_64",
        burstbuffer_network_address: "",
        boards: 1,
        boot_time: {
            set: true,
            infinite: false,
            number: 1739928984
        },
        cluster_name: "",
        cores: 1,
        specialized_cores: 0,
        cpu_binding: 0,
        cpu_load: 176,
        free_mem: {
            set: true,
            infinite: false,
            number: 3319
        },
        cpus: 4,
        effective_cpus: 4,
        specialized_cpus: "",
        energy: {
            average_watts: 0,
            base_consumed_energy: 0,
            consumed_energy: 0,
            current_watts: {
                set: true,
                infinite: false,
                number: 0
            },
            previous_consumed_energy: 0,
            last_collected: 0
        },
        external_sensors: {
            consumed_energy: {
                set: false,
                infinite: false,
                number: 0
            },
            temperature: {
                set: false,
                infinite: false,
                number: 0
            },
            energy_update_time: 0,
            current_watts: 0
        },
        extra: "",
        power: {
            maximum_watts: {
                set: false,
                infinite: false,
                number: 0
            },
            current_watts: 0,
            total_energy: 0,
            new_maximum_watts: 0,
            peak_watts: 0,
            lowest_watts: 0,
            new_job_time: {
                set: true,
                infinite: false,
                number: 0
            },
            state: 0,
            time_start_day: 0
        },
        features: [],
        active_features: [],
        gres: "",
        gres_drained: "N/A",
        gres_used: "",
        instance_id: "",
        instance_type: "",
        last_busy: {
            set: true,
            infinite: false,
            number: 1740265158
        },
        mcs_label: "",
        specialized_memory: 0,
        name: "smn01",
        next_state_after_reboot: [
            "INVALID"
        ],
        address: "smn01",
        hostname: "smn01",
        state: [
            "IDLE"
        ],
        operating_system: "Linux 6.8.0-49-generic #49-Ubuntu SMP PREEMPT_DYNAMIC Mon Nov  4 02:06:24 UTC 2024",
        owner: "",
        partitions: [
            "LocalQ"
        ],
        port: 6818,
        real_memory: 3195,
        comment: "",
        reason: "",
        reason_changed_at: {
            set: true,
            infinite: false,
            number: 0
        },
        reason_set_by_user: "",
        resume_after: {
            set: true,
            infinite: false,
            number: 0
        },
        reservation: "",
        alloc_memory: 0,
        alloc_cpus: 0,
        alloc_idle_cpus: 4,
        tres_used: "",
        tres_weighted: 0.0,
        slurmd_start_time: {
            set: true,
            infinite: false,
            number: 1739929225
        },
        sockets: 4,
        threads: 1,
        temporary_disk: 0,
        weight: 1,
        tres: "cpu=4,mem=3195M,billing=4",
        version: "23.11.4"
    };

    // Utility function to format timestamps (assumes seconds since epoch)
    function formatTimestamp(timestamp: number) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    }
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
    <div class="max-w-6xl w-full">
        <h1 class="text-3xl font-bold text-center mb-8">Node Information</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- General Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">General Info</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li><strong>Name:</strong> {node.name}</li>
                        <li><strong>Architecture:</strong> {node.architecture}</li>
                        <li><strong>Hostname:</strong> {node.hostname}</li>
                        <li><strong>Address:</strong> {node.address}</li>
                        <li><strong>Operating System:</strong> {node.operating_system}</li>
                        <li><strong>State:</strong> {node.state.join(', ')}</li>
                        <li><strong>Partitions:</strong> {node.partitions.join(', ')}</li>
                        <li><strong>Version:</strong> {node.version}</li>
                    </ul>
                </div>
            </div>

            <!-- Hardware & CPU Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Hardware &amp; CPU Info</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li><strong>Cores:</strong> {node.cores}</li>
                        <li><strong>CPUs:</strong> {node.cpus}</li>
                        <li><strong>Effective CPUs:</strong> {node.effective_cpus}</li>
                        <li><strong>CPU Load:</strong> {node.cpu_load}</li>
                        <li><strong>Boards:</strong> {node.boards}</li>
                        <li><strong>Sockets:</strong> {node.sockets}</li>
                        <li><strong>Threads:</strong> {node.threads}</li>
                    </ul>
                </div>
            </div>

            <!-- Memory Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Memory Info</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li><strong>Real Memory:</strong> {node.real_memory} MB</li>
                        <li>
                            <strong>Free Memory:</strong>
                            {node.free_mem.set ? `${node.free_mem.number} MB` : "Not Set"}
                        </li>
                        <li><strong>Allocated Memory:</strong> {node.alloc_memory} MB</li>
                    </ul>
                </div>
            </div>

            <!-- Energy & Power Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Energy &amp; Power</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li><strong>Average Watts:</strong> {node.energy.average_watts}</li>
                        <li><strong>Consumed Energy:</strong> {node.energy.consumed_energy}</li>
                        <li>
                            <strong>Current Watts (Energy):</strong>
                            {node.energy.current_watts.set ? node.energy.current_watts.number : "Not Set"}
                        </li>
                        <li><strong>Current Watts (Power):</strong> {node.power.current_watts}</li>
                        <li><strong>Total Energy:</strong> {node.power.total_energy}</li>
                    </ul>
                </div>
            </div>

            <!-- Timestamps Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Timestamps</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li>
                            <strong>Boot Time:</strong>
                            {node.boot_time.set ? formatTimestamp(node.boot_time.number) : "Not Set"}
                        </li>
                        <li>
                            <strong>Last Busy:</strong>
                            {node.last_busy.set ? formatTimestamp(node.last_busy.number) : "Not Set"}
                        </li>
                        <li>
                            <strong>SLURM Start Time:</strong>
                            {node.slurmd_start_time.set ? formatTimestamp(node.slurmd_start_time.number) : "Not Set"}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Other Info Card -->
            <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-xl font-semibold">Other Info</h2>
                </div>
                <div class="px-4 py-5 sm:p-6">
                    <ul class="list-disc list-inside">
                        <li><strong>CPU Binding:</strong> {node.cpu_binding}</li>
                        <li><strong>Extra:</strong> {node.extra || "N/A"}</li>
                        <li><strong>GRES Drained:</strong> {node.gres_drained}</li>
                        <li><strong>GRES:</strong> {node.gres}</li>
                        <li><strong>TRES:</strong> {node.tres}</li>
                        <li><strong>Weight:</strong> {node.weight}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>