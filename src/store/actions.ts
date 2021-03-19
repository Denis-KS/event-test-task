import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";

export const SET_COORDINATORS_LIST = 'SET_COORDINATOR_LIST';
export const SET_ACTIVITIES_LIST = 'SET_ACTIVITIES_LIST';

export type Dispatch = (action: IBaseAction) => void;

export interface IBaseAction {
    type: string;
    payload: any;
}

interface ISetCoordinatorsListAction extends IBaseAction {
    payload: ICoordinator[];
}

interface ISetActivitiesListAction extends IBaseAction {
    payload: IActivity[];
}

export const setCoordinatorsListAction = (coordinators: ICoordinator[]): ISetCoordinatorsListAction => ({
    type: SET_COORDINATORS_LIST,
    payload: coordinators,
});

export const setActivitiesListAction = (activities: IActivity[]): ISetActivitiesListAction => ({
    type: SET_ACTIVITIES_LIST,
    payload: activities,
});
