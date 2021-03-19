import React, { useCallback } from "react";
import styled from "styled-components";
import { DayPeriod, IEventForm, UpdateEvent } from "../../../models/event.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { PostfixPrefix } from "../../styled/Span";
import { InlineInput } from "./InlineInput";
import { RadioGroup } from "./RadioGroup";
import { RadioInput } from "./RadioInput";

interface IDateInputProps {
    data: IEventForm;
    handleChange: UpdateEvent;
}
 
const TimeInput = styled(InlineInput)`
    margin: 0 10px 0 0;
    &&::-webkit-datetime-edit-ampm-field {
        display: none;
    }
`;

export const DateInput: React.FC<IDateInputProps> = ({ data, handleChange }) => {
    const { date, time, period } = data;

    const isChecked = useCallback((value: DayPeriod): boolean => period.value === value, [period]);

    return (
        <FlexBox alignItems="center">
            <InlineInput formField={date} onChange={handleChange} type="date" />
            <PostfixPrefix>at</PostfixPrefix>
            <TimeInput formField={time} onChange={handleChange} type="time" width="50px"/>
            <RadioGroup onChange={handleChange}>
                <RadioInput value="AM" name={period.name} checked={isChecked("AM")}>AM</RadioInput>
                <RadioInput value="PM" name={period.name} checked={isChecked("PM")}>PM</RadioInput>
            </RadioGroup>
        </FlexBox>
    );
}
