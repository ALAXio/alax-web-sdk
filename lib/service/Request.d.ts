import { HttpClientInterface, Method } from "../utils";
import { AuthenticationServiceInterface } from "./Authentication";
interface RequestServiceInterface {
    send<T>(method: Method, url: string, payload?: any, config?: any): Promise<T>;
}
declare class RequestService implements RequestServiceInterface {
    private _httpClient;
    private _authenticationService;
    constructor(httpClient: HttpClientInterface, authenticationService: AuthenticationServiceInterface);
    send(method: Method, url: string, payload?: any, config?: any): Promise<any>;
}
export { RequestServiceInterface, RequestService };
