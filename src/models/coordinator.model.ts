import { ICredentials } from "./credentials.model";

export interface ICoordinator extends ICredentials {
    lastname: string;
    email: string;
}
