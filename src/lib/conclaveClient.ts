import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';

import { SystemService } from '../gen/conclave/system/v1/system_pb';
import { JobsService } from '../gen/conclave/jobs/v1/job_service_pb';
import { ClusterService } from '../gen/conclave/cluster/v1/cluster_service_pb';
import { EntitiesService} from "../gen/conclave/entities/v1/entities_service_pb";


const transport = createConnectTransport({
    baseUrl: "http://localhost:8080"
});

export const mySystemService = createClient(SystemService, transport)
export const myJobsService = createClient(JobsService, transport);
export const myClusterService = createClient(ClusterService, transport);
export const myEntitiesService = createClient(EntitiesService, transport);