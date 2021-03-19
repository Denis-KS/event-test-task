import React from "react";
import styled from "styled-components";

interface IRadioInputProps {
    value: string | number;
    name: string;
    checked: boolean;
}

const Label = styled.label`
    font-size: 14px;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;
    line-height: 31px;
`;

const RadioButton = styled.input`
    margin: 2px 3px 0 0;
`;

export const RadioInput: React.FC<IRadioInputProps> = ({ value, children, name, checked }) => {
    return (
        <Label>
            <RadioButton 
                type="radio"
                value={value}
                defaultChecked={checked}
                name={name}
            />
            {children}
        </Label>
    );
}