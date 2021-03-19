import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { IFormField, UpdateEvent } from "../../../models/event.model";
import { FlexBox } from "../../styled/Box/FlexBox";
import { inputStyles } from "../../styled/mixins";
import { TextAreaCharCount } from "./TextAreaCharCount";

interface IMultilineInputProps {
    formField: IFormField<string | number>;
    onChange: UpdateEvent;
    placeholder?: string;
    charLimit?: number;
}

const TextArea = styled.textarea`
    resize: none;
    ${inputStyles};
`;


export const MultilineInput: React.FC<IMultilineInputProps> = ({ formField, onChange, placeholder, charLimit }) => {
    const [charCount, setCharCount] = useState(String(formField.value).length);

    const handleChange = useCallback((event) => {
        if (charCount !== null) {
            setCharCount(event.target.value.length);
        }
        onChange(event);
    }, [charCount, onChange]);

    return (
        <FlexBox flexDirection="column">
            <TextArea name={formField.name} value={formField.value} placeholder={placeholder} onChange={handleChange} rows={7} />
            {charLimit && <TextAreaCharCount maxCount={charLimit} currentCount={charCount} />}
        </FlexBox>
    );
}