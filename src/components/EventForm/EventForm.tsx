import React from "react";
import { useSelector } from "react-redux";
import { IFormConfig, useForm } from "../../hooks/useForm";
import { IEventForm } from "../../models/event.model";
import { getActiveUserId } from "../../store/selectors";
import { getEventFormConfig } from "./utils/eventFormConfig";
import { EventCoordinatorSection } from "./FormSections/EventCoordinatorSection";
import { EventDateSection } from "./FormSections/EventDateSection";
import { EventGeneralSection } from "./FormSections/EventGeneralSection";
import { serializeForm } from "./utils/eventFormFieldParsers";
import styled from "styled-components";
import { FlexBox } from "../styled/Box/FlexBox";
import { useHistory } from "react-router-dom";

const Submit = styled.button`
    text-transform: uppercase;
    background-color: #fb8e1f;
    border: none;
    border-radius: 3px;
    padding: 10px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f3a759;
    }
`;

export const EventForm: React.FC = () => {
    const activeUserId: number = useSelector(getActiveUserId);
    const history = useHistory();
    
    const formConfig: IFormConfig = getEventFormConfig(activeUserId);

    const submitForm = () => {
        console.log(serializeForm(formFields));
        history.push('/success-screen');
    };

    const { formFields, handleChange, handleSubmit } = useForm<IEventForm>(formConfig, submitForm);

    return (
        <form>
            <EventGeneralSection data={formFields} handleChange={handleChange} />
            <EventCoordinatorSection data={formFields} handleChange={handleChange} />
            <EventDateSection data={formFields} handleChange={handleChange} />
            <FlexBox justifyContent="center" padding="20px 0">
                <Submit type="submit" onClick={handleSubmit}>Publish Event</Submit>
            </FlexBox>
        </form>
    );
}
