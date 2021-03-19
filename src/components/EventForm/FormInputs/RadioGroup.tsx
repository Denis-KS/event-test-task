import React from "react"
import { UpdateEvent } from "../../../models/event.model";
import { FlexBox } from "../../styled/Box/FlexBox"

interface IRadioGroupProps {
    onChange: UpdateEvent;
}

export const RadioGroup: React.FC<IRadioGroupProps> = ({ children, onChange }) => {
    return (
        <FlexBox onChange={onChange}>
            {children}
        </FlexBox>
    );
}