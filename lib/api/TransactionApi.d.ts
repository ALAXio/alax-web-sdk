import { CoreServicesInterface } from "../utils/coreServices";
export declare class TransactionApi {
    private coreServices;
    constructor(coreServices: CoreServicesInterface);
    getFee(): Promise<unknown>;
}
