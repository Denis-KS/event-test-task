import React from "react";
import styled from "styled-components";
import { FormSectionBox } from "../../styled/Box/FormSectionBox";

interface IFormSectionProps {
    title: string;
}

const StyledFormSectionHeader = styled.h3`
    padding: 0;
    color: #35588e;
`;

const StyledFormSectionDivider = styled.hr`
    color: #efefef;
`;

export const FormSection: React.FC<IFormSectionProps> = ({ title, children }) => {
    return (
        <FormSectionBox>
            <StyledFormSectionHeader>
                {title}
            </StyledFormSectionHeader>
            <StyledFormSectionDivider />
            {children}
        </FormSectionBox>
    );
}