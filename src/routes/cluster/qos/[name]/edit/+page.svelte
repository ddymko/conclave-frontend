<script lang="ts">
    import { updateQos as apiUpdateQos } from "$lib/api";
    import { type QoS } from "$lib/gen/conclave/qos/v1/qos_pb";
    import { goto } from "\$app/navigation";

    export let data;
    const qosData = data?.qosData;
    let qos = qosData?.qos?.[0] || {};
    console.log(qos);

    // ----------------------------------------------------------------------------
    // OVERVIEW FIELDS
    // ----------------------------------------------------------------------------
    let description = qos.description || "";
    let name = qos.name || "";
    let flags = (qos.flags && qos.flags.join(", ")) || "";

    // ----------------------------------------------------------------------------
    // PRIORITY
    // ----------------------------------------------------------------------------
    let priorityNumber = qos.priority?.number || "";
    let prioritySet = qos.priority?.set || false;
    let priorityInfinite = qos.priority?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // BASIC LIMITS
    // ----------------------------------------------------------------------------
    let graceTime = qos.limits?.graceTime || "";

    let maxActiveJobsAccruingNumber = qos.limits?.max?.activeJobs?.accruing?.number || "";
    let maxActiveJobsAccruingSet = qos.limits?.max?.activeJobs?.accruing?.set || false;
    let maxActiveJobsAccruingInfinite = qos.limits?.max?.activeJobs?.accruing?.infinite ?? false;

    let maxActiveJobsCountNumber = qos.limits?.max?.activeJobs?.count?.number || "";
    let maxActiveJobsCountSet = qos.limits?.max?.activeJobs?.count?.set || false;
    let maxActiveJobsCountInfinite = qos.limits?.max?.activeJobs?.count?.infinite ?? false;

    let factorNumber = qos.limits?.factor?.number || "";
    let factorSet = qos.limits?.factor?.set || false;
    let factorInfinite = qos.limits?.factor?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // PREEMPT FIELDS
    // ----------------------------------------------------------------------------
    // NEW: "Enable Preempt" toggle. If there's an existing `qos.preempt`, default to `true`.
    let preemptEnabled = qos.preempt !== undefined;

    let preemptList = (qos.preempt?.list && qos.preempt.list.join(", ")) || "";
    let preemptMode = qos.preempt?.mode ? qos.preempt.mode[0] : "DISABLED";
    let exemptTimeNumber = qos.preempt?.exemptTime?.number || "";
    let exemptTimeSet = qos.preempt?.exemptTime?.set || false;
    let exemptTimeInfinite = qos.preempt?.exemptTime?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // USAGE
    // ----------------------------------------------------------------------------
    let usageFactorNumber = qos.usageFactor?.number || "";
    let usageFactorSet = qos.usageFactor?.set || false;
    let usageFactorInfinite = qos.usageFactor?.infinite ?? false;

    let usageThresholdNumber = qos.usageThreshold?.number || "";
    let usageThresholdSet = qos.usageThreshold?.set || false;
    let usageThresholdInfinite = qos.usageThreshold?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // JOBS LIMITS
    // ----------------------------------------------------------------------------
    let jobsActivePerAccountNumber = qos.limits?.max?.jobs?.activeJobs?.per?.account?.number || "";
    let jobsActivePerAccountSet = qos.limits?.max?.jobs?.activeJobs?.per?.account?.set || false;
    let jobsActivePerAccountInfinite = qos.limits?.max?.jobs?.activeJobs?.per?.account?.infinite ?? false;

    let jobsActivePerUserNumber = qos.limits?.max?.jobs?.activeJobs?.per?.user?.number || "";
    let jobsActivePerUserSet = qos.limits?.max?.jobs?.activeJobs?.per?.user?.set || false;
    let jobsActivePerUserInfinite = qos.limits?.max?.jobs?.activeJobs?.per?.user?.infinite ?? false;

    let jobsPerAccountNumber = qos.limits?.max?.jobs?.per?.account?.number || "";
    let jobsPerAccountSet = qos.limits?.max?.jobs?.per?.account?.set || false;
    let jobsPerAccountInfinite = qos.limits?.max?.jobs?.per?.account?.infinite ?? false;

    let jobsPerUserNumber = qos.limits?.max?.jobs?.per?.user?.number || "";
    let jobsPerUserSet = qos.limits?.max?.jobs?.per?.user?.set || false;
    let jobsPerUserInfinite = qos.limits?.max?.jobs?.per?.user?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // ACCRUING LIMITS
    // ----------------------------------------------------------------------------
    let accruingPerAccountNumber = qos.limits?.accruing?.per?.account?.number || "";
    let accruingPerAccountSet = qos.limits?.accruing?.per?.account?.set || false;
    let accruingPerAccountInfinite = qos.limits?.accruing?.per?.account?.infinite ?? false;

    let accruingPerUserNumber = qos.limits?.accruing?.per?.user?.number || "";
    let accruingPerUserSet = qos.limits?.accruing?.per?.user?.set || false;
    let accruingPerUserInfinite = qos.limits?.accruing?.per?.user?.infinite ?? false;

    // ----------------------------------------------------------------------------
    // MIN LIMITS
    // ----------------------------------------------------------------------------
    let minPriorityThresholdNumber = qos.limits?.min?.priorityThreshold?.number || "";
    let minPriorityThresholdSet = qos.limits?.min?.priorityThreshold?.set || false;
    let minPriorityThresholdInfinite = qos.limits?.min?.priorityThreshold?.infinite ?? false;

    let minTresPerJobCount = "";
    if (qos.limits?.min?.tres?.per?.job && qos.limits.min.tres.per.job.length > 0) {
        minTresPerJobCount = qos.limits.min.tres.per.job[0].toString();
    }

    // ----------------------------------------------------------------------------
    // UPDATE HANDLER
    // ----------------------------------------------------------------------------
    async function updateQosHandler() {
        const updatedQosObj = {
            $typeName: 'conclave.qos.v1.QoS',
            id: qos.id,
            description: description || '',
            name: name || '',
            flags: flags.split(',').map(f => f.trim()).filter(Boolean),

            // Priority => SetInt
            priority: {
                $typeName: 'conclave.qos.v1.SetInt',
                number: BigInt(parseInt(priorityNumber) || 0),
                set: prioritySet,
                infinite: priorityInfinite
            },

            // L I M I T S
            limits: {
                $typeName: 'conclave.qos.v1.Limits',
                graceTime: parseInt(graceTime) || 0,
                max: {
                    $typeName: 'conclave.qos.v1.MaxLimits',
                    activeJobs: {
                        $typeName: 'conclave.qos.v1.ActiveJobs',
                        accruing: {
                            $typeName: 'conclave.qos.v1.SetInt',
                            number: BigInt(parseInt(maxActiveJobsAccruingNumber) || 0),
                            set: maxActiveJobsAccruingSet,
                            infinite: maxActiveJobsAccruingInfinite
                        },
                        count: {
                            $typeName: 'conclave.qos.v1.SetInt',
                            number: BigInt(parseInt(maxActiveJobsCountNumber) || 0),
                            set: maxActiveJobsCountSet,
                            infinite: maxActiveJobsCountInfinite
                        }
                    },
                    // factor => SetDouble
                    factor: {
                        $typeName: 'conclave.qos.v1.SetDouble',
                        number: parseFloat(factorNumber) || 0,
                        set: factorSet,
                        infinite: factorInfinite
                    },
                    jobs: {
                        $typeName: 'conclave.qos.v1.Jobs',
                        activeJobs: {
                            $typeName: 'conclave.qos.v1.ActiveJobsPer',
                            per: {
                                $typeName: 'conclave.qos.v1.PerAccountUser',
                                account: {
                                    $typeName: 'conclave.qos.v1.SetInt',
                                    number: BigInt(parseInt(jobsActivePerAccountNumber) || 0),
                                    set: jobsActivePerAccountSet,
                                    infinite: jobsActivePerAccountInfinite
                                },
                                user: {
                                    $typeName: 'conclave.qos.v1.SetInt',
                                    number: BigInt(parseInt(jobsActivePerUserNumber) || 0),
                                    set: jobsActivePerUserSet,
                                    infinite: jobsActivePerUserInfinite
                                }
                            }
                        },
                        per: {
                            $typeName: 'conclave.qos.v1.PerJobs',
                            account: {
                                $typeName: 'conclave.qos.v1.SetInt',
                                number: BigInt(parseInt(jobsPerAccountNumber) || 0),
                                set: jobsPerAccountSet,
                                infinite: jobsPerAccountInfinite
                            },
                            user: {
                                $typeName: 'conclave.qos.v1.SetInt',
                                number: BigInt(parseInt(jobsPerUserNumber) || 0),
                                set: jobsPerUserSet,
                                infinite: jobsPerUserInfinite
                            }
                        }
                    },
                    accruing: {
                        $typeName: 'conclave.qos.v1.Accruing',
                        per: {
                            $typeName: 'conclave.qos.v1.PerAccountUser',
                            account: {
                                $typeName: 'conclave.qos.v1.SetInt',
                                number: BigInt(parseInt(accruingPerAccountNumber) || 0),
                                set: accruingPerAccountSet,
                                infinite: accruingPerAccountInfinite
                            },
                            user: {
                                $typeName: 'conclave.qos.v1.SetInt',
                                number: BigInt(parseInt(accruingPerUserNumber) || 0),
                                set: accruingPerUserSet,
                                infinite: accruingPerUserInfinite
                            }
                        }
                    }
                },
                min: {
                    $typeName: 'conclave.qos.v1.MinLimits',
                    priorityThreshold: {
                        $typeName: 'conclave.qos.v1.SetInt',
                        number: BigInt(parseInt(minPriorityThresholdNumber) || 0),
                        set: minPriorityThresholdSet,
                        infinite: minPriorityThresholdInfinite
                    },
                    tres: {
                        $typeName: 'conclave.qos.v1.TresMin',
                        job: [BigInt(parseInt(minTresPerJobCount) || 0)]
                    }
                }
            },

            // Usage Factor
            usageFactor: {
                $typeName: 'conclave.qos.v1.SetDouble',
                number: parseFloat(usageFactorNumber) || 0,
                set: usageFactorSet,
                infinite: usageFactorInfinite
            },

            // Usage Threshold
            usageThreshold: {
                $typeName: 'conclave.qos.v1.SetDouble',
                number: parseFloat(usageThresholdNumber) || 0,
                set: usageThresholdSet,
                infinite: usageThresholdInfinite
            }
        };

        // ------------------------------------------------------------------------
        // Include "preempt" only if preemptEnabled is true.
        // If it's disabled, we do NOT send it at all.
        // ------------------------------------------------------------------------
        if (preemptEnabled) {
            updatedQosObj.preempt = {
                $typeName: 'conclave.qos.v1.Preempt',
                list: preemptList.split(',').map(s => s.trim()).filter(Boolean),
                mode: [preemptMode],
                exemptTime: {
                    $typeName: 'conclave.qos.v1.SetInt',
                    number: BigInt(parseInt(exemptTimeNumber) || 0),
                    set: exemptTimeSet,
                    infinite: exemptTimeInfinite
                }
            };
        } else {
            // If you prefer to explicitly remove it just to be safe:
            delete updatedQosObj.preempt;
        }

        // Convert the plain object into a properly typed Protobuf message
        const typedQosMessage: QoS = updatedQosObj as QoS;

        try {
            const response = await apiUpdateQos(typedQosMessage);
            console.log("QoS updated successfully:", response);
            alert("QoS updated successfully!");
            goto("/cluster/qos");
        } catch (error) {
            console.error("Error updating QoS:", error);
            alert("Failed to update QoS. Please try again.");
        }
    }
</script>

<!--
    BREADCRUMB NAVIGATION - (same as your original code)
-->
<nav class="flex border-b border-gray-200 bg-white mb-8" aria-label="Breadcrumb">
    <!-- ... -->
</nav>

<!--
    EDIT FORM
-->
<div class="divide-y divide-gray-900/10">
    <div class="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold text-gray-900">Edit QoS</h2>
            <p class="mt-1 text-sm text-gray-600">
                Update the QoS details below
            </p>
        </div>

        <form
                on:submit|preventDefault={updateQosHandler}
                class="bg-white ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
            <div class="px-4 py-6 sm:p-8">
                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <!-- 1) OVERVIEW SECTION -->
                    <div class="sm:col-span-6">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Overview</h3>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input
                                id="name"
                                type="text"
                                bind:value={name}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>
                    <div class="sm:col-span-3">
                        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                        <input
                                id="description"
                                type="text"
                                bind:value={description}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>
                    <div class="sm:col-span-3">
                        <label for="flags" class="block text-sm font-medium text-gray-700">Flags (comma-separated)</label>
                        <input
                                id="flags"
                                type="text"
                                bind:value={flags}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>

                    <!-- 2) PRIORITY SECTION -->
                    <div class="sm:col-span-3">
                        <label for="priority" class="block text-sm font-medium text-gray-700">Priority</label>
                        <input
                                id="priority"
                                type="number"
                                inputmode="numeric"
                                bind:value={priorityNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={prioritySet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={priorityInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- 3) BASIC LIMITS SECTION -->
                    <div class="sm:col-span-6 mt-8">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Basic Limits</h3>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="graceTime" class="block text-sm font-medium text-gray-700">Grace Time</label>
                        <input
                                id="graceTime"
                                type="number"
                                inputmode="numeric"
                                bind:value={graceTime}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>

                    <!-- Max Active Jobs - Accruing -->
                    <div class="sm:col-span-3">
                        <label
                                for="maxActiveJobsAccruingNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Max Active Jobs - Accruing
                        </label>
                        <input
                                id="maxActiveJobsAccruingNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={maxActiveJobsAccruingNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={maxActiveJobsAccruingSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={maxActiveJobsAccruingInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- Max Active Jobs - Count -->
                    <div class="sm:col-span-3">
                        <label
                                for="maxActiveJobsCountNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Max Active Jobs - Count
                        </label>
                        <input
                                id="maxActiveJobsCountNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={maxActiveJobsCountNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={maxActiveJobsCountSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={maxActiveJobsCountInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- Factor -->
                    <div class="sm:col-span-3">
                        <label for="factorNumber" class="block text-sm font-medium text-gray-700"
                        >Factor</label
                        >
                        <input
                                id="factorNumber"
                                type="number"
                                step="0.1"
                                inputmode="numeric"
                                bind:value={factorNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={factorSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={factorInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- 4) PREEMPT SECTION with ENABLE/DISABLE -->
                    <div class="sm:col-span-6 mt-8 flex items-center">
                        <h3 class="text-lg font-medium leading-6 text-gray-900 flex-1">Preempt</h3>
                        <!-- New Toggle -->
                        <label class="inline-flex items-center ml-4">
                            <input
                                    id="enablePreempt"
                                    type="checkbox"
                                    bind:checked={preemptEnabled}
                                    class="form-checkbox"
                            />
                            <span class="ml-2 text-sm font-semibold">Enable Preempt</span>
                        </label>
                    </div>

                    <!-- Only show these fields if preemptEnabled is true -->
                    {#if preemptEnabled}
                        <div class="sm:col-span-3">
                            <label
                                    for="preemptList"
                                    class="block text-sm font-medium text-gray-700"
                            >
                                Preempt List (comma-separated)
                            </label>
                            <input
                                    id="preemptList"
                                    type="text"
                                    bind:value={preemptList}
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>

                        <div class="sm:col-span-3">
                            <label for="preemptMode" class="block text-sm font-medium text-gray-700"
                            >Preempt Mode</label
                            >
                            <select
                                    id="preemptMode"
                                    bind:value={preemptMode}
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            >
                                <option value="DISABLED">DISABLED</option>
                                <option value="CANCELLED">CANCELLED</option>
                                <option value="SUSPENDED">SUSPENDED</option>
                                <option value="RESUME">RESUME</option>
                            </select>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                    for="exemptTimeNumber"
                                    class="block text-sm font-medium text-gray-700"
                            >
                                Exempt Time
                            </label>
                            <input
                                    id="exemptTimeNumber"
                                    type="number"
                                    inputmode="numeric"
                                    bind:value={exemptTimeNumber}
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            <div class="mt-2">
                                <label class="inline-flex items-center">
                                    <input
                                            type="checkbox"
                                            bind:checked={exemptTimeSet}
                                            class="form-checkbox"
                                    />
                                    <span class="ml-2 text-sm">Set</span>
                                </label>
                                <label class="inline-flex items-center ml-4">
                                    <input
                                            type="checkbox"
                                            bind:checked={exemptTimeInfinite}
                                            class="form-checkbox"
                                    />
                                    <span class="ml-2 text-sm">Infinite</span>
                                </label>
                            </div>
                        </div>
                    {/if}

                    <!-- 5) USAGE SECTION -->
                    <div class="sm:col-span-6 mt-8">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Usage</h3>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="usageFactor" class="block text-sm font-medium text-gray-700"
                        >Usage Factor</label
                        >
                        <input
                                id="usageFactor"
                                type="number"
                                step="0.1"
                                inputmode="numeric"
                                bind:value={usageFactorNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={usageFactorSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={usageFactorInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label
                                for="usageThreshold"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Usage Threshold
                        </label>
                        <input
                                id="usageThreshold"
                                type="number"
                                step="0.1"
                                inputmode="numeric"
                                bind:value={usageThresholdNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={usageThresholdSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={usageThresholdInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- 6) JOBS LIMITS SECTION -->
                    <div class="sm:col-span-6 mt-8">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Jobs Limits</h3>
                    </div>
                    <!-- Active Jobs per Account -->
                    <div class="sm:col-span-3">
                        <label
                                for="jobsActivePerAccountNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Active Jobs per Account
                        </label>
                        <input
                                id="jobsActivePerAccountNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={jobsActivePerAccountNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsActivePerAccountSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsActivePerAccountInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <!-- Active Jobs per User -->
                    <div class="sm:col-span-3">
                        <label
                                for="jobsActivePerUserNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Active Jobs per User
                        </label>
                        <input
                                id="jobsActivePerUserNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={jobsActivePerUserNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsActivePerUserSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsActivePerUserInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <!-- Jobs per Account -->
                    <div class="sm:col-span-3">
                        <label
                                for="jobsPerAccountNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Jobs per Account
                        </label>
                        <input
                                id="jobsPerAccountNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={jobsPerAccountNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsPerAccountSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsPerAccountInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <!-- Jobs per User -->
                    <div class="sm:col-span-3">
                        <label
                                for="jobsPerUserNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Jobs per User
                        </label>
                        <input
                                id="jobsPerUserNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={jobsPerUserNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsPerUserSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={jobsPerUserInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- 7) ACCRUING LIMITS SECTION -->
                    <div class="sm:col-span-6 mt-8">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Accruing Limits</h3>
                    </div>
                    <div class="sm:col-span-3">
                        <label
                                for="accruingPerAccountNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Accruing per Account
                        </label>
                        <input
                                id="accruingPerAccountNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={accruingPerAccountNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={accruingPerAccountSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={accruingPerAccountInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label
                                for="accruingPerUserNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Accruing per User
                        </label>
                        <input
                                id="accruingPerUserNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={accruingPerUserNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={accruingPerUserSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={accruingPerUserInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>

                    <!-- 8) MIN LIMITS SECTION -->
                    <div class="sm:col-span-6 mt-8">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Min Limits</h3>
                    </div>
                    <div class="sm:col-span-3">
                        <label
                                for="minPriorityThresholdNumber"
                                class="block text-sm font-medium text-gray-700"
                        >
                            Priority Threshold
                        </label>
                        <input
                                id="minPriorityThresholdNumber"
                                type="number"
                                inputmode="numeric"
                                bind:value={minPriorityThresholdNumber}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input
                                        type="checkbox"
                                        bind:checked={minPriorityThresholdSet}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Set</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                                <input
                                        type="checkbox"
                                        bind:checked={minPriorityThresholdInfinite}
                                        class="form-checkbox"
                                />
                                <span class="ml-2 text-sm">Infinite</span>
                            </label>
                        </div>
                    </div>
                    <div class="sm:col-span-3">
                        <label
                                for="minTresPerJobCount"
                                class="block text-sm font-medium text-gray-700"
                        >
                            TRES per Job Count
                        </label>
                        <input
                                id="minTresPerJobCount"
                                type="number"
                                inputmode="numeric"
                                bind:value={minTresPerJobCount}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <div
                    class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
            >
                <button
                        type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                >
                    Update QoS
                </button>
            </div>
        </form>
    </div>
</div>