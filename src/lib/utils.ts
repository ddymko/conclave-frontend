// src/lib/utils.ts

export function convertJobState(state: number): string {
    switch (state) {
        case 0:
            return "Pending";
        case 1:
            return "Running";
        case 3:
            return 'Completed';
        case 4:
            return 'Cancelled';
        case 5:
            return 'Failed';
        case 6:
            return 'Timeout';
        default:
            return 'Unknown';
    }
}