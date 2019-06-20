import GLOBAL_CONFIGS from "../config";
import { openCenteredPopup } from "../utils/windowPopup";

interface AuthenticationServiceInterface {
    getApiKey: () => string;
    getAuthToken: () => string;
    storeAuthToken: (token: string) => void;
    attempAuthen: () => Promise<string|Error>;
}

class AuthenticationService implements AuthenticationServiceInterface {
    private _apiKey;
    private _authToken;

    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    getApiKey(): string {
        return this._apiKey;
    }

    getAuthToken(): string {
        return this._authToken ? `Bearer ${this._authToken}` : "";
    }

    storeAuthToken = (token: string) => {
        this._authToken = token;
    }

    attempAuthen = (): Promise<string|Error> => {
        const windowRef = openCenteredPopup(GLOBAL_CONFIGS.ssoURL, "ALAX SSO", 480, 360);

        return new Promise((resolve, reject) => {
            window.addEventListener("message",  (message) => {
                if (message.data) {
                    resolve(message.data)
                }
                reject(new Error("Cannot retrieve auth token"))
            });
        }).then((token: string) => {
            this.storeAuthToken(token);
            windowRef.close();
            return token;
        })
    }
}

export {
    AuthenticationService,
    AuthenticationServiceInterface
}