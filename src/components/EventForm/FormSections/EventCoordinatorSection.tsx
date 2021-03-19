import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICredentials } from "../../../models/credentials.model";
import { IEventForm, UpdateEvent } from "../../../models/event.model";
import { getGroupedCoordinators } from "../../../store/selectors";
import { getCoordinatorsThunk } from "../../../store/thunks";
import { FormField } from "../FormInputs/FormField";
import { GroupedDropdownInput, IDropdownGroup } from "../FormInputs/GroupedDropdownInput";
import { InlineInput } from "../FormInputs/InlineInput";
import { FormSection } from "./FormSection";

interface IEventCoordinatorSectionProps {
    data: IEventForm;
    handleChange: UpdateEvent;
}

export const EventCoordinatorSection: React.FC<IEventCoordinatorSectionProps> = ({ data, handleChange }) => {
    const coordinators: IDropdownGroup<ICredentials>[] = useSelector(getGroupedCoordinators);
    const { id, email } = data;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoordinatorsThunk());
    }, [dispatch]);

    return (
        <FormSection title="Coordinator">
            <FormField title="Responsible" required>
                <GroupedDropdownInput 
                    formField={id}
                    groups={coordinators}
                    onSelect={handleChange}
                />
            </FormField>
            <FormField title="Email" validationError={email.error}>
                <InlineInput
                    formField={email} 
                    onChange={handleChange} 
                    placeholder="Email"
                />
            </FormField>
        </FormSection>
    );
}