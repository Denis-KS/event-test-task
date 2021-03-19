import React from "react";
import { IEventForm, UpdateEvent } from "../../../models/event.model";
import { DateInput } from "../FormInputs/DateInput";
import { FormField } from "../FormInputs/FormField";
import { NumericInput } from "../FormInputs/NumericInput";
import { FormSection } from "./FormSection";

interface IEventDateSectionProps {
    data: IEventForm;
    handleChange: UpdateEvent;
}

export const EventDateSection: React.FC<IEventDateSectionProps> = ({ data, handleChange }) => {
    const { duration } = data;

    return (
        <FormSection title="When">
            <FormField title="Starts on" required validationError={data.date.error || data.time.error}>
                <DateInput data={data} handleChange={handleChange} />
            </FormField>
            <FormField title="Duration">
                <NumericInput
                    formField={duration}
                    onChange={handleChange}
                    textAfter="hours" />                    
            </FormField>
        </FormSection>
    );
}