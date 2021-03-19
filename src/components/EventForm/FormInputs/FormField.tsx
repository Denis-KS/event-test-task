import React from "react";
import styled from "styled-components";
import { Box } from "../../styled/Box/Box";
import { FlexBox } from "../../styled/Box/FlexBox";
import { DescriptiveSpan } from "../../styled/DescriptiveSpan";

interface ISingleLineInputProps {
    title: string;
    required?: boolean;
    validationError?: string;
}

const FormFieldWrapper = styled(FlexBox)<{ content?: string }>`
    margin: 10px 0 0 0;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.iphone5 }) {
        flex-direction: column;
        width: initial;
    }
`;

const InputWrapper = styled(FlexBox)<{ width?: string}>`
    width: ${props => props.width || 'initial'};

    & > * {
        width: 100%;
    }
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.iphone5 }) {
        width: initial;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.iphone5 }) and (max-width: ${({ theme }) => theme.breakpoints.ipad }) {
        width: 100%;
    }
`;

const Label = styled.label`
    text-transform: uppercase;
    color: #35588e;
    padding: 0 10px 0 0;
    min-width: 100px;
    font-size: 14px;
    line-height: 33px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.iphone5 }) {
        padding: 0;
        width: auto;
        line-height: initial;
    }
`;

const ErrorSpan = styled(DescriptiveSpan)`
    color: #f4433f;
    

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.ipad }) {
        display: none;
    }
`;

const ErrorBox = styled(Box)`
    font-size: 12px;
    height: fit-content;
    max-width: 30%;
    margin: 2px 0 0 15px;
    background-color: #f5858a;
    color: white;
    padding: 5px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        background-color: transparent;
        left: -9px;
        top: 7px;
        width: 0;
        height: 0;
        border-right: 9px solid #f5858a;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;

    }  

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.ipad }) {
        display: none;
    }
`;

export const FormField: React.FC<ISingleLineInputProps> = ({ title, required, validationError, children }) => {
    return (
        <FormFieldWrapper content={validationError}>
            <Label>{title}{required && '*'}</Label>
            <InputWrapper width="50%">
                <FlexBox flexDirection="column">
                    {children}
                    {validationError && <ErrorSpan data-testid={`form-field-error-ipad-${title}`}>{validationError}</ErrorSpan>}
                </FlexBox>
            </InputWrapper>
            {validationError && <ErrorBox data-testid={`form-field-error-lg-${title}`}>{validationError}</ErrorBox>}
        </FormFieldWrapper>
    );
}
