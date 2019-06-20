import { RequestMethods } from "../utils/httpClient";

import { CoreServicesInterface } from "../utils/coreServices";

export class TransactionApi {
    private coreServices: CoreServicesInterface;

    constructor(coreServices: CoreServicesInterface) {
        this.coreServices = coreServices;
    }

    public async getFee() {
        return this.coreServices.requestService.send(RequestMethods.GET, "/wallet/transfer-fee");
    }
}