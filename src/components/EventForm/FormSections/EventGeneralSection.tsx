import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IActivity } from "../../../models/activity.model";
import { IEventForm, UpdateEvent } from "../../../models/event.model";
import { getActivitiesWithDefault } from "../../../store/selectors";
import { getActivitiesThunk } from "../../../store/thunks";
import { DropdownInput } from "../FormInputs/DropdownInput";
import { FormField } from "../FormInputs/FormField";
import { InlineInput } from "../FormInputs/InlineInput";
import { MultilineInput } from "../FormInputs/MultilineInput";
import { NumericInput } from "../FormInputs/NumericInput";
import { PaymentInput } from "../FormInputs/PaymentInput";
import { FormSection } from "./FormSection";

interface IEventGeneralSectionProps {
    data: IEventForm;
    handleChange: UpdateEvent;
}

export const EventGeneralSection: React.FC<IEventGeneralSectionProps> = ({ data, handleChange }) => {
    const activities: IActivity[] = useSelector(getActivitiesWithDefault);
    const { title, description, category_id, reward, paid_event, event_fee } = data; 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivitiesThunk());
    }, [dispatch]);

    return (
        <FormSection title="About">
            <FormField title="Title" required validationError={title.error}>
                <InlineInput
                    formField={title} 
                    onChange={handleChange} 
                    placeholder="Make it short and clear"
                />
            </FormField>
            <FormField title="Description" required validationError={description.error}>
                <MultilineInput
                    formField={description} 
                    onChange={handleChange} 
                    placeholder="Write about your event, be creative" 
                    charLimit={140} 
                />
            </FormField>
            <FormField title="Category">
                <DropdownInput
                    formField={category_id}
                    options={activities}
                    onSelect={handleChange}
                />
            </FormField>
            <FormField title="Payment" validationError={event_fee.error}>
                <PaymentInput 
                    isPaidEvent={paid_event}
                    feeValue={event_fee}
                    onChange={handleChange}
                />
            </FormField>
            <FormField title="Reward">
                <NumericInput 
                    formField={reward}
                    onChange={handleChange}
                    textAfter="reward points for attendance"
                />
            </FormField>
        </FormSection>
    
    );
}
