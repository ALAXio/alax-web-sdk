import { AxiosError, Method } from "axios";
declare enum RequestMethods {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    DELETE = "delete"
}
interface HttpClientInterface {
    get<T>(url: string, params: any): Promise<T>;
    post<T>(url: string, payload: any, config: any): Promise<T>;
    setHeader(name: string, value: string): void;
}
declare type HttpClientConfig = {
    baseURL?: string;
    accept?: string;
    contentType?: string;
};
declare class HttpClient implements HttpClientInterface {
    private _httpEngine;
    constructor(config?: HttpClientConfig);
    get(url: string, params: any): any;
    post(url: string, payload: any, config: any): any;
    setHeader(name: string, value: string): void;
    sanitizeError(axiosError: AxiosError): void;
}
export { HttpClientConfig, HttpClientInterface, HttpClient, RequestMethods, Method };
