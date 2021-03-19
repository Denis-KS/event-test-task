import React from "react";
import styled from "styled-components";
import { FlexBox } from "./styled/Box/FlexBox";
import { Span } from "./styled/Span";

const SuccessBox = styled(FlexBox)`
    border: 1px solid #757575;
    border-radius: 5px;
    background-color: #effcf2;
`;

export const SuccessScreen: React.FC = () => {
    return (
        <SuccessBox flexDirection="column" padding="15px 30px" margin="15px 0 0 0">
            <Span fontSize="18px" color="#74b276" padding="0 0 5px 0">Success</Span>
            <Span fontSize="14px">Event has been created</Span>
        </SuccessBox>
    );
}