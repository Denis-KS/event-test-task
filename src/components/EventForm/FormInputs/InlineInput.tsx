import React, { useCallback } from "react";
import styled from "styled-components";
import { IFormField, UpdateEvent } from "../../../models/event.model";
import { inputStyles } from "../../styled/mixins";

interface IInlineInputProps {
    formField: IFormField<string | number>;
    onChange: UpdateEvent;
    placeholder?: string;
    width?: string;
    margin?: string;
    className?: string;
    type?: 'text' | 'time' | 'date';
}

const Input = styled.input`
    ${inputStyles};
    min-width: 50px;
    width: ${({ width } ) => width || '-webkit-fill-available'};

    &&::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

export const InlineInput: React.FC<IInlineInputProps> = ({ formField, onChange, placeholder, width, className, type = 'text' }) => {

    const handleChange = useCallback((event) => {
        onChange(event);
    }, [onChange]);

    return ( 
        <Input 
            name={formField.name}
            className={className}
            value={formField.value}
            placeholder={placeholder}
            onChange={handleChange}
            width={width}
            type={type}
            role={type} />
    );
}