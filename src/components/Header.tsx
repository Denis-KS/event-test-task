import React from "react";
import styled from "styled-components";
import { AppContentBox } from "./styled/Box/AppContentBox";
import { Box } from "./styled/Box/Box";

interface IHeaderProps {
    title: string;
}

const HeaderWrapper = styled(AppContentBox)`
    position: relative;
    background-color: #35588e;
    max-width: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: #1c3b68;
    }
`;

const HeaderBox = styled(Box)`
    margin: auto;
    max-width: ${({ theme }) => theme.breakpoints.ipad};
    min-width: ${({ theme }) => theme.breakpoints.iphone};
`;

const H1 = styled.h1`
    color: white;
    font-weight: normal;
    margin: 0;
    padding: 10px 0 0 10px;
`;

export const Header: React.FC<IHeaderProps> = ({ title }) => (
    <HeaderWrapper>
        <HeaderBox>
            <H1>{title}</H1>
        </HeaderBox>
    </HeaderWrapper>
);
