"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var config_1 = require("../config");
var RequestMethods;
(function (RequestMethods) {
    RequestMethods["GET"] = "get";
    RequestMethods["POST"] = "post";
    RequestMethods["PATCH"] = "patch";
    RequestMethods["DELETE"] = "delete";
})(RequestMethods || (RequestMethods = {}));
exports.RequestMethods = RequestMethods;
var HttpClient = /** @class */ (function () {
    function HttpClient(config) {
        if (config === void 0) { config = {
            baseURL: config_1.default.baseURL,
            accept: config_1.default.accept,
            contentType: config_1.default.contentType,
        }; }
        this._httpEngine = axios_1.default.create({
            baseURL: config.baseURL,
            headers: {
                Accept: config.accept,
                "Content-Type": config.contentType,
            }
        });
    }
    HttpClient.prototype.get = function (url, params) {
        return this._httpEngine.get(url, params)
            .then(function (res) { return res.data; })
            .catch(this.sanitizeError);
    };
    HttpClient.prototype.post = function (url, payload, config) {
        return this._httpEngine.post(url, JSON.stringify(payload), config)
            .catch(this.sanitizeError);
    };
    // patch(url: string) {
    //     return this._httpEngine.patch(url);
    // }
    // delete(url: string) {
    //     return this._httpEngine.delete(url);
    // }
    HttpClient.prototype.setHeader = function (name, value) {
        this._httpEngine.defaults.headers.common[name] = value;
    };
    HttpClient.prototype.sanitizeError = function (axiosError) {
        throw lodash_1.get(axiosError, "response.data.error", { message: "error.unidentified" });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
