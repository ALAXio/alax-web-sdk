"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = require("./utils/httpClient");
var service_1 = require("./service");
var api_1 = require("./api");
var AlaxSdk = /** @class */ (function () {
    function AlaxSdk(apiKey) {
        var httpClient = new httpClient_1.HttpClient();
        var authenticationService = new service_1.AuthenticationService(apiKey);
        var requestService = new service_1.RequestService(httpClient, authenticationService);
        var coreServices = {
            requestService: requestService,
            authenticationService: authenticationService
        };
        this.transactionApi = new api_1.TransactionApi(coreServices);
        this.productApi = new api_1.ProductApi(coreServices);
    }
    return AlaxSdk;
}());
exports.AlaxSdk = AlaxSdk;
