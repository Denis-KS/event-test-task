import React, { useCallback } from "react";
import styled from "styled-components";
import { ICredentials } from "../../../models/credentials.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { inputStyles } from "../../styled/mixins";
import { IFormField, UpdateEvent } from "../../../models/event.model";

export interface IGroupedDropdownInputProps<T extends ICredentials> {
    formField: IFormField<number | string>;
    onSelect: UpdateEvent | any;
    groups: IDropdownGroup<T>[];
}

export interface IDropdownGroup<T extends ICredentials> {
    name: string;
    options: T[];
}

const Select = styled.select`
    ${inputStyles};
`;

export const GroupedDropdownInput: React.FC<IGroupedDropdownInputProps<any>> = ({ groups, onSelect, formField }) => {

    const renderOption = useCallback((option, index) => {
        return (
            <option key={index} value={option.id}>{option.name}</option>
        );
    }, []);

    const renderGroup = useCallback(({ name, options }: IDropdownGroup<ICredentials>, index: number) => {
        return (
            <optgroup key={index} label={name}>
                {options.map(renderOption)}
            </optgroup>
        );
    }, [renderOption]);

    return(
        <FlexBox flexDirection="column">
            <Select name={formField.name} value={formField.value} onChange={onSelect}>
                {groups.map(renderGroup)}
            </Select>
        </FlexBox>
    );
}