"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = require("../utils/httpClient");
var ProductApi = /** @class */ (function () {
    function ProductApi(coreServices) {
        this.coreServices = coreServices;
    }
    ProductApi.prototype.purchaseInAppItem = function (amount, fee) {
        var apiKey = this.coreServices.authenticationService.getApiKey();
        var extraConfig = {
            headers: {
                "X-App-Key": apiKey,
            },
        };
        return this.coreServices.requestService.send(httpClient_1.RequestMethods.POST, "/product/purchase", { amount: amount, fee: fee }, extraConfig);
    };
    return ProductApi;
}());
exports.ProductApi = ProductApi;
