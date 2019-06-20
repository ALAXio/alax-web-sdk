"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var windowPopup_1 = require("../utils/windowPopup");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(apiKey) {
        var _this = this;
        this.storeAuthToken = function (token) {
            _this._authToken = token;
        };
        this.attempAuthen = function () {
            var windowRef = windowPopup_1.openCenteredPopup(config_1.default.ssoURL, "ALAX SSO", 480, 360);
            //TODO centering pop up
            return new Promise(function (resolve, reject) {
                window.addEventListener("message", function (message) {
                    if (message.data) {
                        resolve(message.data);
                    }
                    reject(new Error("Cannot retrieve auth token"));
                });
            }).then(function (token) {
                _this.storeAuthToken(token);
                windowRef.close();
                return token;
            });
        };
        this._apiKey = apiKey;
    }
    AuthenticationService.prototype.getApiKey = function () {
        return this._apiKey;
    };
    AuthenticationService.prototype.getAuthToken = function () {
        return this._authToken ? "Bearer " + this._authToken : "";
    };
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
