import React from "react";
import { FlexBox } from "../../styled/Box/FlexBox";
import { DescriptiveSpan } from "../../styled/DescriptiveSpan";

interface ITextAreaCharCountProps {
    currentCount: number;
    maxCount: number;
}

export const TextAreaCharCount: React.FC<ITextAreaCharCountProps> = ({ currentCount, maxCount }) => {
    return(
        <FlexBox justifyContent="space-between">
            <DescriptiveSpan>Characters limit is {maxCount}</DescriptiveSpan>
            <DescriptiveSpan data-testid="text-area-char-count">{currentCount}/{maxCount}</DescriptiveSpan>
        </FlexBox>
    );
}