import { HttpClient } from "./utils/httpClient";

import { AuthenticationService, RequestService } from "./service";

import { CoreServicesInterface } from "./utils/coreServices";

import { ProductApi, TransactionApi } from "./api";

export class AlaxSdk {
    public transactionApi;
    public productApi;

    constructor(
        apiKey: string
    ) {
        const httpClient = new HttpClient();
        const authenticationService = new AuthenticationService(apiKey);
        const requestService = new RequestService(httpClient, authenticationService);

        const coreServices: CoreServicesInterface = {
            requestService,
            authenticationService
        }

        this.transactionApi = new TransactionApi(coreServices);
        this.productApi = new ProductApi(coreServices);
    }
}