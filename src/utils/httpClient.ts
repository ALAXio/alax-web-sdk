import axios, { AxiosError, Method } from "axios";
import { get } from "lodash";

import GLOBAL_CONFIGS from "../config";

enum RequestMethods {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    DELETE = "delete"
}

interface HttpClientInterface {
    get<T>(url: string, params): Promise<T>;
    post<T>(url: string, payload: any, config): Promise<T>;
    // patch<T>(url: string): Promise<T>;
    // delete<T>(url: string): Promise<T>;
    setHeader(name: string, value: string): void;
}

type HttpClientConfig = {
    baseURL?: string;
    accept?: string;
    contentType?: string;
}

class HttpClient implements HttpClientInterface {
    private _httpEngine;

    constructor(
        config: HttpClientConfig = {
            baseURL: GLOBAL_CONFIGS.baseURL,
            accept: GLOBAL_CONFIGS.accept,
            contentType: GLOBAL_CONFIGS.contentType,
        }
    ) {
        this._httpEngine = axios.create({
            baseURL: config.baseURL,
            headers: {
                Accept: config.accept,
                "Content-Type": config.contentType,
            }
        })
    }

    get(url: string, params) {
        return this._httpEngine.get(url, params)
            .then(res => res.data)
            .catch(this.sanitizeError)
    }

    post(url: string, payload: any, config) {
        return this._httpEngine.post(url, JSON.stringify(payload), config)
            .catch(this.sanitizeError)
    }

    // patch(url: string) {
    //     return this._httpEngine.patch(url);
    // }

    // delete(url: string) {
    //     return this._httpEngine.delete(url);
    // }

    setHeader(name: string, value: string) {
        this._httpEngine.defaults.headers.common[name] = value;
    }

    sanitizeError(axiosError: AxiosError) {
        throw get(axiosError, "response.data.error", { message: "error.unidentified" });
    }
}

export {
    HttpClientConfig,
    HttpClientInterface,
    HttpClient,
    RequestMethods,
    Method
}