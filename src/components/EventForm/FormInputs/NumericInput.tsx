import React from "react";
import styled from "styled-components";
import { IFormField, UpdateEvent } from "../../../models/event.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { inputStyles } from "../../styled/mixins";
import { PostfixPrefix } from "../../styled/Span";

interface INumericInputProps {
    formField: IFormField<null | number>;
    onChange: UpdateEvent;
    placeholder?: string;
    textAfter?: string;
}

const Input = styled.input`
    ${inputStyles};
    width: 50px;
        
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button { 
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const NumericInput: React.FC<INumericInputProps> = ({ formField, onChange, placeholder = "Number", textAfter }) => {
    return ( 
        <FlexBox alignItems="center">
            <Input
                name={formField.name}
                type="number"
                value={formField.value || ''}
                placeholder={placeholder}
                onChange={onChange}
            />
            {textAfter && <PostfixPrefix>{textAfter}</PostfixPrefix>}
        </FlexBox>
    );
}
