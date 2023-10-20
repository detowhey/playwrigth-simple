export interface QaseOptions {
    apiToken: string;
    basePath?: string;
    rootSuiteTitle?: string;
    projectCode: string;
    runId?: string;
    runPrefix?: string;
    logging?: boolean;
    runComplete?: boolean;
    environmentId?: number;
    uploadAttachments?: boolean;
}
