import { IActivity } from "./activity.model";
import { ICoordinator } from "./coordinator.model";

export interface IStore {
    activeUserId: number;
    coordinators: ICoordinator[];
    activities: IActivity[];
}