import React, { useCallback } from "react";
import styled from "styled-components";
import { ICredentials } from "../../../models/credentials.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { inputStyles } from "../../styled/mixins";
import { DescriptiveSpan } from "../../styled/DescriptiveSpan";
import { IFormField, UpdateEvent } from "../../../models/event.model";

export interface IDropdownInputProps<T extends ICredentials> {
    formField: IFormField<number | string>;
    onSelect: UpdateEvent | any;
    options: T[];
}

const Select = styled.select`
    ${inputStyles};
`;

export const DropdownInput: React.FC<IDropdownInputProps<any>> = ({ options, onSelect, formField }) => {

    const renderOption = useCallback((option, index) => {
        return (
            <option key={index} value={option.id}>{option.name}</option>
        );
    }, [])

    return(
        <FlexBox flexDirection="column">
            <Select name={formField.name} value={formField.value} onChange={onSelect}>
                {options.map(renderOption)}
            </Select>
            <DescriptiveSpan>Select an activity for event</DescriptiveSpan>
        </FlexBox>
    );
}