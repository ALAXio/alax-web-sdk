import { CoreServicesInterface } from "../utils/coreServices";
export declare class ProductApi {
    private coreServices;
    constructor(coreServices: CoreServicesInterface);
    purchaseInAppItem(amount: any, fee: any): Promise<unknown>;
}
