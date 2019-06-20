import { HttpClientInterface, Method } from "../utils";

import { AuthenticationServiceInterface } from "./Authentication";

interface RequestServiceInterface {
    send<T>(method: Method, url: string, payload?, config?): Promise<T>;
}

class RequestService implements RequestServiceInterface {
    private _httpClient: HttpClientInterface;
    private _authenticationService: AuthenticationServiceInterface;

    constructor(httpClient: HttpClientInterface, authenticationService: AuthenticationServiceInterface) {
        this._httpClient = httpClient;
        this._authenticationService = authenticationService;
    }

    async send(method: Method, url: string, payload?, config?) {
        const request = this._httpClient[method].bind(this._httpClient, url, payload, config);
        try {
            return await request();
        } catch (error) {
            if (error.status === 401) {
                await this._authenticationService.attempAuthen();
                this._httpClient.setHeader("Authorization", this._authenticationService.getAuthToken())
                return await request();
            }
            throw error;
        }
    }
}

export {
    RequestServiceInterface,
    RequestService
}