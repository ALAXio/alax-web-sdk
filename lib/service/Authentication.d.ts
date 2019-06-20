interface AuthenticationServiceInterface {
    getApiKey: () => string;
    getAuthToken: () => string;
    storeAuthToken: (token: string) => void;
    attempAuthen: () => Promise<string | Error>;
}
declare class AuthenticationService implements AuthenticationServiceInterface {
    private _apiKey;
    private _authToken;
    constructor(apiKey: string);
    getApiKey(): string;
    getAuthToken(): string;
    storeAuthToken: (token: string) => void;
    attempAuthen: () => Promise<string | Error>;
}
export { AuthenticationService, AuthenticationServiceInterface };
