import { RequestMethods } from "../utils/httpClient";
import { CoreServicesInterface } from "../utils/coreServices";

export class ProductApi {
    private coreServices: CoreServicesInterface;

    constructor(coreServices: CoreServicesInterface) {
        this.coreServices = coreServices;
    }

    public purchaseInAppItem(amount, fee) {
        const apiKey = this.coreServices.authenticationService.getApiKey();
        const extraConfig = {
            headers: {
                "X-App-Key": apiKey,
            },
        };

        return this.coreServices.requestService.send(RequestMethods.POST, "/product/purchase", { amount, fee }, extraConfig);
    }
}