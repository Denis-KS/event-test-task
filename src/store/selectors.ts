import { IDropdownGroup } from "../components/EventForm/FormInputs/GroupedDropdownInput";
import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { IStore } from "../models/store.model";
import { createSelector } from 'reselect';

export const getActiveUserId = ({ activeUserId }: IStore): number => activeUserId;
const getCoordinators = ({ coordinators }: IStore): ICoordinator[] => coordinators;
const getActivities = ({ activities }: IStore): IActivity[] => activities;

export const getActivitiesWithDefault = createSelector([getActivities], (activities: IActivity[]): IActivity[] => {
    const defaultOption: IActivity = { id: 'unselected', name: 'Select Category' };
    return [defaultOption, ...activities];
});

export const getGroupedCoordinators = createSelector(
    [getCoordinators, getActiveUserId],
    (coordinators: ICoordinator[], activeUserId: number): IDropdownGroup<ICredentials>[] =>
{   
    const groupForSelf: IDropdownGroup<ICredentials> = { name: "Me", options: [] };
    const groupForOthers: IDropdownGroup<ICredentials> = { name: "Others", options: [] };

    coordinators.forEach((coordinator: ICoordinator) => {
        const coordinatorWithFullName: ICredentials = {
            id: coordinator.id, 
            name: getCoordinatorFullName(coordinator, activeUserId)
        };

        if(coordinator.id === activeUserId) {
            groupForSelf.options.push(coordinatorWithFullName);
        } else {
            groupForOthers.options.push(coordinatorWithFullName);
        };
    });

    return [groupForSelf, groupForOthers];
});

function getCoordinatorFullName({ id, name, lastname }: ICoordinator, activeId: number): string {
    const prefix = id === activeId ? 'Me - ' : '';
    const fullName = `${name} ${lastname ?? ''}`;

    return `${prefix}${fullName}`.trim();
}
