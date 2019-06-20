import { RequestServiceInterface, AuthenticationServiceInterface } from "../service";

export type CoreServicesInterface = {
    requestService: RequestServiceInterface,
    authenticationService: AuthenticationServiceInterface
}